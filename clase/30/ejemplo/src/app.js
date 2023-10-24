import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import twilio from 'twilio';

const app = express();

// >>>>>>>>>> Send Email
const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    } 
});

app.get('/send/mail', async (req, res) => {

    try {
        const result = await transport.sendMail({
            from: 'Joaco Coder <joaquin.cejas.2020@gmail.com>',
            to: 'joaquincjs@hotmail.com',
            subject: 'Correo de prueba',
            html: ` <div>
                        <h1>Esto es un test!</h1>
                        <p>Hola mundo</p>
                        <img src="cid:cheems"/>
                    </div>`,
            attachments: [{
                filename: 'cheems.jpg',
                path: 'D:\\Projects\\CoderHouse\\curso-programacion-backend\\clase\\30\\ejemplo\\src\\images\\cheems.jpg',
                cid: 'cheems'
            }]
        });
    
        res.send({status: 'success', result});
    } catch (error) {
        console.log(error.message);
        res.status(500).send({status: 'error', message: 'Error in send email!'});
    }
});

// >>>>>>>>>> Send SMS
const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);
app.get('/send/sms', async (req, res) => {
    try {
        const result = await client.messages.create({
            body: 'Esto es un mensaje SMS de pruebas',
            from: process.env.TWILIO_PHONE_NUMBER,
            to: '+541130052081'
        });
        res.send({status: 'success', result});
    } catch (error) {
        console.log(error.message);
        res.status(500).send({status: 'error', message: 'Error in send SMS!'});
    }
});


const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => {
    console.log(`Start Server in Port ${PORT}`);
});