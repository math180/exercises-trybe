let moment = require('moment');

let age = moment('02092002', 'DDMMYYYY');
let fromNow = age.fromNow();

console.log('A sua idade atual é de:' + fromNow);

