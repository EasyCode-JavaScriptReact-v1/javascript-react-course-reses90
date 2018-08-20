import {MOBILE_OPERATORS_IDENTIFICATORS} from '../components/mobile-operators-identifiers';

/* ================== KEYPAD START================== */

class KeypadPage {
    constructor(store) {
        this.setStateKeypad = () => {
            const {setState} = store;
            const initializeState = {
                stateName: 'KEYPAD',
                activePage: this.render(),
            };
            setState(initializeState);
        }

        this.callMode = new CallMode();
    }

    render() {
        const buttons = {
            ONE: '1',
            TWO: '2',
            THREE: '3',
            FOUR: '4',
            FIVE: '5',
            SIX: '6',
            SEVEN: '7',
            EIGHT: '8',
            NINE: '9',
            ZERO: '0',
            ASTERISK: '*',
            HASH: '#'
        }

        return /*html*/`
            <div id="keypad-wraper">

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

                    <main class="container keypad-block borders">
                    
                    <div id="wraper-for-buttons">
                        <div class="row">
                            ${this.createButton(buttons.ONE)}
                            ${this.createButton(buttons.TWO)}
                            ${this.createButton(buttons.THREE)}
                        </div>
                        <div class="row">
                            ${this.createButton(buttons.FOUR)}
                            ${this.createButton(buttons.FIVE)}
                            ${this.createButton(buttons.SIX)}
                        </div>
                        <div class="row">
                            ${this.createButton(buttons.SEVEN)}
                            ${this.createButton(buttons.EIGHT)}
                            ${this.createButton(buttons.NINE)}
                        </div>
                        <div class="row">
                            ${this.createButton(buttons.ASTERISK)}
                            ${this.createButton(buttons.ZERO)}
                            ${this.createButton(buttons.HASH)}
                        </div>
                    </div>

                    <div class="row">
                        <div id="call-btn" class="number-btn call"><span class="fas fa-phone"></span></div>
                    </div>
                    <span id="error-block"></span>

                    </main>

            </div>    
        `;
    }

    createButton(value) {
        const button = /*html*/`
            <div class="number-btn">${value}</div>
        `;

        return button;
    }

