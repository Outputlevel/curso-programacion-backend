import dotenv from 'dotenv';

const env = 'DEV';
dotenv.config({
    path: env === 'PROD' ? './.env.prod' : './.env.dev'
});

export default {
    port: process.env.PORT,
    mongo_url: process.env.MONGO_URL,
    admin_name: process.env.ADMIN_NAME,
    admin_pass: process.env.ADMIN_PASS
}