'use strict'

const generateArr = (count, n, m) => {
    let arr = [];
    let num;
    let max = Math.floor(Math.max(n, m));
    let min;

    if(max === n) {
        min = Math.ceil(m);
    }else{
        min = Math.ceil(n);
    }
    
    for (let i = 0; i < count; i++) {
        num = Math.floor(Math.random() * (max - min + 1)) + min;
        arr.push(num);
    }
    return arr;
}

const arr = generateArr(5, -5, 10);
console.log('arr: ', arr);
