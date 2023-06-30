'use strict'

const isPrime = (n) => {
    if(n === 0) return false;

    for(let i = 2; i < Math.abs(n); i++) {
        if(n % i == 0) {
            return false;
        }
    }
    return true;
}

const numPrime = isPrime(25);
console.log('numPrime: ', numPrime);
