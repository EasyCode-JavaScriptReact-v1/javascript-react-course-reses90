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

const quizz = {
    create() {
        const wraper = document.createElement('div');
        const quizzBlock = document.createElement('div');
        const quizTitle = document.createElement('header');
        const quizzFooter = document.createElement('footer');
        const quizzList = document.createElement('ol');
        
        wraper.setAttribute('class', 'wraper');
        quizzBlock.setAttribute('class', 'quizz-block');
        quizzList.setAttribute('class', 'quizz-list');
        quizTitle.setAttribute('class', 'quizz-title');
        quizTitle.textContent = 'Test of Programming';
        
        const questionTitles = ['What is the best program language?', 'What is your name?', 'What is the best car?'];
        const answers = [
            ['JS', 'JavaScript', 'HTML'],
            ['Vasya', 'Petr', 'Vitya'],
            ['Lada Sedan', 'Juguli', 'Priora']
        ];
        
        function fillQuizzList() {
            for(let i = 0; i < questionTitles.length; i++) {
                const li = document.createElement('li');
                const header = document.createElement('header');
                const main = document.createElement('main');
                
                li.setAttribute('class', 'question-block');
                header.setAttribute('class', 'question-title');
                main.setAttribute('class', 'question-body');
                header.textContent = questionTitles[i];
                
                for(let j = 0; j < answers[i].length; j++) {
                    const label = document.createElement('label');
                    const input = document.createElement('input');
                    const p = document.createElement('p');
                    
                    label.setAttribute('class', 'answer');
                    p.textContent = answers[i][j];
                    input.setAttribute('type', 'checkbox');
                    label.appendChild(input);
                    label.appendChild(p);
                    main.appendChild(label);
                }
                
                li.appendChild(header);
                li.appendChild(main);
                quizzList.appendChild(li);
            }
        }
        fillQuizzList();
        
        function fillQuizzFooter() {
            const span = document.createElement('span');
            quizzFooter.setAttribute('class', 'quizz-footer');
            span.setAttribute('class', 'check-answers btn-shadow-effect');
            span.textContent = 'Check Answers';
            quizzFooter.appendChild(span);
        }
        fillQuizzFooter();
        
        quizzBlock.appendChild(quizTitle);
        quizzBlock.appendChild(quizzList);
        quizzBlock.appendChild(quizzFooter);
        
        wraper.appendChild(quizzBlock);
        
        document.body.appendChild(wraper);
    }
}

quizz.create();
