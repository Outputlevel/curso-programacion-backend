import { Router } from "express";
import { MongoClient } from "mongodb";

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
    try {
        await client.connect();
        console.log('Conexión a la base de datos establecida');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        return error;
    }
}

async function runQuery(dataBase, coll, queryString) {
    try {
        const db = client.db(dataBase);
        const collection = db.collection(coll);
        const res = await eval('collection.' + queryString); // Ejecuta string como código
        
        return await res.toArray();

    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        return error;
    } finally {
        client.close(); // Cierra la conexión cuando hayas terminado
    }
}

const router = Router();

let result = "";
let dataBase = "";
let collection = "";
let query = "";

router.get('/', (req, res) => {
    res.render(
        'index',
        {
            title: "CoderHouse",
            style: "index.css",
            dataBase: dataBase,
            collection: collection,
            query: query,
            result: result
        }
    );
});

router.post('/executeQuery', async (req, res) => {
    
    await connect();

    dataBase = req.body.dataBase ?? "miPrimeraBase";
    collection = req.body.collection ?? "usuarios";
    query = req.body.query;

    result = JSON.stringify((await runQuery(dataBase, collection, query)), null, 4);
    
    res.redirect('/');
});

export default router;