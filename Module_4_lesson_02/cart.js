'use strict'

const Cart = function() {
  this.goods = []; // товары
  this.totalPrice = 0; // общая стоимость корзины
  this.count = 0; // количество товаров
};

Cart.prototype.getTotalPrice = function() {
  return this.totalPrice;
};

Cart.prototype.calculateGoodsPrice = function() {
  this.totalPrice = this.goods.reduce((acc, item) =>
    acc + (item.price * item.count * (1 - item.discount/100)), 0);
};

Cart.prototype.addGoods = function(item, count = 1) {
  item.count = count;
  this.goods.push(item);
  this.increaseCount(count);
  this.calculateGoodsPrice();
};

Cart.prototype.increaseCount = function(num) {
  this.count += num;
};

Cart.prototype.clear = function() {
  this.goods = [];
  this.totalPrice = 0;
  this.count = 0;
};

Cart.prototype.print = function() {
  console.log(JSON.stringify(this.goods));
  console.log(this.totalPrice);
};

const Goods = function(title, price, discount) {
  this.title = title;
  this.price = price;
  this.discount = discount;
};

const FoodGoods = function(title, price, discount, calories) {
  Goods.call(this, title, price, discount);
  this.calories = calories;
};

const СlothingGoods = function(title, price, discount, material) {
  Goods.call(this, title, price, discount);
  this.material = material;
};

const TechnicsGoods = function(title, price, discount, type) {
  Goods.call(this, title, price, discount);
  this.type = type;
};

const humburg = new FoodGoods('humburg', 1000, 0, 800);
const shirt = new СlothingGoods('shirt', 5000, 5, 'cotton');
const laptop = new TechnicsGoods('Aspire 5 A515-54', 80000, 3, 'laptop');

const сart = new Cart();
сart.addGoods(humburg);
сart.addGoods(shirt);
сart.addGoods(laptop);

сart.print();
