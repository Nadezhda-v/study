'use strict'

let number = Math.ceil(Math.random() * 100); // генерация числа от 1 до 100

const isCancel = (num) => {
    if (num === null) {
        alert('Конец игры');
        return true;
    }
    return false;
}

const isNumber = (num) => {
    if (Number.isNaN(num) || !Number.isInteger(+num) || num > 100 || num < 1 || num === '') {
        alert('Введите число!');
        return false;
    }
    return true;
}

let inputNumber;

do {
    inputNumber = prompt('Введите целое число от 1 до 100');

    if(isCancel(inputNumber)) {
        break;
    }

    if(!isNumber(inputNumber)) {
        continue;
    }

    if (inputNumber > number) {
        alert('Меньше!');
    }
    
    if (inputNumber < number) {
        alert('Больше!');
    }
    
    if (inputNumber == number) {
        alert('Правильно!');
    }

}while (number != inputNumber);

