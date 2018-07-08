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
        
        const finalConstraction = bracketThisFirstThreeNumbers + 
              bracketThisSecondTwoNumbers + 
              bracketThisThirdTwoNumbers + 
              lastNumbers;
        
        return finalConstraction;
    } else {
        return console.log('EROR you had typed incorect number')
    }
}    

PhoneApp.prototype.add = function(name, number, surname = null, city = null, company = null) {
    const idNumber = this.storage.length + 1;
    const contact = {
        id: idNumber,
        name: name,
        surname: surname,
        number: this.formatedPhoneNumber(number),
        city: city,
        company: company
    }
    this.storage.push(contact);
}

PhoneApp.prototype.filterByValue = function(key, value) {
    return this.storage.filter((elem, index) => {
        return elem[key] === value;
    });
}

PhoneApp.prototype.sortByKey = function(key) {
    const sortFunction = function(a, b) {
        if(a[key] > b[key]) return 1;
        if(a[key] < b[key]) return -1;
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

test.add('Nikita', '1234567890', 'Balashov', 'Kharkiv');
test.add('Nikita', '0987655321', 'Smith');
test.add('Paul', '0893127823', 'Smith', 'Kharkiv');
test.add('Paul', '0897612374', 'Balashov');

console.log(test.storage);
console.log(test.filterByValue('name', 'Nikita'));
console.log(test.filterByValue('name', 'Paul'));
console.log(test.filterByValue('city', 'Kharkiv'));
console.log(test.filterByValue('surname', 'Balashov'));
test.isNumber('099-13-15-100')