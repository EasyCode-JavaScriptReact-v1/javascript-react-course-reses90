/*
TASK 0. Найдите числа которые повторяются нечетное количество раз
в массиве
  solution([12, 23, 34, 12, 12, 23, 12, 45]) -> [34 45]
  solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,]) -> [4 100 5000]
  solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]) -> [6 5 9 21]
  solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]) -> [8 16 23 42]
  solution([2, 2, 44, 44]) => []
*/

let solution = (arr) => {
    let counter = {};
    arr.forEach(num => {
        counter[num] ? counter[num]++ : counter[num] = 1;
    });
    const counterKeys = Object.keys(counter);
    const counterValues = Object.values(counter);
    
    let output = new Set();
    
    counterValues.forEach((num, index) => {
        if(num === 1) {
            output.add(counterKeys[index])
        }
        if(num % 2 !== 0) {
            output.add(counterKeys[index]);
        }
    });
    
    return output;
};

console.log(solution([12, 23, 34, 12, 12, 23, 12, 45]));
console.log(solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,]));
console.log(solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]));
console.log(solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]));
console.log(solution([2, 2, 44, 44]));

//-----------------------------------------------------------

let someWebpackModule = `module.exports = {
    context: %%HOMEDIR%,
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;

/* TASK - 1
Распарсите строку и замените
 %%HOMEDIR%% -> './JavaScript-Basic'
 %%APP_DIR%% -> 'fixtures/src'
 %%APPNAME%% -> 'app.js'
 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам
 Сделайте несколько вызовов данной функции
 *
 * */

const parseStr = (find, change) => {
    return someWebpackModule = someWebpackModule.replace(find, change);
}

parseStr(/%%HOMEDIR%./gmi, '"./JavaScript-Basic"');
parseStr(/%%APP_DIR%%/gmi, 'fixtures/src');
parseStr(/%%APPNAME%%/gmi, 'app.js');
parseStr(/'/gmi, '"');
parseStr(/""/gmi, '"');

console.log(someWebpackModule);

/*
 TASK - 2
 Сделайте разметку как скриншоте используя HTML
 вам необходимо использовать тэги(!)
*/

const task2 = true;


/*
TASK 3
 JavaScript =>
  Создать объект с методами, которые будут динамически генерировать DOM
  Это будет тест, который мы будем разрабатывать в следующих заданиях.
  Сейчас вам нужно только динамически создать html,
  методы должны храниться в одном объекте.
  Изначально на странице должен быть только <body>,
  вызывая методы объекта нужно создать dom-элементы
*/

const questions = [
    {
        questionName: 'question 1',
        answers: [
            'answer 1',
            'answer 2',
            'answer 3'
        ],
        rigthAnswer: [0]
    },
    {
        questionName: 'question 2',
        answers: [
            'answer 1',
            'answer 2',
            'answer 3'
        ],
        rigthAnswer: [0]
    },
    {
        questionName: 'question 3',
        answers: [
            'answer 1',
            'answer 2',
            'answer 3'
        ],
        rigthAnswer: [0]
    },
];

const app = {
    testHeaderName: 'Test of Programming',
    
    newElem(tagName) {
        return document.createElement(tagName);
    },
    
    setClass(target, className) {
        target.setAttribute('class', className);
    },
    
    setTypeCheckBox(target) {
        target.setAttribute('type', 'checkbox');
    },
    
    createStructure() {
        /*make general structure for insertion*/
        this.wraper = this.newElem('div');
        this.quizzBlock = this.newElem('div');
        this.quizTitle = this.newElem('header');
        this.quizzList = this.newElem('ol');
        this.quizzFooter = this.newElem('footer');
        
        /*bind those with CSS selectors, and assign testHeaderName*/
        this.setClass(this.wraper, 'wraper');
        this.setClass(this.quizzBlock, 'quizz-block');
        this.setClass(this.quizTitle, 'quizz-title');
        this.setClass(this.quizzList, 'quizz-list');
        this.setClass(this.quizzFooter, 'quizz-footer');
        this.quizTitle.textContent = this.testHeaderName;
    },
    
    fillQuizzList() {
        const li = this.newElem('li');
        this.setClass(li, 'question-block');
        
        questions.forEach(question => {
            const header = this.newElem('header');
            const main = this.newElem('main');
            
            this.setClass(header, 'question-title');
            this.setClass(main, 'question-body');
            
            header.textContent = question.questionName;
            
            question.answers.forEach(answer => {
                const label = this.newElem('label');
                const input = this.newElem('input');
                const p = this.newElem('p');
                
                this.setClass(label, 'answer');
                this.setTypeCheckBox(input);
                
                p.textContent = answer;
                
                label.appendChild(input);
                label.appendChild(p);
                main.appendChild(label);
            });
            
            li.appendChild(header);
            li.appendChild(main);
        });
        
        this.quizzList.appendChild(li);
    },
    
    fillQuizzFooter() {
        const span = this.newElem('span');
        
        this.setClass(span, 'check-answers btn-shadow-effect');
        span.textContent = 'Check Answers';
        
        this.quizzFooter.appendChild(span);
    },
    
    compileAllStructure() {
        this.createStructure();
        this.fillQuizzList();
        this.fillQuizzFooter();
        
        this.quizzBlock.appendChild(this.quizTitle);
        this.quizzBlock.appendChild(this.quizzList);
        this.quizzBlock.appendChild(this.quizzFooter);
        
        this.wraper.appendChild(this.quizzBlock);
        
        document.body.appendChild(this.wraper);
    },
    
    render() {
        this.compileAllStructure();
    }
};

app.render();
