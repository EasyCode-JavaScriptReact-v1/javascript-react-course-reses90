import {users} from './components/users';
import {MOBILE_OPERATORS_IDENTIFICATORS} from './components/mobile-operators-identifiers';

class App {
    constructor() {
        this.store = this.createStore();
        this.pages = {
           'contacts': new ContactPage(this.store),
           'keypad': new KeypadPage(this.store),
           'footer': new FooterNavigationBar()
        }
        this.pages.contacts.setStateContact();
        this.render();
        this.pages.contacts.applyListenerForContactPage();
        this.applyListenerForNavigation();
    }
    
    createStore() {
        let state;
            
        return { 
            getState() { 
                return state; 
            }, 
            setState(newState) { 
                state = newState; 
            } 
        }
    }

    reducer(action) {
        const currentState = this.store.getState();
        const mainWraper = document.getElementById('main-wraper');
        const switchBetweenPages = () => {
            mainWraper.firstElementChild.outerHTML = currentState.activePage;
        };

        if(action.type === 'MOVE_TO_KEYPAD_PAGE') {
            this.pages.keypad.setStateKeypad();
            switchBetweenPages();
            this.pages.keypad.applyListenerForKeypadPage();
            return;
        }

        if(action.type === 'MOVE_TO_CONTACT_PAGE') {
            this.pages.contacts.setStateContact();
            switchBetweenPages();
            this.pages.contacts.applyListenerForContactPage();
            return;
        }

    }

    render() {
        const currentState = this.store.getState();
        const FOOTER = this.pages.footer.render();

        const appTemplate = /*html*/`
            <div id="main-wraper" class="app-block">
                ${currentState.activePage}
                ${FOOTER}
            </div>
        `;

        const mountMode = document.getElementById('mountMode');
        mountMode.innerHTML = appTemplate;
    }

    applyListenerForNavigation() {

        const _MOVE_TO_KEYPAD_PAGE = {
            type: 'MOVE_TO_KEYPAD_PAGE'
        }

        const _MOVE_TO_CONTACT_PAGE = {
            type: 'MOVE_TO_CONTACT_PAGE'
        }

        const wraperForFooter = document.getElementById('wraper-for-footer');
        wraperForFooter.addEventListener('click', (e) => {
            const currentState = this.store.getState();

            const BUTTON_ID = e.target.id;
            const BUTTON_ID_FROM_SVG = e.target.parentElement.id;
            const BUTTON_ID_FROM_PATH = e.target.parentElement.parentElement.id;

            if(
                BUTTON_ID === 'to-keypad-page' 
                || BUTTON_ID_FROM_SVG === 'to-keypad-page' 
                || BUTTON_ID_FROM_PATH === 'to-keypad-page'
            ) {

                if(currentState.stateName !== 'KEYPAD') {
                    this.pages.keypad.setStateKeypad();
                    return this.reducer(_MOVE_TO_KEYPAD_PAGE);
                }
                return;
            }

            if(
                BUTTON_ID === 'to-contact-page' 
                || BUTTON_ID_FROM_SVG === 'to-contact-page' 
                || BUTTON_ID_FROM_PATH === 'to-contact-page'
            ) {

                if(currentState.stateName !== 'CONTACT') {
                    this.pages.contacts.setStateContact();
                    return this.reducer(_MOVE_TO_CONTACT_PAGE);
                }
                return;
            }
        })
    }
}

/* ================== FOOTER START================== */

class FooterNavigationBar {
    constructor() {
        this.icons = {
            contactIcon: {
                id: 'to-contact-page',
                class: 'far fa-address-book',
            },
            keypadIcon: {
                id: 'to-keypad-page',
                class: 'fas fa-tty',
            },
            addUserIcon: {
                id: 'to-addUser-page',
                class: 'fas fa-user-plus',
            }
        }
    }

