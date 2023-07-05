'use strict';

const cart = {
  items: [], // товары
  count: 0, // количество товаров
  discount: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    }

    if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
  },

  calculateItemPrice() {
    let sum = this.items.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
    return sum - (sum * (this.discount / 100));
  },

  add(item, price, count = 1) {
    const obj = { item, price, count };
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
cart.setDiscount('METHED');

cart.print();