    applyListenerForKeypadPage() {

        /* ADD NUMBER */
        const keypadButtons = document.getElementById('wraper-for-buttons');
        const fieldForNumber = document.getElementById('number');
        const fieldForOperator = document.getElementById('operator');

        const toFormateNumberFieldForAdding = () => {
            const numbersFromField = fieldForNumber.textContent.replace(/\D/gm, '');
            let finalConstructions = null;

            if(numbersFromField.length === 1) {
                finalConstructions = numbersFromField.replace(/(.{1})/g, '($1');
                fieldForNumber.textContent = finalConstructions;
                return;
            }

            if(numbersFromField.length === 3) {
                finalConstructions = numbersFromField.replace(/(.{3})/g, '($1)');
                fieldForNumber.textContent = finalConstructions;
                return;
            }

            if(numbersFromField.length === 4) {
                finalConstructions = numbersFromField.replace(/(.{3})(.{1})/g, '($1) $2');
                fieldForNumber.textContent = finalConstructions;
                return;
            }

            if(numbersFromField.length === 7) {
                finalConstructions = numbersFromField.replace(/(.{3})(.{3})(.{1})/g, '($1) $2-$3');
                fieldForNumber.textContent = finalConstructions;
                return;
            }

            if(numbersFromField.length === 9) {
                finalConstructions = numbersFromField.replace(/(.{3})(.{3})(.{2})(.{1})/g, '($1) $2-$3-$4');
                fieldForNumber.textContent = finalConstructions;
                return;
            }

        };

        keypadButtons.addEventListener('click', (e) => {
            const TARGET_CLASS_NAME = e.target.className;

            if(TARGET_CLASS_NAME === 'number-btn') {
                const BUTTON_VALUE = e.target.textContent;
                fieldForNumber.textContent += BUTTON_VALUE;

                const MATCH_NUMBERS = fieldForNumber.textContent.match(/\d+/gm);
                const FIRST_THREE_NUMBERS = MATCH_NUMBERS[0];
                const LENGTH_OF_FIRST_NUMBERS = FIRST_THREE_NUMBERS.length;

                if(LENGTH_OF_FIRST_NUMBERS === 3) {
                    fieldForOperator.textContent = this.indentifyMobileOperator(FIRST_THREE_NUMBERS)
                }

                toFormateNumberFieldForAdding();
            }
        });

        /* REMOVE NUMBER */
        const deleteButton = document.getElementById('delete');

        deleteButton.addEventListener('click', (e) => {
            const BUTTON_ID = e.target.id;
            const BUTTON_ID_FROM_SVG = e.target.parentElement.id;
            const BUTTON_ID_FROM_PATH = e.target.parentElement.parentElement.id;

            if(
                BUTTON_ID === 'delete'
                || BUTTON_ID_FROM_SVG === 'delete'
                || BUTTON_ID_FROM_PATH === 'delete'
            ) {
                const LENGTH_OF_NUMBERS = fieldForNumber.textContent.length;
                const LENGTH_OF_NUMBERS_FOR_SLICE = fieldForNumber.textContent.length - 1;
                const strWithDeletedOneNumber = fieldForNumber.textContent.slice(0, LENGTH_OF_NUMBERS_FOR_SLICE)
                fieldForNumber.textContent = strWithDeletedOneNumber;

                if(LENGTH_OF_NUMBERS <= 3) {
                    fieldForOperator.textContent = '';
                }

                return;
            }
        });

        /* TO CALL BUTTON */
        const mainWraper = document.getElementById('main-wraper');

        const toCallButton = document.getElementById('call-btn');
        toCallButton.addEventListener('click', () => {
            const ERROR_BLOCK = document.getElementById('error-block');

            if(fieldForNumber.textContent.length < 3) {
                ERROR_BLOCK.textContent = `ERROR you've typed incorrect number`;
                setTimeout(() => {
                    ERROR_BLOCK.textContent = '';
                }, 3000);
                return;
            }

            const NUMBER_FOR_CALL_MODE = this.callMode.getNumber();
            const OPERATOR_FOR_CALL_MODE = this.callMode.getOperator();

            mainWraper.classList.add('call-mode');
            mainWraper.innerHTML = this.callMode.render(NUMBER_FOR_CALL_MODE, OPERATOR_FOR_CALL_MODE);
            this.callMode.applyListenerForCallMode();
        })

        /* WRITING NUMBER BY KEYBOARD */

        const keyCodes = {
            ONE: 49,
            TWO: 50,
            THREE: 51,
            FOUR: 52,
            FIVE: 53,
            SIX: 54,
            SEVEN: 55,
            EIGHT: 56,
            NINE: 57,
            ZERO: 48,
            ASTERISK: 42,
            HASH: 35,
            DELETE: 8
        };

        const SINGLE_TAPS = (e) => {

            if(e.keyCode === keyCodes.ONE) {
                const ONE = '1';
                fieldForNumber.textContent += ONE;
            }
            if(e.keyCode === keyCodes.TWO) {
                const TWO = '2';
                fieldForNumber.textContent += TWO;
            }
            if(e.keyCode === keyCodes.THREE) {
                const THREE = '3';
                fieldForNumber.textContent += THREE;
            }
            if(e.keyCode === keyCodes.FOUR) {
                const FOUR = '4';
                fieldForNumber.textContent += FOUR;
            }
            if(e.keyCode === keyCodes.FIVE) {
                const FIVE = '5';
                fieldForNumber.textContent += FIVE;
            }
            if(e.keyCode === keyCodes.SIX) {
                const SIX = '6';
                fieldForNumber.textContent += SIX;
            }
            if(e.keyCode === keyCodes.SEVEN) {
                const SEVEN = '7';
                fieldForNumber.textContent += SEVEN;
            }
            if(e.keyCode === keyCodes.EIGHT) {
                const EIGHT = '8';
                fieldForNumber.textContent += EIGHT;
            }
            if(e.keyCode === keyCodes.NINE) {
                const NINE = '9';
                fieldForNumber.textContent += NINE;
            }
            if(e.keyCode === keyCodes.ZERO) {
                const ZERO = '0';
                fieldForNumber.textContent += ZERO;
            }
            if(e.keyCode === keyCodes.HASH) {
                const HASH = '#';
                fieldForNumber.textContent += HASH;
            }
            if(e.keyCode === keyCodes.ASTERISK) {
                const ASTERISK = '*';
                fieldForNumber.textContent += ASTERISK;
            }

            

            /* IDENTIFICATION FUNCTIONAL */
            const MATCH_NUMBERS = fieldForNumber.textContent.match(/\d+/gm);
            const FIRST_THREE_NUMBERS = MATCH_NUMBERS[0];
            const LENGTH_OF_FIRST_NUMBERS = FIRST_THREE_NUMBERS.length;

            if(LENGTH_OF_FIRST_NUMBERS === 3) {
                fieldForOperator.textContent = this.indentifyMobileOperator(FIRST_THREE_NUMBERS)
            }

            toFormateNumberFieldForAdding();

        };

        const DELETE_FUNCTIONAL = (e) => {
            const LENGTH_OF_NUMBERS = fieldForNumber.textContent.length;

            if(e.keyCode === keyCodes.DELETE) {
                const LENGTH_OF_NUMBERS_FOR_SLICE = fieldForNumber.textContent.length - 1;
                const strWithDeletedOneNumber = fieldForNumber.textContent.slice(0, LENGTH_OF_NUMBERS_FOR_SLICE)
                fieldForNumber.textContent = strWithDeletedOneNumber;

                if(LENGTH_OF_NUMBERS <= 3) {
                    fieldForOperator.textContent = '';
                }
                return;
            }
        }

        window.addEventListener('keypress', SINGLE_TAPS);
        window.addEventListener('keydown', DELETE_FUNCTIONAL);
        
    }

