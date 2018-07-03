const database = new Database('MY DATABASE');

function Database(databaseName) {
    this.databaseName = databaseName;
}

console.log(database);

// TASK 1

function CreateNewObject(myArray, cars, name) {
    this.myArray = myArray;
    this.cars = cars;
    this.name = name;
}
const arr1 = [1, 2, 3, 4];
const cars = {
    name: 'BMW',
}
const name = `SOME NAME`;

const test = new CreateNewObject(arr1, cars, name);

console.log(test);

// TASK 2

function CreateDifferentValue(...args) {
    if(args.length === 0) {
       return console.log(`don't have ane arguments`);
    }
    if(args.length > 3) {
        return console.log(`so much arguments`);
    }
    for(let i = 0; i < args.length; i++) {
        this[i] = args[i];
    }
}

const test2 = new CreateDifferentValue(1, 2, 3);
const test3 = new CreateDifferentValue();
const test4 = new CreateDifferentValue(1, 2, 3, 4, 5);

console.log(test2);
console.log(test3);
console.log(test4);

// TASK 3

function Counter() {
    let counter = 0;
    this.counter = function() {
        function add() {
            return counter += 1;
        }
        return add();
    }
}

const testing = new Counter();
console.log(testing.counter());
console.log(testing.counter());
console.log(testing.counter());
console.log(testing.counter());

// TASK 4 

Database.prototype.registerUser = function(name, password) {
    this.user = {name, password};
}

const mySQL = new Database('mySQL');
mySQL.registerUser('name', '123456');
console.log(mySQL);

// TASK 5

function Transport(color, name, doors) {
    this.color = color;
    this.name = name;
    this.doors = doors;
    this.wheels = 4;
}

Transport.prototype.beepBeep = function() {
    console.log(`beep-beep`);
}

const juguli = new Transport('green', 'juguli', 4);

console.log(juguli);

// TASK 6

function Bus() {}

Bus.prototype = Object.create(Transport.prototype);