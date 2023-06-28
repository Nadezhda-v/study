const profit = +prompt('Введите сумму вашего дохода за месяц');

let countTax;

if(profit < 15000 && profit > 0) {
    countTax = profit * 0.13;
}

if(profit >= 15000 && profit < 50000) {
    countTax = profit * 0.2;
}

if(profit >= 50000) {
    countTax = profit * 0.3;
}


console.log('Сумма вашего налога составит:', `${countTax}`);