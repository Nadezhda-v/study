'use strict';

let arr = [10, 2, 8, 5];

const getArr = (arr) => {
  const randomNumber = Math.ceil(Math.random() * 10); 
  arr.push(randomNumber);
  let sum = arr.reduce((acc, num) => acc + num, 0);

  if(sum < 50) {
    return getArr(arr);
  }else{
    return arr;
  }
}

const newArr = getArr(arr);
console.log('newArr: ', newArr);
