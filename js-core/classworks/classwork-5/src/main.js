let user = {
  name: 'Oleg',
  birthday: 'once',
  friends: [
    { name: 'Даша', birthday: '25.11.1991' },
    { name: 'Саша', birthday: undefined },
    { name: 'Егор', birthday: '25.10.1992' },
    { name: 'Дима', birthday: '25.10.1985' }
  ],
};

function task0 (obj) {
    console.log(user.name);
    let userFriends = obj.friends;

    for(let i = 0; i < userFriends.length; i++) {
        
        if(userFriends[i].birthday !== undefined) {
            console.log(userFriends[i].name, userFriends[i].birthday);
        }
        
    }
}

task0(user);

/*
Напишите функцию, которая принимает 2 аргумента
1 аргумент МАССИВ ИЛИ ОБЪЕКТ
2 аргумент число

Если у нас объект, тогда, найти в этом объекте массив
И найти число, которое больше переданного второго параметра

Если массив, тогда найти в этом массиве, 
число больше второго аргумента
отобразить данное число и завершить циклы
*/

const obj = {
  name: 'qwerty',
  qwerty: [1, 2, 3, 4, 5],
  qwerty2: [100, 200, 300, 400, 500]
};

const arr = [1, 2, 500, 310, 20, 75];

const task1 = function(data, number) {
    
    if(Array.isArray(data)) {
        for(let i = 0; i < data.length; i++) {
            let elem = data[i];
            if(number < elem) {
                console.log(elem);
                break;
            }
        }
    }
    else {
        for(let key in data) {
            let dataElem = data[key];
            if(Array.isArray(dataElem)) {
              for(let i = 0; i < dataElem.length; i++) {
                let elem2 = dataElem[i];
                if(number < elem2) {
                console.log(elem2);
                break;
                } 
            }
        }
    }
}
}

task1(obj, 200);
task1(arr, 55);




const myString = 'JavaScript is Awesome';
const myStringInArray = myString.split(' ');
myStringInArray.reverse();
const myStringJoin = myStringInArray.join(' ');
console.log();