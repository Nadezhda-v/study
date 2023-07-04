'use strict';

const cart = {
  items: [], // товары
  count: 0, // количество товаров

  get totalPrice() {
    return this.calculateItemPrice();
  },

  calculateItemPrice() {
    return this.items.reduce((acc, item) => {
      acc + item.price * item.count, 0;
    });
  },

  add(item, price, count = 1) {
    const obj = {item, price, count};
    this.items.push(obj);
    this.increaseCount(count);
  },

  increaseCount(num) {
    this.count += num;
  },

  clear() {
    this.items = [];
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  },

};

cart.add('Ручка', 15, 3);
cart.add('Карандаш', 5, 2);
cart.add('Тетрадь', 30, 2);

cart.print();

