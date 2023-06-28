{
    const rain = Math.round(Math.random());

    if (rain === 1) {
        alert('Пошёл дождь. Возьмите зонт!');
    }

    if (rain === 0) {
        alert('Дождя нет!');
    }

    console.log('rain : ', rain);
}

{
    const math = +prompt('Введите кол-во баллов по математике');
    const rus = +prompt('Введите кол-во баллов по русскому языку');
    const informatic = +prompt('Введите кол-во баллов по информатике');

    let sum = math + rus + informatic;

    if(sum >= 265) {
        alert(`Поздравляю, вы поступили на бюджет! У Вас ${sum} баллов`);
    }else{
        alert('У Вас не достаточно баллов');
    }
}

{
    let countMoney = +prompt('Сколько денег вы хотите снять?');

    if(countMoney % 100 === 0) {
        console.log('Вывод средств успешно выполнен');
    }else{
        console.log(`Операция не выполненена. Минимальный номинал выдаваемых купюр 100р`)
    }
}