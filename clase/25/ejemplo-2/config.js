import dotenv from 'dotenv';
import {Command} from 'commander';

const program = new Command();

program.requiredOption('--mode <mode>', 'Mode App', 'develpment');
program.parse();

const env = program.opts().mode;
dotenv.config({
    path: env === 'production' ? './.env.prod' : './.env.dev'
});

export default {
    port: process.env.PORT,
    mongo_url: process.env.MONGO_URL,
    admin_name: process.env.ADMIN_NAME,
    admin_pass: process.env.ADMIN_PASS
}