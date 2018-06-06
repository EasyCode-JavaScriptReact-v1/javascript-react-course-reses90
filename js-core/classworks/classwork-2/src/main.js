const oldString = "string";
const commonString = 'string';
const es6String = `string`;

const yearsOld = 1998;
const name = "Nikita";

console.log(name, 'born in', yearsOld);
console.log(`${name} born in ${yearsOld}`);

console.log(`Class 
Work`);

const myNameUpperCase = name.toUpperCase();

console.log(myNameUpperCase);
console.log('string'.toUpperCase());
console.log('STRING'.toLowerCase());

console.log(name[0].toUpperCase());

//Name example

const nameExample = 'nikita';
console.log(nameExample[0].toUpperCase() + nameExample[1] + nameExample[2] + nameExample[3] + nameExample[4] + nameExample[5]);

console.log(nameExample[0].toUpperCase() + nameExample.slice(1));

//Slice example

const youtube = 'Yoube';

console.log(youtube.slice(0, 3) + 'tu' + youtube.slice(3, 5));
console.log(`${youtube.slice(0, 3)}tu${youtube.slice(3, 5)}`);

//split example

const myNameArray = 'Nikita Balashov'.split(' ');

console.log(myNameArray);

const date = `01-12-1995`.split('-');
console.log(date);

const somePractical = `array redict reverse`.split('r');
console.log(somePractical);


//replace example

console.log('Yahoo'.replace('a', '@'));
console.log(`Yahoo`.replace(`o`, `@`).replace(`o`, `@`));

//indexOf

console.log(`The Avengers`.indexOf(`e`, 4));

//length

console.log('easy'.length);

//includes

console.log('Boolean'.includes('Boo'));
console.log('Boolean'.includes('t'));

//trim

console.log(`The End`.trim());

//repeat

console.log(`0_0 `.repeat(7));

//math

console.log('' + 10);
console.log(' ' + 10);

console.log([] + []);
console.log([] + {});

console.log(10 == 10);
console.log(`10` == 10);
console.log(`10` === 10);

console.log(`Empty String`, `` == true);
console.log(`One space`, ` ` == true);

console.log(10 % 2);
console.log(15 % 10);


const year2018 = 2018;
console.log(year2018 % 2000);

console.log(!!false == false);
console.log(!false == true);

//Math

console.log(Math.pow(2, 5));
console.log(2 ** 5);

//typeof

console.log(typeof 'typeof');
console.log(typeof 120);

const typeofArray = [1, `2`, 3];
console.log(typeof typeofArray);
console.log(Array.isArray(typeofArray));

console.log(typeof {});

function typeofFunction () {};
console.log(typeof typeofFunction);

console.log(typeof NaN);

//task-1

const student = {
    skills: [`JS`, `React`],
    salary: `2000$`,
};

student.salary = `3000$`;
student.age =`20`;

student[`offers`] = 5;

console.log(student);













