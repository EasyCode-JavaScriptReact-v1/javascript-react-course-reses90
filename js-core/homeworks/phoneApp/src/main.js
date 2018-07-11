class User{
    constructor(object){
        const generatorId = () => '_' + Math.random().toString(36).substr(2, 20);
        
        this.id = generatorId();
        this.name = object.name;
        this.surname = object.surname;
        this.number = this.createFormatedPhoneNumber(object.number);
        this.city = object.city;
        this.company = object.company;
    }
    
    isNumber(stringToCheck) {
        const toArrayTheString = stringToCheck.split('');
    
        return toArrayTheString.every(elem => !isNaN(Number(elem)));
    }
    
    createFormatedPhoneNumber(phoneNumber) {
        if(!this.isNumber(phoneNumber)) {
            return console.log('EROR you had typed incorect number')
        }
        
        const firstThreeNumbers = phoneNumber.slice(0, 3);
        const bracketThisFirstThreeNumbers = `(${firstThreeNumbers}) `;
        
        const secondTwoNumbers = phoneNumber.slice(3, 5);
        const bracketThisSecondTwoNumbers = `${secondTwoNumbers}-`;
        
        const thirdTwoNumbers = phoneNumber.slice(5, 7);
        const bracketThisThirdTwoNumbers = `${thirdTwoNumbers}-`;
        
        let lastNumbers = phoneNumber.slice(7, phoneNumber.length);
        
        const formatedPhoneNumber = bracketThisFirstThreeNumbers + 
            bracketThisSecondTwoNumbers + 
            bracketThisThirdTwoNumbers + 
            lastNumbers;
        
        return formatedPhoneNumber;
    } 
    
}

class PhoneApp{
    constructor() {
        this.storage = [];
    }
    
    add(object) {
        const contact = new User(object);
        this.storage.push(contact);
    }
    
    filterByValue(key, value) {
        return this.storage.filter(user => user[key] === value)
    }
    
    sortUsersByValue(key) {
        const sortFunction = function(value, nextValue) {
            if(value[key] > nextValue[key]) return 1;
            if(value[key] < nextValue[key]) return -1;
        }
    
        let copyStorage = [...this.storage]
        return copyStorage.sort(sortFunction);
    }
    
    searchUserById(id) {
        return this.storage.findIndex(user => user.id === id)
    }
    
    searchUserByName(name) {
        return this.storage.findIndex(user => user.name === name)
    }
    
    searchUserBySurname(surname) {
        return this.storage.findIndex(user => user.surname === surname)
    }
    
    removeById(id) {
        let firstHalf = [];
        let lastHalf = [];
        const userWithCorrectId = this.searchUserById(id);
        
        this.storage.forEach((user, i) => {
            
            if(i < userWithCorrectId) {
                firstHalf.push(user);
            }
            if(i < this.storage.length && i > userWithCorrectId) {
                lastHalf.push(user)
            }
        });
    
        this.storage = [...firstHalf, ...lastHalf];
    }
    
    removeByName(name) {
        let firstHalf = [];
        let lastHalf = [];
        const userWithCorrectName = this.searchUserByName(name);
        
        this.storage.forEach((user, i) => {
            
            if(i < userWithCorrectName) {
                firstHalf.push(user);
            }
            if(i < this.storage.length && i > userWithCorrectName) {
                lastHalf.push(user)
            }
        });
    
        this.storage = [...firstHalf, ...lastHalf];
    }
    
    removeBySurname(surname) {
        let firstHalf = [];
        let lastHalf = [];
        const userWithCorrectSurname = this.searchUserBySurname(surname);
        
        this.storage.forEach((user, i) => {
            
            if(i < userWithCorrectSurname) {
                firstHalf.push(user);
            }
            if(i < this.storage.length && i > userWithCorrectSurname) {
                lastHalf.push(user)
            }
        });
    
        this.storage = [...firstHalf, ...lastHalf];
    }
    
    editAnyUserValueByName(id, key, value) {
        const userWithCorrectName = this.searchUserById(id);
        const elem = this.storage[userWithCorrectName];
        elem[key] = value;
    }
    
    editAnyUserValueByName(name, key, value) {
        const userWithCorrectName = this.searchUserByName(name);
        const elem = this.storage[userWithCorrectName];
        elem[key] = value;
    }
    
    editAnyUserValueBySurname(surname, key, value) {
        const userWithCorrectName = this.searchUserBySurname(surname);
        const elem = this.storage[userWithCorrectName];
        elem[key] = value;
    }
}

const test = new PhoneApp();

test.add({name: 'Nikita', number: '1234567890', surname: 'Balashov', city: 'Kharkiv', company: null});
test.add({name: 'Nikita', number: '0987655321', surname: 'Smith', city: null, company: null});
test.add({name: 'Paul', number: '0893127823', surname: 'Smith', city: 'Kharkiv', company: null});
test.add({name: 'Paul', number: '0897612374', surname: 'Balashov', city: null, company: null});

console.log(test.storage);
console.log(test.filterByValue('name', 'Nikita'));
console.log(test.filterByValue('name', 'Paul'));
console.log(test.filterByValue('city', 'Kharkiv'));
console.log(test.filterByValue('surname', 'Balashov'));