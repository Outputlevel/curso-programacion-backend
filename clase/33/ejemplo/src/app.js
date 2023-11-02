import express from 'express';

const app = express();

app.get('/test', (req, res) => {
    res.send('Hola mundo');
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start Server in Port ${PORT}`);
});