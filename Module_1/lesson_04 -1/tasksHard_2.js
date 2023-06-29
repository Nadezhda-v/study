const profit = +prompt('Введите сумму вашего дохода за месяц');

let countTax;
let addTax;
let rest;
let min = 15000;
let max = 50000;

if(profit > max) {
    rest = profit - max;
    addTax = rest * 0.3;
    countTax = (max - min) * 0.2 + min * 0.13 + addTax;
}

if(profit > min) {
    rest = profit - min;
    addTax = rest * 0.2;
    countTax = min * 0.13 + addTax;
}

if(profit > 0) {
    countTax = profit * 0.13;
}

console.log('Сумма вашего налога составит:', `${countTax}`);