//function User() {
//    return {};
//}

function PhoneApp() {
    this.storage = [];
}

PhoneApp.prototype.isNumber = function(stringToCheck) {
    const toStringTheArgument = stringToCheck.toString();
    const toArrayTheString = toStringTheArgument.split('');
    let flag;
    
    toArrayTheString.some(elem => {
        const toNumberElem = Number(elem);
        if(isNaN(toNumberElem)) {
            flag = false;
        }
    });
    
    return flag !== false;
}

PhoneApp.prototype.formatedPhoneNumber = function(numberToSort) {
    const toStringTheNumber = numberToSort.toString();
    const toArrayTheString = toStringTheNumber.split('');
    let rewritedArray = [];
    
    toArrayTheString.some(elem => {
        if(elem !== '-') {
            rewritedArray.push(elem)
        }
    });
    
    const joinRewritedArray = rewritedArray.join('')
    
    if(this.isNumber(joinRewritedArray)) {
        const firstThreeNumbers = joinRewritedArray.slice(0, 3);
        const bracketThisFirstThreeNumbers = `(${firstThreeNumbers}) `;
        
        const secondTwoNumbers = joinRewritedArray.slice(3, 5);
        const bracketThisSecondTwoNumbers = `${secondTwoNumbers}-`;
        
        const thirdTwoNumbers = joinRewritedArray.slice(5, 7);
        const bracketThisThirdTwoNumbers = `${thirdTwoNumbers}-`;
        
        let lastNumbers = joinRewritedArray.slice(7, joinRewritedArray.length);
        
        const formatedPhoneNumber = bracketThisFirstThreeNumbers + 
              bracketThisSecondTwoNumbers + 
              bracketThisThirdTwoNumbers + 
              lastNumbers;
        
        return formatedPhoneNumber;
    } else {
        return console.log('EROR you had typed incorect number')
    }
}    

//PhoneApp.prototype.add = function(name, number, surname = null, city = null, company = null) {
//    const idNumber = this.storage.length + 1;
//    const contact = new User();
//    contact.id = idNumber;
//    contact.name = name;
//    contact.surname = surname;
//    contact.number = this.formatedPhoneNumber(number);
//    contact.city = city;
//    contact.company = company;
//    this.storage.push(contact);
//}
PhoneApp.prototype.add = function(object) {
    const idNumber = this.storage.length + 1;
    const contact = object;
    contact.id = idNumber;
    contact.number = this.formatedPhoneNumber(contact.number)
    this.storage.push(contact);
}

PhoneApp.prototype.filterByValue = function(key, value) {
    return this.storage.filter(user => {
        return user[key] === value;
    });
}

PhoneApp.prototype.sortUsersByValue = function(key) {
    const sortFunction = function(value, nextValue) {
        if(value[key] > nextValue[key]) return 1;
        if(value[key] < nextValue[key]) return -1;
    }
    
    let copyStorage = [...this.storage]
    return copyStorage.sort(sortFunction);
}

PhoneApp.prototype.removeByIndex = function(index) {
    let firstHalf = [];
    let lastHalf = [];
    
    this.storage.forEach((elem, i) => {
        if(i < index) {
            firstHalf.push(elem);
        }
        if(i < this.storage.length && i > index) {
            lastHalf.push(elem)
        }
    });
    
    this.storage = [...firstHalf, ...lastHalf];
}

PhoneApp.prototype.changeValueByIndex = function(index, key, value) {
    const elem = this.storage[index];
    elem[key] = value;
}

const test = new PhoneApp();

test.add({name: 'Nikita', number: '1234567890', surname: 'Balashov', city: 'Kharkiv', company: null});
test.add({name: 'Nikita', number: '0987655321', surname: 'Smith', city: null, comapny: null});
test.add({name: 'Paul', number: '0893127823', surname: 'Smith', city: 'Kharkiv', company: null});
test.add({name: 'Paul', number: '0897612374', surname: 'Balashov', city: null, comapny: null});

console.log(test.storage);
console.log(test.filterByValue('name', 'Nikita'));
console.log(test.filterByValue('name', 'Paul'));
console.log(test.filterByValue('city', 'Kharkiv'));
console.log(test.filterByValue('surname', 'Balashov'));