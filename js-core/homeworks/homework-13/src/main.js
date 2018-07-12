/*
 * TASK - 2
 *
 * Перепишите Homework 12 - TASK 1 используя class
 *
 * */
class Human{
    constructor(object) {
        this.name = object.name;
        this.age = object.age;
        this.gender = object.gender;
        this.height = object.height;
        this.weigth = object.weigth;
    }
}

class Worker extends Human{ 
    constructor(object) {
        super(object);
        this.company = object.company;
        this.salary = object.salary;
    }
    
    toWork() {
        return 'work';
    }
}

class Student extends Human{ 
    constructor(object) {
        super(object);
        this.university = object.university;
        this.grants = object.grants;
    }
    
    toWatchSeries() {
        return`watch tv series`;
    }
}

let vasya = new Worker({name: 'Vasya', age: '30', gender: 'Male', height: '1.8 m', weigth: '80 kg', company: 'qwerty', salary: '007'});
console.log(vasya);
console.log(vasya.toWork());

let sasha = new Student({name: 'Sasha', age: '18', gender: 'Male', height: '1.8 m', weigth: '70 kg', university: 'ytrewq', grants: '700'});
console.log(sasha);
console.log(sasha.toWatchSeries());

/*
 * Вы должны создать имитацию медленной базы данных.
 * TASK - 1 Сделайте Класс Database с методами
 *
 *  query
 *
 *  При запуске метода query запустите внутренний таймаут, который будет длиться 5 секунд.
 *  При поступлении еще 1 запроса(если вызвать метод еще раз),
 *  таймаут должен стартануть сначала
 *  и ответ должен прийти снова через 5 секунд
 *
 * */

class DataBase {
    constructor() {}
    
    counter(){
        let number = 5;
        this.id = setInterval(() => {
            console.log(number); 
            
            if(number <= 1) {
                clearInterval(this.id);
                console.log('The web server is down');
            }
            
            number--;
        }, 1000);
    }
    
    query() {
        clearInterval(this.id);
        this.counter();
    }
}

const dataBase = new DataBase();
dataBase.query();
// // 5
// // 4
// // 3
// // 2
// // 1
// // console.log('The web server is down') https://www.youtube.com/watch?v=W8_Kfjo3VjU

// dataBase.query();
// // 5
// // 4
// dataBase.query();
// // 5
// // 4
// // 3
// // 2
// dataBase.query();
// 5
// 4
// 3
// 2
// 1
// console.log('The web server is down')
