import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/operacionsencilla', (req, res) => {
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
        sum += i;
    }
    res.send({
        result: sum
    });
});

app.get('/operacioncompleja', (req, res) => {
    let sum = 0;
    for (let i = 0; i < 5e8; i++) {
        sum += i;
    }
    res.send({
        result: sum
    });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start Server in Port ${PORT}`);
});