import {
    HelpfulFeaturesForElementPrototype,
    createElem
} from './helper';

import {
    kuivstarIdentification,
    vodafoneIdentification,
    lifeIdentification
} from './mobile-operator';

const helper = new HelpfulFeaturesForElementPrototype();

const buttonValues = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '*',
    '0',
    '#'
];

class KeypadMode{
    constructor() {}

    render() {
        const keypadTemplate = /*html*/`
            <div id="keypad-wraper">
                ${this.keypadHeaderComponent()}
                ${this.keypadPanelComponent()}
            </div>
        `;

        return keypadTemplate;
    }

    keypadHeaderComponent() {
        const keypadHeader = /*html*/`
            <header class="container">
                <div class="keypad-header-wraper d-flex justify-content-between">
                    <div id="phone-number">
                        <span id="number"></span>
                        <span id="operator"></span>
                    </div>
                    <div id="delete" class="delete-number">
                        <span class="fas fa-backspace"></span>
                    </div>
                </div>
            </header>
        `;

        return keypadHeader;
    }

    keypadPanelComponent() {
        const keypadPanel = /*html*/`
            <main class="container keypad-block">
                ${this.createKeypad()}
                ${this.createCallOffButtonAndErrorBlock()}
            </main>
        `;

        return keypadPanel;
    }

    createArrayButtons() {
        return buttonValues.reduce((newArr, elem) => {
            const buttonForKeypad = createElem('div');
            buttonForKeypad.addClass('number-btn');
            buttonForKeypad.textContent = elem;
            newArr.push(buttonForKeypad);
            return newArr;
        }, [])
    }

    createKeypad() {
        const arrayWithButtons = this.createArrayButtons();

        const wraperForButtons = createElem('div');
        wraperForButtons.id = 'wraper-for-buttons';

        const row = createElem('div');
        row.addClass('row');

        arrayWithButtons.forEach(button => {
            if(row.childElementCount === 3) {
                wraperForButtons.innerHTML += row.outerHTML;
                row.innerHTML = '';
            }
            row.appendChild(button);
        });

        return wraperForButtons.outerHTML;
    }

    createCallOffButtonAndErrorBlock() {
        const toCallBtnAndErrorBlock = /*html*/`
            <div class="row">
                <div id="call-btn" class="number-btn call"><span class="fas fa-phone"></span></div>
            </div>
            <span id="error-block"></span>
        `;
        
        return toCallBtnAndErrorBlock;
    }

    forReplcement() {
        const keypadWraper = createElem('div');
        keypadWraper.id = 'keypad-wraper';
        keypadWraper.innerHTML += this.keypadHeaderComponent();
        keypadWraper.innerHTML += this.keypadPanelComponent()

        return keypadWraper;
    }
};

export {KeypadMode};