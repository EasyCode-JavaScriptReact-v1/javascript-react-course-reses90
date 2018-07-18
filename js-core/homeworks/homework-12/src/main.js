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

const next = function() {
    console.log("I'm NEXT");
}

function Http() { }

Http.prototype.createServer = function(fn) {
    const ctx = { req: {
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
    
    
    this.callback = () => {
        return fn(ctx, next())
    }
    return this;
}

Http.prototype.listen = function(PORT, host) {
    console.log(`https://${host}:${PORT}`);
    this.callback();
    this.callback = null;
    
    return this;
}

const server = new Http().createServer(function(ctx, next) {
    console.log(ctx);
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
}

function Worker(object) {
    this.company = object.company;
    this.salary = object.salary;
    
    Human.call(this, object)
}

Worker.prototype.constructor = Human;

Worker.prototype.toWork = function() {
    return 'work';
}

function Student(object) {
    this.university = object.university;
    this.grants = object.grants;
    
    Human.call(this, object)
}

Student.prototype.construstor = Human;

Student.prototype.toWatchSeries = function() {
    return`watch tv series`;
}

let vasya = new Worker({name: 'Vasya', age: '30', gender: 'Male', height: '1.8 m', weigth: '80 kg', company: 'qwerty', salary: '007'});
console.log(vasya);
console.log(vasya.toWork());

let sasha = new Student({name: 'Sasha', age: '18', gender: 'Male', height: '1.8 m', weigth: '70 kg', university: 'ytrewq', grants: '700'});
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
    return (...args) => {
        console.log(args);
        return func(...args);
    }
}

function sum(a, b) {
    return a + b;
}

const test = wraper(sum);
console.log(test(10, 12))
