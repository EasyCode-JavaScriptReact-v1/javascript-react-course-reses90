'use strict';

/*
 1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 // concat
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */

let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];
let arr2 = [
  'a',
  0,
  0,
  'b',
  null,
  'c',
  'd',
  0,
  1,
  false,
  0,
  1,
  0,
  3,
  [],
  0,
  1,
  9,
  0,
  0,
  {},
  0,
  0,
  9
];

function moveZeroToEnd(arr) {
    
    let oldArrayWithoutZero = [];
    let newArray = [];
    
    for(let i = 0; i < arr.length; i++) {
        const elemOfArr = arr[i];
        
        if(elemOfArr !== 0) {
            oldArrayWithoutZero.push(elemOfArr);
        }
        
        if(elemOfArr === 0) {
            newArray.push(elemOfArr);
        }
    }
    return console.log(oldArrayWithoutZero.concat(newArray));
}


moveZeroToEnd(arr1);
moveZeroToEnd(arr2);

/*
 2. Верните сумму двух найменьших чисел в массиве
 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10
 */

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

function minimalNumber(arr) {
    arr.sort(compareNumeric);
    return arr[0] + arr[1];
}

console.log(minimalNumber([10,20,30,1,31,11,10]));
console.log(minimalNumber([-1,0,25]));
console.log(minimalNumber([-4,-10,25,10]));
console.log(minimalNumber([0,200,10,25,15]));

/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */

function nameShuffler(str) {
    
    let transformStrToArray = str.split(' ');
    let reverseTheArray = transformStrToArray.reverse();
    let transformStrToString = reverseTheArray.join(' ');
    
    return transformStrToString;
}

console.log(nameShuffler('James Bond'));
console.log(nameShuffler('Arnold Schwarzenegger'));
console.log(nameShuffler('john McClane'));


/*
 // !
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */

function capMe(arr) {
    
    for(let i = 0; i < arr.length; i++) {
        let elemOfArray = arr[i];
        let valueOfElemToLowerCase = elemOfArray.toLocaleLowerCase();
        let divideOnArray = valueOfElemToLowerCase.split('');
        let firstLetterToUpperCase = divideOnArray[0].toUpperCase();
        divideOnArray.shift();
        divideOnArray.unshift(firstLetterToUpperCase);
        let joinUp = divideOnArray.join('');
        arr[i] = joinUp;
    }
    return arr;
}

console.log(capMe(['jo', 'nelson', 'jurie']));
console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']));

// @SUPER
/*
 1. Найдите число отсутствующее в заданной последовательности
 example:
  [1,3,5,9] => 7 (9-1) / 4 == 2
  [0,8,16,32] => 24
  [4, 6, 8, 10] => 2 // число сначала
  [0,16,24,32] => 8
 */

function random(arr) {
}

random([1, 3, 5, 9]);
random([0, 8, 16, 32]);
random([0, 16, 24, 32]);
random([4, 6, 8, 10]);

/*
 Задача с собеседований*
 2. Напишите функция которая преобразовывает/открывает скобки всех
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов
 example:
  [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
  [25,10,[10,[15]]] => [25,10,10,15]
 */

function openBraces(arr) {}