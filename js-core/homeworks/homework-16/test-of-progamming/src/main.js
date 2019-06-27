const questions = [
  {
    questionName: "Can a node in the DOM have multiple parent nodes?",
    answers: ["No", "Yes", "of course"],
    correctAnswersIndexes: [0],
    correctAnswers: ["No"]
  },
  {
    questionName: "Which method is used to replace nodes?",
    answers: ["replaceNodes", "replaceChild", "replaceElements"],
    correctAnswersIndexes: [1],
    correctAnswers: ["replaceChild"]
  },
  {
    questionName: "Select all that apply:",
    answers: [
      "innerHTML is a property",
      "innerHTML is a method",
      "The document object is the root of the DOM"
    ],
    correctAnswersIndexes: [0, 2],
    correctAnswers: [
      "innerHTML is a property",
      "The document object is the root of the DOM"
    ]
  }
];

const app = {
  questions,
  testName: "Test of DOM",

  render(parent) {
    const main = this.newEl("main");
    const testName = this.newEl("h1");

    main.setAttribute("id", "wraper");
    testName.setAttribute("style", "margin-bottom:20px");
    testName.textContent = this.testName;

    const questionsList = this.newEl("ol");

    this.questions.forEach(question => {
      const li = this.newEl("li");
      const questionHeader = this.newEl("h3");
      questionHeader.textContent = question.questionName;

      questionHeader.setAttribute("class", "title");
      const answers = this.newEl("ul");

      question.answers.forEach((answer, answerIndex) => {
        answers.innerHTML += this.renderAnswer(answer, answerIndex);
      });

      li.appendChild(questionHeader);
      li.appendChild(answers);
      questionsList.appendChild(li);
    });

    const btn = this.newEl("button");
      btn.setAttribute('id', 'submit');
    btn.textContent = "Submit";
    btn.setAttribute("type", "submit");

    main.appendChild(testName);
    main.appendChild(questionsList);
    main.appendChild(btn);
    parent.appendChild(main);
  },

  renderAnswer(answer, answerIndex) {
    const uniqId = `uniq_${Math.random()}_${answerIndex}`;

    return `
            <li style="list-style: none; margin: 5px 0;">
                <input class="inputForCheck" type="checkbox" id="${uniqId}">
                <label class="forCheck" for="${uniqId}"><span>${answer}</span></label>
            </li>
    `;
  },

  newEl(elName) {
    return document.createElement(elName);
  }
};

app.render(document.body);


/* ТЕСТ */

/*
* Добавьте реальных вопросов про JavaScript с вариантами
* ответов
* */

// 3. При нажатии на кнопку если были выбраны правильные ответы,
// отображайте "ПРАВИЛЬНО" или не правильно
// или отображайте значек X или галочку, возле вопроса

const wraper = document.getElementById("wraper");
const showCorrectAndIncorrectButton = document.createElement("button");
showCorrectAndIncorrectButton.setAttribute("type", "submit");
showCorrectAndIncorrectButton.textContent =
  "Show Correct and Incorrect Answers";

function CheckForCorrect(string) {
  return questions.some(block => {
    return block.correctAnswers.some(correctAnswer => {
      return string === correctAnswer;
    });
  });
}

showCorrectAndIncorrectButton.onclick = () => {
  if (this.counter > 0) {
    return;
  }

  this.counter = 0;

  let answersFromDOM = document.getElementsByClassName("forCheck");
  [...answersFromDOM].forEach(answer => {
    const correct = '<span class="correct">Correct </span>';
    const wrong = '<span class="wrong">Wrong </span>';

    const answerForCheck = answer.textContent;
    CheckForCorrect(answerForCheck)
      ? (answer.innerHTML = correct + answer.innerHTML)
      : (answer.innerHTML = wrong + answer.innerHTML);
  });

  this.counter++;
};

wraper.appendChild(showCorrectAndIncorrectButton);

/* @SUPER-FRONT */

/*
* 4. По нажатию на кнопку(проверить) отобразится "модальное" окно в котором отобразится
* весь тест с отображенными правильными ответами(обозначьте их) и неправильными(тоже обозначьте)
* Отобразите количество правильных и неправильных ответов
* счетчик
* У модального окна будет 2 кнопки "пересдать" и "отправить"
* *
* Если все ответы правильные, кнопка пересдать не активна
* disabled
*
* По нажатию отправить, модальное окно закрывается и на экране надпись "ваши ответы успешно
* отправлены"
*
* --- Если все ответы правильные отобразите картинку
*
* По нажатию на пересдать - появляется снова наш тест сначала
*/

class Modal{
    constructor() {
        this.modalContainer = document.createElement('div');
        this.modalContainer.className = 'modal';
        document.body.appendChild(this.modalContainer);
        
        const contentContainer = document.createElement('div');
        contentContainer.className = 'container';
        this.modalContainer.appendChild(contentContainer);
        
        const closeButton = document.createElement('button');
        closeButton.className = 'close-button';
        closeButton.innerHTML = '&times;';
        contentContainer.appendChild(closeButton);
        closeButton.addEventListener('click', this.close.bind(this));
        
        this.content = document.createElement('div');
        contentContainer.appendChild(this.content);
    }
    
    set html(value) {
        this.content.innerHTML = value;
    }
    
    open() {
        this.modalContainer.classList.add('open');
    }
    
    close() {
        this.modalContainer.classList.remove('open');
    }
}

const modal = new Modal();

