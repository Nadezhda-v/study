'use strict'

const cart = {
    items: [],      //товары
    totalPrice: 0,  //общая стоимость корзины
    count: 0,       //количество товаров

    getTotalPrice() {
        return this.totalPrice;
    },

    calculateItemPrice() {
        this.totalPrice = this.items.reduce((acc, item) => acc + item.price * item.count, 0);
    },

    add(item, price, count = 1) {
        const obj = {item, price, count};
        this.items.push(obj);
        this.increaseCount(count);
        this.calculateItemPrice();
    },

    increaseCount(num) {
        this.count += num;
    },

    clear() {
        this.items = [];
        this.totalPrice = 0;
        this.count = 0;
    },

    print() {
        console.log(JSON.stringify(this.items));
        console.log(this.totalPrice);
    },
}

const addItemOne = cart.add('Ручка', 15, 3);
const addItemTwo = cart.add('Карандаш', 5, 2);
const addItemThree = cart.add('Тетрадь', 30, 2);
//console.log(cart.items);
//console.log(cart.count);
//console.log(cart.totalPrice);
//cart.clear();
//console.log(cart);
cart.print();

