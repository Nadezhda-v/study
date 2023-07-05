'use strict';

const rectagle = {
  width: 5,
  height: 5,

  setWidth(val) {
    if(typeof val === 'number') {
      this.width = val;
    }else{
      console.log('Введенное значение должно быть числом');
    }
  },

  setHeight(val) {
    if(typeof val === 'number') {
      this.height = val;
    }else{
      console.log('Введенное значение должно быть числом');
    }
  },

  get perimetr() {
    return (this.width + this.height) * 2 + ' см';
  },

  get square() {
    return this.width * this.height + ' см^2';
  },
}

console.log(rectagle.perimetr);
console.log(rectagle.square);

rectagle.setWidth(10);
rectagle.setHeight(8);

console.log(rectagle.perimetr);
console.log(rectagle.square);