'use strict'

const getUniqueIP = (arr) => {
    const newArr = [...new Set(arr)].length;
    return newArr;
}
