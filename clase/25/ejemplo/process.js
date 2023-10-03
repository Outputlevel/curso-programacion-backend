import {Command} from 'commander';

const program = new Command();

program
.option('-d', 'Descripción de este comando', false)
.option('-p <port>', 'Puerto del servidor', 8080)
.requiredOption('-u <user>', 'Usuario que ejecuta el programa', 'Usuario no declarado!');

program.parse();
//console.log(process.argv.slice(2));

console.log('Options: ', program.opts());
console.log('Remaining Arguments: ', program.args);