'use strict';

{
    const nameItem = 'book';
    const quantityItems = 2;
    const categoryItem = 'literature';
    const priceItem = 5.6;

    let sum = quantityItems * priceItem + ' $';

}

{
    const nameItem = 'magazine';
    const quantityItems = 1;
    const categoryItem = 'literature';
    const priceItem = 2.1;

    let sum = quantityItems * priceItem + ' $';

}

{
    const outItem = prompt('Введите наименование товара') || 'book';
    const outQuantity = +prompt('Введите количество товара');
    const outCategory = prompt('Введите категорию товара') || 'literature';
    const outPrice = +prompt('Введите цену товара');

    let sum = outQuantity * outPrice;
    let out = `На складе ${outQuantity} единиц(ы) товара "${outItem}" на сумму ${sum} долларов`;

    if(Number.isNaN(outQuantity) || Number.isNaN(outPrice)) {
        alert('Вы ввели некорректные данные')
    }else{
        alert(out);
    }
}

