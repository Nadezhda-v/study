'use strict'

const allСashbox = [
    [12, 4500],
    [7, 3210],
    [4, 650],
    [3, 1250],
    [9, 7830],
    [1, 990],
    [6, 13900],
    [1, 370]
];

const getAveragePriceGoods = (arr) => {
    let allSum = 0;
    let allCount = 0;
    for (let item of arr) {
        const [count, sum] = item;
        allSum += sum;
        allCount += count;
    }
    let averagePrice = Math.round(allSum / allCount);
    return averagePrice;
}

const averagePrice = getAveragePriceGoods(allСashbox);
console.log('averagePrice: ', averagePrice);
