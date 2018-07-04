// Отобразите достаточно ли у developers навыков ?
// Отобразите всех разработчиков и вызовете у каждого
// разработчика метод goodDev --

/*
 * Количество требований к разработчику совпадает с его навыками.
 * Используйте в задаче this
 * */

let developer1 = {
  skills: ['JavaScript', 'linux', 'html', 'OOP', 'Node.js'],
  requirements: ['Node.js', 'JavaScript', 'OOP'],
  goodDev: goodDev
};
let developer2 = {
  experience: [
    { technology: 'java' },
    { technology: 'c++' },
    { technology: 'aws' },
    { technology: 'docker' }
  ],
  requirements: ['java', 'json', 'c++', 'JavaScript'],
  goodDev: goodDev
};

function sortArray(a, b) {
    if(a > b) return 1;
    if(a < b) return -1;
}

function goodDev(dev) {
    
    if(this.skills && this.requirements) {
        const skillsArray = this.skills.sort(sortArray);
        const requirementsArray = this.requirements.sort(sortArray);
        
        skillsArray.forEach((elem, index) => {
            const requireElem = requirementsArray[index];
            if(elem === requireElem) {
                const successNotification = `${elem} ... success`;
                return console.log(successNotification);
            }
        });
        console.log(`---------------`);
    }
        
    if(this.experience && this.requirements) {
        const experienceArrayWithObjects = this.experience;
        const writeDownExperienceToArray = experienceArrayWithObjects.map((elem, index, arr) => {
            const getAObjectfromExperience = elem;
            const accessToProperty = Object.values(getAObjectfromExperience);
            const transformValueToString = accessToProperty.join('');
            return transformValueToString;
        });
        
        const requirements = this.requirements;
        const concatArrays = writeDownExperienceToArray.concat(requirements);
        const checkOnCommonSkills = concatArrays.sort(sortArray);
        
        checkOnCommonSkills.forEach((elem, index, arr) => {
            const nextElem = arr[index + 1];
            const lastElem = arr[index - 1];
            
            if(elem === nextElem) {
                const successNotification = `${elem} ... success`;
                return console.log(successNotification);
            }
        });
        console.log(`---------------`);
    }
}

developer1.goodDev();

// developer 1
// required: Node.js ... success
// required: JavaScript ... success
// required: OOP ... success
// ---

developer2.goodDev();

// developer 2
// required: json ... fail
// required: JavaScript ... success
// required: Java ... success
// required: OOP ... success

/*
 *
 * TASK 2
 *
 *
 * Напишите функцию принимает 1 аргумент сортирует объект по
 * переданному значению (например age или name)
 *
 * При вызове функции используйте this
 *
 * */

let myObject = {
  database: [
    { age: 100, name: 'b' },
    { age: 15, name: 'c' },
    { age: 25, name: 'a' }
  ]
};

myObject.myFilter = function(param) {
    
    function compare(a, b) {
    if(a[param] > b[param])  return 1;
    if(a[param] < b[param])  return -1;
}

    if(param === `age`) {
        const sortDatabase = this.database.sort(compare);
        return sortDatabase;
    }
    if(param === `name`) {
        const sortDatabase2 = this.database.sort(compare);
        return sortDatabase2;
    }
    
};

// {age:15, name:'c'}, {age:25, name:'a'} {age:100, name:'b'}
myObject.myFilter('age');

// {age:25, name:a}, {age:100, name: b} ...
myObject.myFilter('name');


/*
 * TASK 3
 *
 * Перепишите homework 5 с использованием методов массивов и
 * => arrow functions
 *
*/

let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];
let arr2 = [
  'a',
  0,
  0,
  'b',
  null,
  'c',
  'd',
  0,
  1,
  false,
  0,
  1,
  0,
  3,
  [],
  0,
  1,
  9,
  0,
  0,
  {},
  0,
  0,
  9
];

const moveZeroToEnd = (arr) => {
    
    let oldArrayWithoutZero = [];
    let newArray = [];
    
    arr.forEach(elem => {
        const elemOfArr = elem;
        
        if(elemOfArr !== 0) {
            oldArrayWithoutZero.push(elemOfArr);
        }
        
        if(elemOfArr === 0) {
            newArray.push(elemOfArr);
        }
    });

    return console.log(oldArrayWithoutZero.concat(newArray));
}

const compareNumeric = (a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
}

const minimalNumber = (arr) => {
    arr.sort(compareNumeric);
    return arr[0] + arr[1];
}

const nameShuffler = (str) => {
    
    let transformStrToArray = str.split(' ');
    let reverseTheArray = transformStrToArray.reverse();
    let transformStrToString = reverseTheArray.join(' ');
    
    return transformStrToString;
}

const capMe = (arr) => {
    
    return arr.map(elem => {
        let elemOfArray = elem;
        let valueOfElemToLowerCase = elemOfArray.toLowerCase();
        let divideOnArray = valueOfElemToLowerCase.split('');
        let firstLetterToUpperCase = divideOnArray[0].toUpperCase();
        divideOnArray.shift();
        divideOnArray.unshift(firstLetterToUpperCase);
        let joinUp = divideOnArray.join('');
        return joinUp;
    });
}


////// @ TODO -- LVL Strong Junior

/*
 *
 * TASK 1
 * Напишите функцию которая принимает 3 аргумента:*
 *
 *  - объект к которому привязывается метод
 *  - Имя свойства с которым связывается метод
 *  - Объявление привязываемого метода( функция )
 *
 *  Если количество аргументов у функции fn совпадает с переданными
 *  параметрами тогда сохраняет метод в замыкании
 *  и привязывает функцию к методу объекта
 *
 *  при вызове одного и того же метода с разным количеством аргументов,
 *  должно давать различный результат
 *
 * */

let junior = {};

// fn.length == arguments.length

function addMethod(object, name, fn) {
    
    if(fn.length === 0) {
        object.zeroArguments = fn;
    }
    if(fn.length === 1) {
        object.oneArguments = fn;
    }
    if(fn.length === 2) {
        object.twoArguments = fn;
    }
    if(fn.length === 3) {
        object.threeArguments = fn;
    }
    
    object[name] = ramification;
}

function ramification(...args) {
    if(args.length === 0) {
        return this.zeroArguments()
    }
    if(args.length === 1) {
        return this.oneArguments()
    }
    if(args.length === 2) {
        return this.twoArguments()
    }
    if(args.length === 3) {
        return this.threeArguments()
    }
}

addMethod(junior, 'ok', function() {
  console.log('zero arguments');
});
addMethod(junior, 'ok', function(one) {
  console.log('one arguments');
});
addMethod(junior, 'ok', function(one, two) {
  console.log('two arguments');
});
addMethod(junior, 'ok', function(one, two, three) {
  console.log('three arguments');
});

junior.ok(1, 2, 3); // 'three arguments'
junior.ok(1, 2); // 'two arguments'
junior.ok(1); //'one arguments'
junior.ok(); //'zero arguments'