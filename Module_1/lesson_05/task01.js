let euroPerDollar = 1.2;
let dollarPerRubel = 64;

const convertEuro = (euro) => {
    let rubel = euro * euroPerDollar * dollarPerRubel;
    return rubel;
}

const rub = convertEuro(1000);
console.log('ruble: ', rub);
