'use strict';

/*
 *
 * TASK 1
 *
 * Напишите функцию которая будет вызываться трижды и складывать
 * все передаваемые ей числа
 *
 * */

function add(x) {
    return function(y){
        return function(z){
            return x + y + z;
        }
    }
}

console.log(add(1)(2)(3)); // 6
console.log(add(10)(5)(15)); // 30

/*
 *
 * TASK 2
 *
 * Напишите функцию которая возвращает объект и одно из свойств объекта
 * это функция
 * После каждого нового вызова метода объекта(функции объекта) в консоле должно отображаться
 * число на 1 больше чем предыдущее
 * ---------------------------------------
 * так же у объекта должен быть метод обнуления счетчика
 * Узнать счетчик напрямую в объекте, нельзя
 *
 * */

function patternModule() {
    let counter = 0;
    const obj = {
        method: function() {
            return ++counter;
        },
        reset: function() {
            counter = 0;
            return counter;  
        },
    };
    return obj;
}

// patternModule

let test = patternModule(); // 0
console.log(test.method()); //1
console.log(test.method()); //2
console.log(test.method()); //3
console.log(test.reset()); //0
console.log(test.method()); //1
console.log(test.method()); //2
console.log(test.method()); //3

/*
 * TASK 1
 *
 * Напишите функцию которая принимает 4 аргумента:
 *
 * -  Объект
 * -  Имя свойства с которым связывается метод
 * -  Сколько раз можно вызвать метод *
 * -  Объявление привязываемого метода ( функция )
 *
 *  При вызове метода отобразите сумму передаваемых
 *  параметров.
 *  Когда заканчивается счетчик, отображается ошибка
 *
 * */

let jun = {};

//function methodCounter(obj, name, num, fn) {
//    obj[name] = fn;
//    obj.counter = num;
//    obj.addCounter = function (quantity) {
//        obj.counter += quantity;
//        return console.log(`Counter was replenished  on ${obj.counter}`);
//    };
//    return function () {
//        return obj;
//    };
//}
//
//function sumLogger () {
//    let arrayWithArguments = [...arguments];
//    
//    if(jun.counter > 0) {
//        --jun.counter;
//        
//        const sumArguments = arrayWithArguments.reduce(function(newValue, value) {
//            return newValue + value;
//        }, 0);
//        
//        return console.log(`You can use this method else: ${jun.counter}; sum of arguments equal: ${sumArguments}.`);
//        
//    } else {
//        return console.log(`ERROR ! add more methods`);
//    }
//}

function methodCounter(obj, name, num, fn) {
    let counter = num;
    obj[name] = function(...args) {
        counter--;
        if(counter === 0) {
            return console.log(`ERROR ! add more methods`);
        }
        return fn(args);
    }
}

methodCounter(jun, 'logger', 2, function (args){

    const sumArguments = args.reduce(function(newValue, value) {
        return newValue + value;
    }, 0);
    return sumArguments;
});

console.log(jun.logger(1, 2, 3, 4)); // 2, 10
console.log(jun.logger(5, 5, 5, 5)); // 1, 20
console.log(jun.logger(5, 5)); // ERROR ! add more methods

// @SUPER,

/*
 * Добавьте функции methodCounter, возможность увеличивать счетчик
 * на заданное число
 *
 * */

//jun.addCounter(10);
//jun.logger(5, 5);