    indentifyMobileOperator(firstThreeNumbers) {
        let operator;

        MOBILE_OPERATORS_IDENTIFICATORS.kuivstar.forEach(identicationNumber => {
            if(identicationNumber === firstThreeNumbers) {
                operator = 'Kuivstar'
            }
        })        

        MOBILE_OPERATORS_IDENTIFICATORS.life.forEach(identicationNumber => {
            if(identicationNumber === firstThreeNumbers) {
                operator = 'Life'
            }
        })   

        MOBILE_OPERATORS_IDENTIFICATORS.vodafone.forEach(identicationNumber => {
            if(identicationNumber === firstThreeNumbers) {
                operator = 'Vodafone'
            }
        })   

        return operator;
    }
}

/* ================== KEYPAD END================== */

/* ================== CALL MODE START================== */
class CallMode{
    constructor() {}

    render(number, operator) {
        return /*html*/`
        <div id="callMode">
            <header class="container">

                <div class="row d-flex justify-content-center">
                    <span class="call-target">${number}</span>
                    <span class="phone-code">${operator}</span>
                </div>

                <div class="row d-flex justify-content-center">
                    <span id="load-point-1" class="load-point fas fa-circle"></span>
                    <span id="load-point-2" class="load-point fas fa-circle"></span>
                    <span id="load-point-3" class="load-point fas fa-circle"></span>
                    <span id="load-point-4" class="load-point fas fa-circle"></span>
                    <span id="load-point-5" class="load-point fas fa-circle"></span>
                </div>

            </header>

            <main class="all-mode-keypad-block">

                <div class="wraper-for-call-mode-buttons">

                    <div class="row">

                        <div class="wraper-for-call-mode-btn">
                            <div class="call-mode-btn">
                                <span class="fas fa-microphone-alt-slash"></span>
                            </div>
                            <span class="call-btn-description">mute</span>
                        </div>

                        <div class="wraper-for-call-mode-btn">
                            <div class="call-mode-btn">
                                <span class="fas fa-th"></span>
                            </div>
                            <span class="call-btn-description">keypad</span>
                        </div>
                        
                        <div class="wraper-for-call-mode-btn">
                            <div class="call-mode-btn">
                                <span class="fas fa-volume-up"></span>
                            </div>  
                            <span class="call-btn-description">volume</span>
                        </div>
                        
                    </div>

                    <div class="row">
                        <div class="wraper-for-call-mode-btn">
                            <div class="call-mode-btn">
                                <span class="fas fas fa-plus"></span>
                            </div>  
                            <span class="call-btn-description">add</span>
                        </div>
                        
                        <div class="wraper-for-call-mode-btn">
                            <div class="call-mode-btn">
                                <span class="fas fa-video"></span>
                            </div>  
                            <span class="call-btn-description">video</span>
                        </div>

                        <div class="wraper-for-call-mode-btn">
                            <div class="call-mode-btn">
                                <span class="fas fa-users"></span>
                            </div>  
                            <span class="call-btn-description">contacts</span>
                        </div>
                    </div>

                </div>

                <div class="row d-flex justify-content-center">
                    <div id="call-off" class="call-mode-btn call-off">
                        <span class="fas fa-phone"></span>
                    </div>  
                </div>

            </main>
        </div>
        `;
    }

    getNumber() {
        const phoneNumber = document.getElementById('number');
        return phoneNumber.textContent;
    }

    getOperator() {
        const phoneOperator = document.getElementById('operator');
        return phoneOperator.textContent;
    }

    applyListenerForCallMode() {
        
    }

    setSavedKeypadPage(page) {
        this.savedKeypadPage = page;
    }
}

/* ================== CALL MODE END================== */

export {KeypadPage};