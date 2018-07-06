function Human(name) {
    this.name = name;
    this.isPerson = false;
    this.isDeveloper = false;
}

Human.prototype.setPerson = function () {
    this.isPerson = true;
    this.drinkCoffee = function() {
        if(this.isPerson === true) {
            console.log(`Coffee`);
        }
    }}

Human.prototype.setDeveloper = function() {
    if(this.isPerson === true) {
        this.isDeveloper = true;
    }
    this.syaHelloWorld = function() {
        if(this.isDeveloper === true) {
            console.log(`Hello world`);
        }
    }    
}

const vasya = new Human('Vasya');

// TASK 2

function AuthorizedUser(name, password, cash) {
    this.name = name;
    const _password = password;
    let _userCash = cash;
    
    this.showUserCash = function(predictPassword) {
        if(this._passwordValid(predictPassword, _password)) {
            console.log(_userCash);
        } else {
            console.log(`EROR 123`);
        }
    }
    
    this.addCash = function(quantity, predictPassword) {
        if(this._passwordValid(predictPassword, _password)) {
            _userCash += quantity;
            console.log(`current cash: ${_userCash}`);        
        } else {
            console.log(`EROR 123`);
        }
    }
    
}

AuthorizedUser._prototype.passwordValid = function(predictPassword, currentPassword) {
    if(predictPassword === currentPassword) {
        return true
    } else return false;
}


const user = new AuthorizedUser('user1', '12345678', 0001);