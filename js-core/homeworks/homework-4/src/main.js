
/*
* Напишите функцию которая будет принимать 1 аргумент и в зависимости от типа аргумента
*
* Если тип аргумента число или объект -> возвращать true
* Если тип аргумента функция -> возвращать false
* Если тип аргумента Строка и длина этой строки не равна 10 -> возвращать "длина вашей строки: <длина строки>
*                            Если длина 10 -> 'you win'
*
*
*
*
* */

function returnValueFromTypeOfData (argum) {
    
    if(typeof argum === 'number' || typeof argum === 'object') {
        return true;
    }
    
    if(typeof argum === 'function') {
        return false;
    }
    
    if(argum.length !== 10 && typeof argum === 'string') {
        return `Длина вашей строки: ${argum.length}`;
    }
    
    if(argum.length === 10 && typeof argum === 'string') {
        return `you win`;
    }
}

console.log(returnValueFromTypeOfData(1));
console.log(returnValueFromTypeOfData({}));
console.log(returnValueFromTypeOfData(function someFunction () {}));
console.log(returnValueFromTypeOfData(`12345678`));
console.log(returnValueFromTypeOfData(`123456789`));
console.log(returnValueFromTypeOfData(`1234567890`));


/*
*
*  Задача в классе !
*
* */
const webStore = {
    catagory: {
        noteBook: [`ASUS`, `Lenovo`, `Dell`, `HP`],
        mobile: [`Nokia`, `Apple`, `Sony`],
    }
}

const category = webStore.catagory;

function catagoryFromWebStore (obj) {
    
    for(let key in category) {
        
        console.log(`Категория:`, key);
        
        for(let i = 0; i < category[key].length; i++) {
            
            console.log(`Содержимое категории:`, category[key][i]);
            
        }
    }
}

catagoryFromWebStore(category);

/*
 1. Напишите функцию которая принимает 2 числа
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */

function numbersBetween(a, b) {
    
    for(let i = a; i <= b; i++) {
       console.log(i);
    }
    
}

numbersBetween(3, 5);
// 3, 4, 5

numbersBetween(10, 12);
// 10, 11, 12

numbersBetween(20, 25);



/*
 2. Перепишите задачу FizzBuzz, но с использованием цикла.
 Расчет чисел должен идти до 100
 */

// 1. FizzBuzz 3, 5, 3 && % 5

function FizzBuzz(number) {
    
    if(number % 3 === 0 && number % 5 === 0) {
        return `FizzBuzz`;
    }
    
    if(number % 3 === 0) {
        return `Fizz`;
    }
    
    if(number % 5 === 0) {
        return `Buzz`;
    }
    return number;
}

function fizzBuzz100() {
    for(let i = 1; i <= 100; i++) {
        console.log(FizzBuzz(i));
    }
}

fizzBuzz100();


/*
 3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 */

let arr = [1, null, undefined, 'str', {}, [], function() {}];

function returnTypeofValueOfArray (someArraay) {
    
    for(let i = 0; i < someArraay.length; i++) {
        console.log(typeof someArraay[i]);
    }
        
}

returnTypeofValueOfArray(arr);


/*
 1. @@SUPER@@. Вам дан массив array, содержащий внутри объекты.
 Напишите функцию которая внутри цикла проходится по каждому элементу массива
 И проверяет какой тип данных содержит свойство age, если тип данных NaN,
 тогда добавляет данному объекту свойство unknownAge: true
 2. На основании нового массива, создайте новую функцию, которая вернет новый массив
  содержащий все объекты содержащие свойство unknownAge: true
 */

let array = Array.from({length: 35},
  (value, index) => (index % 2 ? {age: index + 2} : {age: NaN}),
);


function solution(arr) {
    
    for(let i = 0; i < arr.length; i++) {
        
        let valueInsideArray = arr[i];
        if(isNaN(valueInsideArray.age)) {
            valueInsideArray.unknownAge = true;
        }
    }
    console.log(returnNewArray(arr));
}

function returnNewArray (arr) {
    
    let newArray = [];
    
    for(let i = 0; i < arr.length; i++) {
        
        if(arr[i].unknownAge === true) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

solution(array);