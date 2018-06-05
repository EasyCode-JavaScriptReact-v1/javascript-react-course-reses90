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
    let checkNumber = 1;
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

task4();














