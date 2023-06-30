'use strict'

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];


const addPrefix = (arr, prefix) => {
    let newArr = [];

    for(let item of arr) {
        item = prefix + ' ' + item;
        newArr.push(item);
    }

    return newArr;
}

const newNames = addPrefix(names, 'Mr');
console.log('newNames: ', newNames);
