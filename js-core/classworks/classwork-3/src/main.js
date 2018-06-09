//alert(`hello world`);
//prompt(`What is your name: `, `Your Name`);
//confirm(`Do you like it: `);

// TASK 1

//let firstValue = Number(prompt('Enter first number'));
//let secondValue = Number(prompt('Enter second number'));
//let sum = firstValue + secondValue;
//alert(sum);

//if(10 === 10) {
//  console.log('10');  
//} else if (null != undefined) {
//    console.log('null != undefined');
//} else {
//    console.log(`nothing`);
//}

// TASK 2

//let query = Number(prompt(`Enter a number: `));
//if (query > 150) {
//    console.log(`Тайланд`);
//} else if (query <= 100) {
//    if(query < 0) {
//        console.log(`Enter positive number`);
//    }
//    else {
//        console.log(`Бали`);
//    }
//} else {
//    console.log(`Италия`);
//}

// TASK 3

//if (1 > 3) {
//    if (1 > 3) {
//        console.log(`1`);
//    } else if (1 > 3) {
//        console.log(`2`);
//    } else {
//        console.log(`3`);
//    }
//} else if (1 > 3) {
//    if (1 > 3) {
//        console.log(`4`);
//    } else if (1 > 3) {
//        console.log(`5`);
//    } else {
//        console.log(`6`);
//    }
//} else {
//    if (1 === 2) {
//        console.log(`7`);
//    } else if (1 === 2) {
//        console.log(`8`);
//    } else {
//        console.log(`The end`);
//    }
//}

// TASK 4

function task4 () {
<<<<<<< HEAD
=======
    let checkNumber = 1;
>>>>>>> c9f3e904615e91f3b55aac4bb6b8a62b948b7de3
    let firstValue = Number(prompt('Enter first number'));

    if (isNaN(firstValue)) {
        return alert(`First prompt is NaN`), task4();
    }

    let secondValue = Number(prompt('Enter second number'));

    if (isNaN(secondValue)) {
        return alert(`Second prompt is NaN`), task4();
    }

    let sum = firstValue + secondValue;

    alert(sum);
}

<<<<<<< HEAD
//task4();

// TASK 5

function helloToUser(userName) {
    console.log(`Hello user`, userName)
}

helloToUser(`Nick`);

function showNumber (number) {
    console.log(number);
}

showNumber(100);

function multiplicate (number) {
    console.log(number * 2);
}

multiplicate(40);

function greeting (name) {
    return console.log(`greeting ${name}`);
}

const greetConst = greeting(`Nikita`);

// TASK 6

function task6 () {
    
    function firstIteration () {
        let firstValue = Number(prompt('Enter first number'));
        if (isNaN(firstValue)) {
            return alert(`First prompt is NaN`), task6();
        } else {
            return firstValue;
        }
    }
    
    function secondIteretion () {
        let secondValue = Number(prompt('Enter second number'));
        if (isNaN(secondValue)) {
            return alert(`Second prompt is NaN`), secondIteretion();
        } else {
            return secondValue;
        }
    }
    
    alert(firstIteration() + secondIteretion());
}

//task6();

function tas6V2 () {
    let array = [];
    function check (num) {
        if (isNaN(num)) {
            return alert(`Input number is NaN`), num;
        } else {
            return array.push(num);
        }
    }
    function firstItertion () {
        let firstValue = Number(prompt('Enter first number'));
        //return firstValue;
    }
    check(firstItertion());
    function secondIteration () {
        let secondValue = Number(prompt('Enter second number'));
        //return secondValue;
    }
    check(secondIteration());
    alert(array[0] + array[1]);
    
}
tas6V2();


// TASK 7

function task7 (a, b, c) {
    console.log(a + b + c);
}

task7(5, 5, 5);

// TASK 8 
 function task8 ({name}) {
     console.log(`Hello`, name);
 }
task8({name: `Nikita`});
=======
task4();














>>>>>>> c9f3e904615e91f3b55aac4bb6b8a62b948b7de3
