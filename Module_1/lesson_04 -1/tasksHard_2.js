const profit = +prompt('Введите сумму вашего дохода за месяц');

let countTax;
let addTax;
let min = 15000;
let max = 50000;

if (profit <= min) {
    countTax = profit * 0.13; 
} else if (profit <= max) {
    addTax = profit - min;
    countTax = min * 0.13 + addTax * 0.2; 
} else {
    addTax = profit - max;
    countTax = min * 0.13 + (max - min) * 0.2 + addTax * 0.3; 
}

console.log('Сумма вашего налога составит:', `${countTax}`);