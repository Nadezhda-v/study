const calculate = (sum, quantity, promoCode = '') => {
    let total = 0;
    let total2 = 0;
    let total3 = 0;

    if (quantity > 10) {
        total = sum * 0.03;
        sum = sum - total;
    }

    if (sum > 30000) {
        total2 = (sum - 30000) * 0.15;
        sum = sum - total2;
    }

    if (promoCode === 'METHED') {
        total3 = sum * 0.1;
        sum = sum - total3;
    }

    if (promoCode === 'G3H2Z1') {
        if(sum > 2000) {
            sum = sum - 500;
        }
    }
    return sum;
}

const sum = calculate(10000, 12, 'METHED');
console.log('sum: ', sum);
