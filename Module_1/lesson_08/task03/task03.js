'use strict'

const generateArr = (count, n, m, str = '') => {
    let arr = [];
    let num;
    let max = Math.floor(Math.max(n, m));
    let min;

    if (max === n) {
        min = Math.ceil(m);
    } else {
        min = Math.ceil(n);
    }

    while (arr.length < count) {
        num = Math.floor(Math.random() * (max - min + 1)) + min;

        if(str === '') {
            arr.push(num);
        }else if(str === 'even' && num % 2 == 0) {
            arr.push(num);
        }else if(str === 'odd' && num % 2 != 0) {
            arr.push(num);
        }
        
    }
    return arr;
}
const arr = generateArr(5, -5, 10, 'odd');
console.log('arr: ', arr);
