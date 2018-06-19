function counter () {
    let myCounter = 0;
    const myFunction = function() {
        return myCounter++;
    }
    return myFunction;
}

const newCounter = counter();

console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());


// TASK 1

function helloWorldClosure(str) {
    let emptyString = '';
    return function (str) {
        return emptyString += str + ' ';
    }
}

const helloWorld = helloWorldClosure();

console.log(helloWorld('hello'));
console.log(helloWorld('world'));
console.log(helloWorld('privet na 100 let'));

// TASK 2

function plusSomething(number) {
    return function(closureNumber) {
        return number += closureNumber;
    }
}

const numberTwenty = plusSomething(10);
console.log(numberTwenty(20));
console.log(numberTwenty(20));
console.log(numberTwenty(20));

// TASK 3 


/*
* напишите функцию которая будет возвращать объект
* 
* и у этого объекта будет свойство которое будет равняться 
* функции
* add() {}
* при вызове этого свойства отобразите в консоле 1

const myCounter = createCounter();
myCounter.add() // 1
myCounter.add() // 2
myCounter.add() // 3
*/

function returnObject(number) {
    let counter = number;
    let saveState = 0;
    let obj = {
        add: function() {
            saveState = counter;
            return ++counter;
        },
        addTen: function() {
            saveState = counter;
            return counter += 10;
        }, 
        lastState: function() {
            return `PREV State ${saveState}`;
        }
    }
    return obj;
}

const myCounter = returnObject(10);

console.log(myCounter.add());
console.log(myCounter.add());
console.log(myCounter.add());
console.log(myCounter.add());
console.log(myCounter.lastState());
console.log(myCounter.add());
console.log(myCounter.add());
console.log(myCounter.addTen());
console.log(myCounter.lastState());
