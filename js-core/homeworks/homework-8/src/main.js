'use strict';

/*
 *
 * TASK 1
 *
 * Создайте функцию которая будет запоминать переданные
 * ей аргументы, и прибавлять их в строку
 * и отображать в консоле всю строку
 *
 *
 * */

function solution1(someString) {
  /* ВАШ КОД */
    let stringWhatRemeberAllArguments = '';
    return function (someString) {
        stringWhatRemeberAllArguments = stringWhatRemeberAllArguments + ' ' + someString;
        return stringWhatRemeberAllArguments;
    }
}

let stringBuffer = solution1('');

console.log(stringBuffer('Замыкания')); // Замыкания
console.log(stringBuffer('Использовать нужно')); // Замыкания Использовать нужно
console.log(stringBuffer('Привет')); // Замыкания Использовать нужно Привет вызываем много раз

/*
 *
 * TASK 2
 * Напишите функцию которая принимает в качестве аргумента строку
 * из скобочек и посчитайте, * что все скобочки закрываются корректно
 *
 * */

function validBraces(str) {
    let stack = [];
    let last;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == '[' || str[i] == '(' || str[i] == '{' || str[i] == '<') {
            stack.push(str[i]);
        } else if (str[i] == ']' || str[i] == ')' || str[i] == '}' || str[i] == '>') {
            if (stack.length) {
                last = stack[stack.length - 1];
                if ((last == '[' && str[i] == ']') || (last == '(' && str[i] == ')') ||
                    (last == '{' && str[i] == '}') || (last == '<' && str[i] == '>')) {
                    stack.pop();
                }
            } else { 
                return false;
            }
        }
    }
    return (!stack.length);
}

console.log(validBraces('(){}[]')); // => returns true
console.log(validBraces('(}')); // => returns false
console.log(validBraces('[(])')); // => returns false
console.log(validBraces('([{}])')); // => returns true
console.log(validBraces('({[]})')); // => returns true

// @SUPER

/*
 *
 * Напишите функцию которая будет принимать одно число и выводить сумму
 * всех натуральных чисел
 * sum(5) // 5+4+3+2+1
 *
 * Вычисления должны кешироваться, если в функцию попадает закешированное
 * значение, в консоле должно отобразиться
 * Значение взято из кэша
 *
 * Нельзя использовать внешние значения/переменные/функции
 *
 * */


let solution = function() {

let cache = {};
function sum(num) {
    if (cache[num]) {
        return `${cache[num]} Значение взято из кэша`;
    } else {
        let resultSum = num;
        for (let i = 1; i < num; i++) resultSum += i;
        cache[num] = resultSum;
        return `${resultSum} Значение закешировано`;
    }
}

return sum;
}

let superPuper = solution();

console.log(superPuper(5)); // 15 Значение кешировано
console.log(superPuper(5)); // 15 Значение взято из кэш

console.log(superPuper(6)); // 21 Кешировано
console.log(superPuper(6)); // 21 Значение взято из кэша
