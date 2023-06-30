'use strict'

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (arr, arr1) => {
    return arr.filter(item => !arr1.includes(item));
}

const successfulStudents = filter(allStudents, failedStudents);
console.log('successfulStudents: ', successfulStudents);

