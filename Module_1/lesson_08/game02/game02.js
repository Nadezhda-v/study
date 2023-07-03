'use strict'

const isCancel = (num) => {
    if (num === null) {
        alert('Конец игры');
        return true;
    }
    return false;
}

const isNumber = (num) => {
    if (Number.isNaN(num) || !Number.isInteger(+num) || num > max || num < min || num === '') {
        alert('Введите число!');
        return false;
    }
    return true;
}

let inputNumberOne;
let inputNumberTwo;
let arrRange = [];
let arrInputNumber = [];
let inputNumber;
let number;
let max;
let min;

do {
    inputNumberOne = prompt('Введите первое число');

    if (isCancel(inputNumberOne)) break;
    if (!isNumber(inputNumberOne)) continue;
    arrRange.push(inputNumberOne);

    let isValidNumberTwo = false;

    while (!isValidNumberTwo) {
        inputNumberTwo = prompt('Введите второе число');

        if (isCancel(inputNumberTwo)) break;
        if (!isNumber(inputNumberTwo)) continue;

        isValidNumberTwo = true;
        arrRange.push(inputNumberTwo);
    }

    max = Math.floor(Math.max(inputNumberOne, inputNumberTwo));
    min = Math.ceil(Math.min(inputNumberOne, inputNumberTwo));
    number = Math.floor(Math.random() * (max - min + 1)) + min;

    if (number) {
        alert('Бот загадал число в указанном диапазоне. Попробуйте угадать!')
    }

} while (arrRange.length != 2);

let count = Math.round((max - min + 1) * 0.3);

if ((max - min + 1) >= 50) {
    count = 15;
}

for (let i = 0; i < count; i++) {
    inputNumber = prompt('Введите число');

    if (isCancel(inputNumber)) break;
    if (!isNumber(inputNumber)) {
        i -= 1;
        continue;
    }

    if (arrInputNumber.includes(inputNumber)) {
        alert('Это число вы уже вводили');
        i -= 1;
    }

    arrInputNumber.push(inputNumber);

    if (inputNumber > number) {
        alert('Меньше!');
    }

    if (inputNumber < number) {
        alert('Больше!');
    }

    if (inputNumber == number) {
        alert('Правильно!');
        break;
    }
}

if (inputNumber != number) {
    alert('Попытки угадать число закончились!');
}