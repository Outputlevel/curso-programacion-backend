import express from 'express';
import compression from 'express-compression';

const app = express();

app.use(compression({
    brotli: { enabled: true, zlib: {}}
}));

app.get('/stringridiculamentegrande', (req, res) => {

    let string = '';
    for (let i = 0; i <= 100000; i++) {
        string += 'Hola Coders, soy un string ridículamente grande.';
    }
    
    res.send(string);
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start Server in Port ${PORT}`);
});