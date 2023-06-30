'use strict'

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

//1 способ
const  getAverageValue = (arr) => {
    let sum = 0;

    for(let num of arr) {
        sum += num;
    }

    let averageValue = Math.floor(sum / arr.length);

    return averageValue;
}


//2 способ
//const  getAverageValue = (arr) => {
    //let sum = arr.reduce((acc, num) => acc + num);
    //let averageValue = Math.floor(sum / arr.length);

    //return averageValue;
//}

const check = getAverageValue(allСashbox);
console.log('check: ', check);