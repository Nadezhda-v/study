'use strict'

const getLeapYears = (n, m) => {
    const leapYears = [];
    const startYear = Math.min(n, m);
    const endYear = Math.max(n, m);

    for (let year = startYear; year <= endYear; year++) {
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
            leapYears.push(year);
        }
    }

    return leapYears;
}

const result = getLeapYears(1987, 2023);
console.log('result : ', result );