function checkAnswer() {
    const inputsOfAnswers = document.getElementsByClassName('inputForCheck');
    let counterForCorrectInputs = 0;
    
    [...inputsOfAnswers].forEach(input => {
        let label = input.nextElementSibling;
        const answer = label.textContent;
        
        if(input.nextElementSibling.firstChild.className === 'correct' || input.nextElementSibling.firstChild.className === 'wrong') {
            
            const answer = input.nextElementSibling.lastElementChild.textContent;
            
            if(input.checked === true && CheckForCorrect(answer)) {
                counterForCorrectInputs++;
            }
            
        } else if(input.checked === true && CheckForCorrect(answer)) {
            counterForCorrectInputs++;
        }
    })
    
    return counterForCorrectInputs;
}

/*
* @Super-FRONT @ 2
* При загрузке странице добавьте таймер отсчета с милисекундами -> В модальном окне отобразите
* количество затраченного времени на тест
*
* */
let counterMili = 0;
let counterSecond = 0;
let counterMinutes = 0;

const functionForMiliseconds = () => {
    const milisecondsDOM = document.getElementById('miliseconds');
    if(counterMili === 100) counterMili = 0;
    counterMili++;
    milisecondsDOM.innerHTML = `: ${counterMili}`;
}

const functionForSeconds = () => {
    const secondsDOM = document.getElementById('seconds');
    if(counterSecond === 60) counterSecond = 0;
    counterSecond++;
    secondsDOM.innerHTML = `: ${counterSecond}`;
}

const functionForMinutes = () => {
    const minutesDOM = document.getElementById('minutes');
    counterMinutes++;
    minutesDOM.innerHTML = `${counterMinutes} `;
}

let miliseconds = setInterval(functionForMiliseconds, 10.2);

let seconds = setInterval(functionForSeconds, 1000);

let minutes = setInterval(functionForMinutes, 60000);

/*--------------------------------------------------*/

class ModalWinwdow{
    constructor() {
        this.wraper = document.createElement('div');
        const title = document.createElement('h1');
        title.className = 'modal-title';
        title.textContent = 'Results:';
        this.wraper.appendChild(title);
        
        const ol = document.createElement('ol');
        
        questions.forEach(question => {
            const li = document.createElement("li");
            const questionHeader = document.createElement("h3");
            questionHeader.textContent = question.questionName;

            questionHeader.setAttribute("class", "title");
            const answers = document.createElement("ul");

            question.answers.forEach((answer, answerIndex) => {
                answers.innerHTML += this.renderAnswer(answer, answerIndex);
            });
            
            li.appendChild(questionHeader);
            li.appendChild(answers);
            ol.appendChild(li);
        });
        
        this.wraper.appendChild(ol);
        
        const buttonPassTestAgain = document.createElement('button');
        buttonPassTestAgain.setAttribute('type', 'submit');
        buttonPassTestAgain.textContent = 'Pass the test again';
        buttonPassTestAgain.addEventListener('click', () => {
            const inputsOfAnswers = document.getElementsByClassName('inputForCheck');
            modal.close();
            
            [...inputsOfAnswers].forEach(input => {
                if(input.checked === true) {
                    input.checked = false;
                }
            })
            
            counterMili = 0;
            counterSecond = 0;
            counterMinutes = 0;
            
            const milisecondsDOM = document.getElementById('miliseconds');
            const secondsDOM = document.getElementById('seconds');
            const minutesDOM = document.getElementById('minutes');
            
            milisecondsDOM.innerHTML = `: ${counterMili}`;
            secondsDOM.innerHTML = `: ${counterSecond}`;
            minutesDOM.innerHTML = `${counterMinutes} `;
            
            miliseconds = setInterval(functionForMiliseconds, 10.2);
            seconds = setInterval(functionForSeconds, 1000);
            minutes = setInterval(functionForMinutes, 60000);
        })
        this.wraper.appendChild(buttonPassTestAgain);
        
        const buttonSendResults = document.createElement('button');
        buttonSendResults.setAttribute('type', 'submit');
        buttonSendResults.textContent = 'Send Results';
        buttonSendResults.addEventListener('click', () => {
            const time = `<p>You've passed the test for ${counterMinutes} : ${counterSecond} : ${counterMili}</p><br>`
            const quantityCorrectAnswers = `<p>You've had ${checkAnswer()} correct answer(s)</p><br>`;
            const winner = `<img src="img/winner.gif"><br>`

            if(checkAnswer() !== 4) {
                this.wraper.innerHTML = time + quantityCorrectAnswers;
                this.wraper.appendChild(buttonPassTestAgain);
            } else {
                this.wraper.innerHTML = time + quantityCorrectAnswers + winner;
                buttonPassTestAgain.setAttribute('disabled', '');
                this.wraper.appendChild(buttonPassTestAgain);
            }
            
        })
        this.wraper.appendChild(buttonSendResults);
        
    }
    
    renderAnswer(answer, answerIndex) {
        const correct = '<span class="correct">Correct </span>';
        const wrong = '<span class="wrong">Wrong </span>';
        return CheckForCorrect(answer)
        ? `
            <li style="list-style: none; margin: 5px 0;">
                <span>${correct}${answer}</span>
            </li>
        `
        :`
            <li style="list-style: none; margin: 5px 0;">
                <span>${wrong}${answer}</span>
            </li>
        `
    }
    
    render() {
        return this.wraper;
    }
}

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
    clearInterval(miliseconds);
    clearInterval(seconds);
    clearInterval(minutes);
    const modalWindow = new ModalWinwdow();
    modal.html = '';
    modal.content.appendChild(modalWindow.render());
    modal.open();
});
