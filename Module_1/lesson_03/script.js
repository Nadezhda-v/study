'use strict';

{
    const nameItem = 'book';
    const quantityItems = 2;
    const categoryItem = 'literature';
    const priceItem = 5.6;

    let sum = quantityItems * priceItem + ' $';

    console.log('Наименование товара: ', nameItem);
    console.log('Общая сумма товара: ', sum);
}

{
    const nameItem = 'magazine';
    const quantityItems = 1;
    const categoryItem = 'literature';
    const priceItem = 2.1;

    let sum = quantityItems * priceItem + ' $';

    console.log('Наименование товара: ', nameItem);
    console.log('Общая сумма товара: ', sum);
}

{
    const outItem = prompt('Введите наименование товара') || 'book';
    const outQuantity = prompt('Введите количество товара') || 2;
    const outCategory = prompt('Введите категорию товара') || 'literature';
    const outPrice = prompt('Введите цену товара') || 5.6;

    let sum = outQuantity * outPrice;
    let out = `На складе ${outQuantity} единиц(ы) товара "${outItem}" на сумму ${sum} долларов`;

    console.log('outItem: ', typeof outItem);
    console.log('outQuantity: ', typeof +outQuantity);
    console.log('outCategory: ', typeof outCategory);
    console.log('outPrice: ', typeof +outPrice);
    console.log(out);
}

