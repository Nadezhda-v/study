const profit = +prompt('Введите сумму вашего дохода за месяц');

let countTax;
let addTax;
let rest;
let min = 15000;
let max = 50000;

if(profit <= min && profit > 0) {
    countTax = profit * 0.13;
}

if(profit > min && profit <= max) {
    rest = profit - min;
    addTax = rest * 0.2;
    countTax = min * 0.13 + addTax;

}

if(profit > max) {
    rest = profit - max;
    addTax = rest * 0.3;
    countTax = max * 0.13 + addTax;
}


console.log('Сумма вашего налога составит:', `${countTax}`);