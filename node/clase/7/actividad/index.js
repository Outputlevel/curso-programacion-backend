import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let data = "Frase Inicial";

app.get('/api/frase', async (req, res) => {
    res.send({
        frase: data
    });
});

app.get('/api/palabras/:pos', async (req, res) => {
    const pos = parseInt(req.params.pos);
    const dataArray = data.split(' ');

    if (dataArray[pos - 1]) {

        return res.send({
            buscada: dataArray[pos - 1]
        });
    }

    res.status(400).send('Palabra no encontrada');
});

app.post('/api/palabras', async (req, res) => {
    const palabra = req.body.palabra ? req.body.palabra : null;

    if (!palabra) {
        return res.status(400).send('Debe ingresar una palabra valida!');
    }

    data += ` ${palabra}`;
    const dataArray = data.split(' ');

    res.send({
        agregada: palabra,
        pos: dataArray.length
    });
});

app.put('/api/palabras/:pos', async (req, res) => {
    const pos = parseInt(req.params.pos);
    const palabra = req.body.palabra ? req.body.palabra : null;

    if (!palabra) {
        return res.status(400).send('Debe ingresar una palabra valida!');
    }

    const dataArray = data.split(' ');

    if (dataArray[pos - 1]) {

        const response = {
            actualizada: palabra,
            anterior: dataArray[pos - 1]
        }

        dataArray[pos - 1] = palabra;
        data = dataArray.toString().replace(/,/g, ' ');

        return res.send(response);
    }

    res.status(400).send('Palabra a actualizar no encontrada');
});

app.delete('/api/palabras/:pos', async (req, res) => {
    const pos = parseInt(req.params.pos);

    const dataArray = data.split(' ');

    if (dataArray[pos - 1]) {
        
        const newDataArray = dataArray.filter(palabra => palabra !== dataArray[pos - 1]);

        data = newDataArray.toString().replace(/,/g, ' ');

        return res.send(`La palabra "${dataArray[pos - 1]}" fue eliminada correctamente`);
    }

    res.status(400).send('Palabra a eliminar no encontrada');
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor arriba en el puerto ${PORT}`);
});
