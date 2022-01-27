import moment from 'moment';

let fecha1 = moment('1987-05-31');
let fecha2 = moment('2022-01-06');

let days = fecha2.diff(fecha1, 'year');
console.log(`Dias son ${days}`);