    render() {
        const navigationBar = /*html*/`
            <footer class="container">
                <div class="row navigation-panel" id="wraper-for-footer">
                    ${this.createIcon(this.icons.contactIcon)}
                    ${this.createIcon(this.icons.keypadIcon)}
                    ${this.createIcon(this.icons.addUserIcon)}
                </div>
            </footer>
        `;

        return navigationBar;
    }

    createIcon(iconPattern) {
        const ID = iconPattern.id;
        const CLASS = iconPattern.class;

        const icon = /*html*/`
            <div class="col-4 d-flex justify-content-center">
                <button id="${ID}" class="navigation-button">
                    <span class="${CLASS} icon"></span>
                </button>
            </div>
        `;

        return icon;
    }

}

/* ================== FOOTER END================== */
/* ================== CONTACT START================== */

class ContactPage {
    constructor(store) {
        this.setStateContact = () => {
            const {setState} = store;
            const initializeState = {
                stateName: 'CONTACT',
                activePage: this.render(),
            };
            setState(initializeState);
        }

    }

    render() {
        const contactTempalte = /*html*/`
            <div id="contact-wraper">

                <header class="container">
                    <form class="form-inline search-form row">
                        <div class="form-group">
                            <label class="sr-only" for="search">Search</label>
                            <input type="text" class="form-control" id= "search" placeholder="Search">
                        </div>
                    </form>
                </header>

                <main class="container contact-list">
                    <table class="table table-hover table-striped">

                        <thead>
                            <tr id="wraper-for-th">
                                <th class="for-sort">Name</th>
                                <th class="for-sort">Last Name</th>
                                <th class="for-sort">Email</th>
                            </tr>
                        </thead>

                        <tbody id="list-of-contacts">
                            ${this.contactListComponent(users)}
                        </tbody>

                    </table>
                </main>
            </div>
        `;

        return contactTempalte;
    }

    contactListComponent(userList) {
        return userList.reduce((listStructure, user) => {
            const userFirstName = user.firstName;
            const userLastName = user.lastName;
            const userEmail = user.email;

            const userComponent = /*html*/`
            <tr class="user">
                <td> ${userFirstName} </td>
                <td> ${userLastName} </td>
                <td> ${userEmail} </td>
            </tr>
            `;

            listStructure += userComponent;
            return listStructure;
        }, ``)
    }

    applyListenerForContactPage() {
        const wraperForTh = document.getElementById('wraper-for-th');
        wraperForTh.addEventListener('click', (e) => {
            const TH_ELEM_CONTAINS = e.target.textContent.trim();
            const PREDICT_TEXT_CONTENT = {
                firstName: 'Name',
                lastName: 'Last Name',
                email: 'Email'
            };

            const ListOfContacts = document.getElementById('list-of-contacts');

            if(TH_ELEM_CONTAINS === PREDICT_TEXT_CONTENT.firstName) {
                const sortedListByFirsName = this.sortUsersByValue('firstName', users);
                ListOfContacts.innerHTML = this.contactListComponent(sortedListByFirsName);
                return;
            }

            if(TH_ELEM_CONTAINS === PREDICT_TEXT_CONTENT.lastName) {
                const sortedListByLastName = this.sortUsersByValue('lastName', users);
                ListOfContacts.innerHTML = this.contactListComponent(sortedListByLastName);
                return;
            }

            if(TH_ELEM_CONTAINS === PREDICT_TEXT_CONTENT.email) {
                const sortedListByEmail = this.sortUsersByValue('email', users);
                ListOfContacts.innerHTML = this.contactListComponent(sortedListByEmail);
                return;
            }
        })

        /* SORT USERS BY INPUTED LETTERS OF NAME */

        
    }

    sortUsersByValue(key, users) {
        const sortFunction = function(value, nextValue) {
            if(value[key] > nextValue[key]) return 1;
            if(value[key] < nextValue[key]) return -1;
        }
    
        return [...users].sort(sortFunction);
    }
}

/* ================== CONTACT END================== */
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

const APPLICATION = new App();