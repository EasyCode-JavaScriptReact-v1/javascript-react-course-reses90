//console.log(sum(2, 2)); // will be work
//console.log(add(2, 2)); // won't be work
/*Function expresion - выражение*/
const add = function (a, b) {
  return a + b;  
};
/*Function declaration - выражение*/
function sum(a, b) {
    return a + b;
}

function newSum(a, b) {
    return a + b;
}

function addArray (someData) {
    if(Array.isArray(someData) && typeof someData[0] === 'number') {
        return `winner`;
    }
    if(typeof someData === 'string' || typeof someData === 'object') {
        if (Array.isArray(someData)) {
            return someData[0];
        } else {
            return someData;
        }
    }
}

console.log(addArray([1, 2]));
console.log(addArray([`w`, 2]));
console.log(addArray([{num: 1}, 2]));
console.log(addArray({num: 1}));


// ++ +=

let num = 10;
console.log(num++); //10
console.log(+num); //11
console.log(++num); //12

console.log(`Цыкл for`);
console.log(`Четные числа`)

for(let x = 1; x <= 12; x++) {
    if(x % 2 === 0) {
        console.log(x);
    }
}

console.log(`Нечетные числа`);

for(let x = 1; x <= 12; x++) {
    if(x % 2 === 1) {
        console.log(x);
    }
}

console.log(`While`);
let whileNumber = 1;

//while(whileNumber <= 12) {
//
//}
const forArray = [1, 2, 3, 4, 5];

for(let index = 0; index <= forArray.length; index++) {
    console.log(index + 1, `Номер :`, forArray[index]);
}

const webStore = {
    catagory: {
        noteBook: [`ASUS`, `Lenovo`, `Dell`, `HP`],
        mobile: [`Nokia`, `Apple`, `Sony`],
    }
}

const category = webStore.catagory;
//for(let key in category) {
//    console.log(key);
//}
//for(let key in category) {
//    console.log(category[key]);
//}

function catagoryFromWebStore (obj) {
    for(let key in category) {
        console.log(`Категория:`, key);
        for(let i = 0; i < category[key].length; i++) {
            console.log(`Содержимое категории:`, category[key][i]);
        }
    }
}

catagoryFromWebStore(category);