import express from 'express';
import routerStudents from './routes/studentRouter.js';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const uri = 'mongodb://127.0.0.1:27017/colegio';
//Replace <user> and <password>
//const uri = 'mongodb+srv://<user>:<password>@cluster0.usycu2f.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri);

//Use routers
app.use('/api/students', routerStudents);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start Server in Port ${PORT}`);
});