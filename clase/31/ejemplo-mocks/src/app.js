import express from 'express';
import userRouter from './routes/userRouter.js';

const app = express();

app.use('/api/users', userRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Start server in port ${PORT}`));