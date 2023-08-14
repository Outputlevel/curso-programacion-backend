const moment = require('moment');

const dateNow = moment();
console.log(dateNow);

const dateBorn = moment('1994-03-12');
console.log(dateBorn);

if (dateBorn.isValid()) {
    const allDays = dateNow.diff(dateBorn, 'days');

    console.log(`Han pasado ${allDays} dias desde tu nacimiento`);
}
