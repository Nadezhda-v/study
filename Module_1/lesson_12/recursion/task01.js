'use strict';

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
let count;

const getInputNumberOne = () => {
  inputNumberOne = prompt('Введите первое число');

  if (isCancel(inputNumberOne)) return;
  if (!isNumber(inputNumberOne)) getInputNumberOne();
  arrRange.push(inputNumberOne);

  getInputNumberTwo();
};

const getInputNumberTwo = () => {
  inputNumberTwo = prompt('Введите второе число');

  if (isCancel(inputNumberTwo)) return;
  if (!isNumber(inputNumberTwo)) getInputNumberTwo();

  arrRange.push(inputNumberTwo);

  max = Math.floor(Math.max(inputNumberOne, inputNumberTwo));
  min = Math.ceil(Math.min(inputNumberOne, inputNumberTwo));
  number = Math.floor(Math.random() * (max - min + 1)) + min;

  if (number) {
    alert('Бот загадал число в указанном диапазоне. Попробуйте угадать!')
  }

  getCount();
  getNumber(0);
};

const getCount = () => {
  count = Math.round((max - min + 1) * 0.3);

  if ((max - min + 1) >= 50 && (max - min + 1) < 101) {
    count = 15;
  }
};

const getNumber = (attempt) => {
  if (attempt >= count) {
    alert('Попытки угадать число закончились!');
    return;
  }

  inputNumber = prompt('Введите число');

  if (isCancel(inputNumber)) return;
  if (!isNumber(inputNumber)) {
    getNumber(attempt - 1);
    return;
  }

  if (arrInputNumber.includes(inputNumber)) {
    alert('Это число вы уже вводили');
    getNumber(attempt - 1);
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
    return;
  }

  getNumber(attempt + 1);
};

getInputNumberOne();