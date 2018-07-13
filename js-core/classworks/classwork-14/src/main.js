// Regural Expressions

let myReguralExpression = /java-script/;

console.log(myReguralExpression.test('java-script'));

const myNewRegExp = new RegExp('some');

console.log(myNewRegExp.test('some'));

// []
console.log('--------');

let checkRegExp = new RegExp('[A-C]');

console.log(checkRegExp.test('A'));
console.log(checkRegExp.test('B'));
console.log(checkRegExp.test('C'));
console.log(checkRegExp.test('a'));
console.log(checkRegExp.test('b'));
console.log(checkRegExp.test('D'));

// Task 1

function check(string) {
    const rightAnswer = new RegExp('JavaScript');
    return rightAnswer.test(string);
}

console.log(check('JavaScript'));
console.log(check('JavaScrpt'));

//----------

const superJs = 'JS is is is is awesome';

console.log(superJs.replace(/is/gi, 'are'));

/*
i - делает не чувствительным к регистру
g - заменяет все совпадения
*/

//Task 2

function holdOneIs(string) {
    const secretKey = '%_%_%';
    return string.replace(/is/i, secretKey).replace(/is /gmi, '').replace(secretKey, 'is');
}

console.log(holdOneIs(superJs));

// ^ логическое НЕ

//DOM 

const div = document.createElement('div');
div.textContent = 'content';

console.dir(div);

const div2 = document.createElement('div');

div.append(div2);

console.log(div);

document.body.appendChild(div);

//Task 3

const ul = document.createElement('ul');
const firstLi = document.createElement('li');
const secondLi = document.createElement('li');
const thirdLi = document.createElement('li');

firstLi.textContent = 'JavaScript';
secondLi.textContent = 'React';
thirdLi.textContent = 'Node.js';

ul.append(firstLi);
ul.append(secondLi);
ul.append(thirdLi);

document.body.appendChild(ul);
// -----------
const ul2 = document.createElement('ul');
// Визуализация данных
const content = ['qwerty', 'test', 'EPAM', 'awda'];

for(let i = 0; i < content.length; i++) {
    let li = document.createElement('li');
    li.textContent = content[i];
    ul2.append(li);
}

document.body.appendChild(ul2);