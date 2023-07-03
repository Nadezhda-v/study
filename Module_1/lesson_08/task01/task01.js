'use strict'

const generateArr = (count) => {
    let arr = [];
    let num;  
    for (let i = 0; i < count; i++) {
        num = Math.ceil(Math.random() * 100);
        arr.push(num);
    }
    return arr;
}

const arr = generateArr(25);
console.log('arr: ', arr);


