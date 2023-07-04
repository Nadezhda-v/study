'use strict'

import {listIPv4} from './ipv4.js';

const getUniqueIP = (arr) => {
  const newArr = [...new Set(arr)].length;
  return newArr;
}

const uniqueIP = getUniqueIP(listIPv4);
console.log('uniqueIP: ', uniqueIP);
