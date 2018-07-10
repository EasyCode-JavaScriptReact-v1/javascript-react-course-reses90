function User(name) {
    this.name = name;
    
    let cash = '111';
    this.getSecretCash = () => cash;
    this._some = () => 12;
}
// Статическая инкапсуляция
User.static = () => 'static';

const test = User.static();
// --- Конец ---

//TASK 1 

Array.prototype.sum = function() {
    return this.reduce((newElem, elem) => {
        newElem += elem;
        return newElem;
    }, 0)
}

const arr = [1, 2, 3];

console.log(arr.sum());
console.log([3, 4, 5].sum());

// Class
/*
class Country{
    constructor({name}) {
        this.countryName = name;
    }
    showQwerty() {
        console.log('qwerty');
    }
}

const ukraine = new Country({name: 'ukraine'});
console.log(ukraine);
ukraine.showQwerty();
//-------------------
class City extends Country{
    constructor({city}) {
        super();
        this.cityName = city;
    }
    showCity() {
        console.log(this.cityName);
    }
}

const kharkiv = new City({city:'kharkiv'});
console.log(kharkiv);
kharkiv.showCity();
kharkiv.showQwerty();
*/
//TASK 2

class Animal{
    constructor(){
        this.feet = 4;
    }
    
    roar() {
        console.log(`Animal with ${this.feet} feet is roaring`);
    }
}

const cat = new Animal();
cat.roar();

class NeighborCat extends Animal{
    constructor(name){
        super();
        this.animalName = name;
    }
    
    jump() {
        console.log(`
                    _
                _
            _
        _
        `);
    }
    
}

const catMusya = new NeighborCat('Musya');
console.log(catMusya)
catMusya.jump();
catMusya.roar();

//setTimeout(() => {
//    console.log('Nikita')
//}, 1000);
//
//setTimeout(() => {
//    console.log('Nikita')
//}, 3000);

//setTimeout(() => {
//    console.log('First')
//}, 3000);
//
//setTimeout(() => {
//    console.log('Second')
//}, 2000);
//
//setTimeout(() => {
//    console.log('Last')
//}, 1000);

//let s = setInterval(() => {
//    console.log('Nikita');
//}, 3000);

//let zero = 0;
//let x = setInterval(() => {
//    console.log(zero += 1);
//}, 1000);

