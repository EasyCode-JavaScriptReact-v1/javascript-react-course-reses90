function PhoneApp() {
    this.storage = [];
}

PhoneApp.prototype.checkNumber = function(numberToCheck) {
    const toStringThePredictNumber = numberToCheck.toString();
    const toArrayTheString = toStringThePredictNumber.split('');
    let flag;
    
    toArrayTheString.forEach(elem => {
        const toNumberElem = Number(elem);
        if(isNaN(toNumberElem)) {
            flag = false;
        }
    });
    
    if(flag === false) {
        return flag;
    } else {
        return true;
    }
}

PhoneApp.prototype.sortNumber = function(numberToSort) {
    if(this.checkNumber(numberToSort)) {
        const toStringTheNumber = numberToSort.toString();
        const firstThreeNumbers = toStringTheNumber.slice(0, 3);
        const bracketThisFirstThreeNumbers = `(${firstThreeNumbers}) `;
        
        const secondTwoNumbers = toStringTheNumber.slice(3, 5);
        const bracketThisSecondTwoNumbers = `${secondTwoNumbers}-`;
        
        const thirdTwoNumbers = toStringTheNumber.slice(5, 7);
        const bracketThisThirdTwoNumbers = `${thirdTwoNumbers}-`;
        
        let lastNumbers = '';
        for(let i = 7; i < toStringTheNumber.length; i++) {
            const elem = toStringTheNumber[i];
            lastNumbers += elem;
        }
        
        const finalConstraction = bracketThisFirstThreeNumbers + bracketThisSecondTwoNumbers + bracketThisThirdTwoNumbers + lastNumbers;
        
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
        number: this.sortNumber(number),
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
    
    for(let i = 0; i < index; i++) {
        const elem = this.storage[i];
        firstHalf.push(elem);
    }
    for(let i = index + 1; i < this.storage.length; i++) {
        const elem = this.storage[i];
        lastHalf.push(elem);
    }
    
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
