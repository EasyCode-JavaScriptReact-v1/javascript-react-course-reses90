/*
 *
 * Задача 0
 *
 * Что вернет выражение z(x) ?
 * Напишите ответ своими словами как вы понимаете
 * В консоле не смотрите, сначала напишите, после проверьте себя
 *
 * */

let y = 5;
let x = () => y;

let z = t => {
  let y = 5;
  t();
};
console.log(y);

z(x); // что вернет
/* 5 */

/*
 *
 * TASK 1
 * Создайте функцию которая будет превращать
 * передаваемую строку в html тэг
 *
 *
 * */

let $ = tagName => {
    return `<${tagName}></${tagName}>`
};

let createBODY = $('body');
let createDIV = $('div');
console.log(createBODY); // <body></body>
console.log(createDIV); // <div></div>

/*
 *
 * TASK 2
 *
 * Создайте объект к которому можно будет применить любое число вызовов
  // obj.method().method().method()
  ---------------
 *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
 *  Передаваемые аргументы должны быть только в виде строки
 * *//*
{
let ezjQuery = {
    collector: '',
    add(tagName) {
        const tag = `<${tagName}></${tagName}>`;
        this.collector += tag;
        console.log(this.collector);
        return this;
    }
};


ezjQuery
  .add('body') // <body></body>
  .add('div') // <body></body><div></div>
  .add('h1'); // <body></body><div></div><h1></h1>
} */
/*
 *
 * TASK 3
 * Доработйте метод add чтобы на каждом вызове следующий
 * тэг помещался внутри предыдущего !
 ---
 * И добавьте объекту ezjQuery метод render, который будет возвращать
 * сгенерированную строку
 -----
 * Методу add - второй параметр, который будет размещать
 * информацию внутри тэга
 *
 */

let ezjQuery = {
    collector: [],
    arrayWithOpenTags: [],
    arrayWithClosenTags: [],
    arrayWithStuctureWithValue: [],
    add(tagName, value) {
        if([...arguments].length === 1) {
            const openTag = `<${tagName}>`;
            const closenTag = `</${tagName}>`;
            this.arrayWithOpenTags.push(openTag);
            this.arrayWithClosenTags.unshift(closenTag);
        }
        if([...arguments].length === 2) {
            const stuctureWithValue = `<${tagName}>${value}</${tagName}>`;
            this.arrayWithStuctureWithValue.push(stuctureWithValue);
        }
        
        return this;
    },
    render() {
        const copyCollector = this.collector;
        const firstIterationOfConcat = copyCollector.concat(this.arrayWithOpenTags);
        const secondIterationOfConcat = firstIterationOfConcat.concat(this.arrayWithStuctureWithValue);
        const thirdIterationOfConcat = secondIterationOfConcat.concat(this.arrayWithClosenTags);
        
        this.arrayWithOpenTags = [];
        this.arrayWithClosenTags = [];
        this.arrayWithStuctureWithValue = [];
        
        return thirdIterationOfConcat.join('');
    }
};

// example
var helloList = ezjQuery
  .add('body') // <body></body>
  .add('div') // <body><div></div></body>
  .add('ul') // <body><div><ul></ul></div></body>
  .add('li', 'Hello') //<body><div><ul><li>Hello</li></ul></div></body>
  .render();
console.log(helloList); // <body><div><ul><li>Hello</li></ul></div></body>
//  Обратите внимание, что после вызова render создание строки началось сначала
document.write(helloList);

var bodyDiv = ezjQuery
  .add('body') //<body></body>
  .add('div') //<body><div></div></body>
  .render();
console.log(bodyDiv); //<body><div></div></body>

// Для выполнивших все задания
// сделайте document.write(helloList) увидите результат :)

// @SUPER
/*
 * Переименуйте объект ezjQuery в $.
 * Создание перевого метода должено быть без метода
 *
 * $('body').add('li', 'hi').render() // <body><li>hi</li></body>
 *
 * */
