
const questions = [
    {
        questionName: 'question 1',
        answers: ['answer 1', 'answer 2', 'answer 3'],
        correctAnswers: [1]
    },
    {
        questionName: 'question 2',
        answers: ['answer 1', 'answer 2', 'answer 3'],
        correctAnswers: [2]
    },
    {
        questionName: 'question 3',
        answers: ['answer 1', 'answer 2', 'answer 3'],
        correctAnswers: [3]
    },
];

const app = {
  questions,
  testName: 'Тест по программированию',
    counter: 0,
  render() {
    const main = this.newEl('main');
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
        answers.appendChild(this.renderAnswer(answer, answerIndex));
      });

      li.appendChild(questionHeader);
      li.appendChild(answers);
      questionsList.appendChild(li);
    });
      const saveState = questions[1].questionName;
      const btn = this.newEl('button');
        btn.textContent = 'Submit';
        btn.setAttribute('type', 'submit');
        btn.onclick = () => {
            const child = main.children[1];
            const child2 = child.children;
            
            const titles = document.querySelectorAll('h3');
            
            [...titles].forEach(h3 => {
                if(h3.getAttribute('class') === 'active') {
                    h3.setAttribute('class', '');
                } else {
                    h3.setAttribute('class', 'active')
                }
            });
            
//            const firstQuestion = child2[0].children[1].children[1].children[0];
//            const secondQuestion = child2[1].children[1].children[1].children[0];
//            const thirdQuestion = child2[2].children[1].children[1].children[0];
//            
//            firstQuestion.checked = !firstQuestion.checked;
//            secondQuestion.checked = !secondQuestion.checked;
//            thirdQuestion.checked = !thirdQuestion.checked;
            
//            const answerFirst = child4.firstChild;
//            const answerLast = child4.lastChild;
//            
//            answerFirst.firstChild.checked = !answerFirst.firstChild.checked;
//            answerLast.firstChild.checked = !answerLast.firstChild.checked;
//            
//            this.counter++;
//            this.counter % 2 === 0 ? child3.textContent = saveState : child3.textContent = '999';
            
            
        }

    main.appendChild(testName);
    main.appendChild(questionsList);
      main.appendChild(btn);
    document.body.appendChild(main);
  },
  renderAnswer(answer, answerIndex) {
    const li = this.newEl('li');
    const label = this.newEl('label');
    const uniqId = `uniq_${Math.random()}_${answerIndex}`;
    label.setAttribute('for', uniqId);
    label.textContent = answer;

    const input = this.newEl('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', uniqId);

    li.appendChild(input);
    li.appendChild(label);
    return li;
  },
  newEl(elName) {
    return document.createElement(elName);
  }
};

app.render();
