//'use strict';

/*
 * TASK ! ! !
 * Сделайте пожалуйста с теми навыками которые у вас есть ТЕЛЕФОННЫЙ СПРАВОЧНИК
 *
 * Task 0
 *
 * Создайте функцию конструктор Http, которая будет иметь 2 метода
 *
 * createServer() - принимает один аргумент функцию с двумя параметрами ctx и next
 * ctx: Object {
 *   req: Object
 *     PORT: number
 *     url: string
 *   res: Object
 *     status: number,
 *     message: string,
 *     header: Object {
 *       content-type:application/json
 *       }
 *   }
 * next: Function
 *
 *
 * при вызове listen(PORT, host) - в консоле должна отобразится надпись
 * "Server running on https://host:port"
 * и вызваться переданная в createServer функция
 *
 *
 * методы нужно вызывать через chain
 * после вызова метода listen() - должна вызываться переданная в createServer
 * первая функция и возвращать объект и функцию
 *
 * */

function Ctx() {
    return{ req: {
            PORT: 123,
            url: 'google',
        },
        res: {
            status: 1,
            message: 'HELLO',
         header: {
                contentType: 'application/json'
            }
        }
    }
 }

const ctx = new Ctx();

const next = function() {
    console.log("I'm NEXT");
}

function Http() { }
Http.prototype.createServer = function(fn) {
    this.temp = fn;
    return this;
}

Http.prototype.listen = function(PORT, host) {
    console.log(`https://${host}:${PORT}`);
    this.temp(ctx, next);
    this.temp = null;
    
    return this;
}

const server = new Http().createServer(function(ctx, next) {
    console.log(ctx);
    next();
}).listen(3000, 'localhost');


// TASK 1
// Создать класс Human, у которого будут свойства обычного человека:
// имя, возраст, пол, рост, вес.
// Используя прототипное наследование создать дочерние классы Worker
// (дописать в них поля места работы, зарплата, метод "работать")
// и Student (дописать поля места учебы, стипендией, метод "смотреть сериалы")
//
// Создать несколько экземпляров классов Worker и Student, вывести их в консоль.
// Убедиться что они имеют поля родительского класса Human

function Human(object) {
    this.name = object.name;
    this.age = object.age;
    this.gender = object.gender;
    this.height = object.height;
    this.weigth = object.weigth;
    this.inheritHuman = function() {
        return this;
    }
}

Human.prototype.Worker = function(object) {
    this.company = object.company;
    this.salary = object.salary;
    this.toWork = function() {
        return 'work';
    }
    this.inheritProperties = this.inheritHuman();
}

Human.prototype.Student = function(object) {
    this.university = object.university;
    this.grants = object.grants;
    this.toWatchSeries = function() {
        return`watch tv series`;
    }
    this.inheritProperties = this.inheritHuman();
}

const vasya = new Human({name: 'Vasya', age: '30', gender: 'Male', height: '1.8 m', weigth: '80 kg'});
vasya.Worker({company: 'qwerty', salary: '007'});
console.log(vasya);
console.log(vasya.toWork());

const sasha = new Human({name: 'Sasha', age: '18', gender: 'Male', height: '1.8 m', weigth: '70 kg'});
sasha.Student({university: 'ytrewq', grants: '700'});
console.log(sasha);
console.log(sasha.toWatchSeries());

// @SUPER

/*
 *
 * TASK 0
 * Создайте функцию обертку над другой функцией
 * Каждый раз при вызове внутренней функции в консоле будут отображаться аргументы функции
 * которую мы обернули
 *
*/

function wraper(func) {
    wraper.prototype.args = 22;
    return wraper.args;
}

function sum(a, b) {
    return a + b;
}

console.log(wraper(sum(2, 2)))
