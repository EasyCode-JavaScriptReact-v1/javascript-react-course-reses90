
const questions = [
    {
        questionName: 'question 1',
        answers: ['answer 1.1', 'answer 1.2', 'answer 1.3'],
        correctAnswersIndexes: [0],
        correctAnswers: ['answer 1.1']
    },
    {
        questionName: 'question 2',
        answers: ['answer 2.1', 'answer 2.2', 'answer 2.3'],
        correctAnswersIndexes: [1],
        correctAnswers: ['answer 2.2']
    },
    {
        questionName: 'question 3',
        answers: ['answer 3.1', 'answer 3.2', 'answer 3.3'],
        correctAnswersIndexes: [2],
        correctAnswers: ['answer 3.3']
    },
];

const app = {
  questions,
  testName: 'Тест по программированию',
    counter: 0,
  render() {
    const main = this.newEl('main');
      main.setAttribute('id', 'ads')
    const testName = this.newEl('h1');
    testName.textContent = this.testName;
    const questionsList = this.newEl('ol');

    /*
    *
    * this.renderQuestions()
    *
    * */
    this.questions.forEach(question => {
      const li = this.newEl('li');
      const questionHeader = this.newEl('h3');
      questionHeader.textContent = question.questionName;
        
        questionHeader.setAttribute('class', 'title')
      const answers = this.newEl('ul');

      question.answers.forEach((answer, answerIndex) => {
        answers.innerHTML += (this.renderAnswer(answer, answerIndex));
      });

      li.appendChild(questionHeader);
      li.appendChild(answers);
      questionsList.appendChild(li);
    });

      const btn = this.newEl('button');
        btn.textContent = 'Submit';
        btn.setAttribute('type', 'submit');
        

    main.appendChild(testName);
    main.appendChild(questionsList);
      main.appendChild(btn);
    document.body.appendChild(main);
  },
  renderAnswer(answer, answerIndex) {
//    const li = this.newEl('li');
//    li.setAttribute('class', 'dsa')
//    const label = this.newEl('label');
    const uniqId = `uniq_${Math.random()}_${answerIndex}`;
//    label.setAttribute('for', uniqId);
//    label.textContent = answer;
//
//    const input = this.newEl('input');
//    input.setAttribute('type', 'checkbox');
//    input.setAttribute('id', uniqId);
//
//    li.appendChild(input);
//    li.appendChild(label);
//    return li;
      
      return `
            <li>
                <input type="checkbox" id="${uniqId}">

                <label for="${uniqId}">
                    ${answer}
                </label>
            </li>
    `
    
  },
  newEl(elName) {
    return document.createElement(elName);
  }
};

app.render();
//---------
const loading = document.querySelector('.main');
const testinsert = document.createElement('span');
testinsert.textContent = 'SPAN';

loading.parentElement.insertBefore(testinsert, loading);

const testing = document.getElementById('ads');
const buttonSMTH = document.createElement('button');
buttonSMTH.setAttribute('type', 'submit');
buttonSMTH.textContent = 'Add SMTH'

const answers = document.getElementsByClassName('dsa');

buttonSMTH.onclick = () => {
    
    questions.forEach((elem, index, arr) => {
        const correct = document.createElement('span');
        const incorrect = document.createElement('span');
        correct.textContent = 'correct';
        incorrect.textContent = 'incorrect';
        
        const answersFromDB = elem.answers;
        const rightAnswers = elem.correctAnswersIndexes;
    });
    
};

testing.appendChild(buttonSMTH);

testing.insertAdjacentHTML('beforeend', '<button type="submit">QWERTY</button>');

const javaScriptOneLove = [
    'Arrow',
    'Closure',
    'Class'
];

let createList = (arr) => {
    
    const renderItem = arr.map(item => `<li>${item}</li>`).join('');
    
    return `<ul>
        ${renderItem}
    </ul>`
}

document.body.innerHTML += createList(javaScriptOneLove);
