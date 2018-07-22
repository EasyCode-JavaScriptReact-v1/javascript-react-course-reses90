import {users} from './components/users';
import {MOBILE_OPERATORS_IDENTIFICATORS} from './components/mobile-operators-identifiers';

class App {
    constructor() {
        this.store = this.createStore();
        this.pages = {
           'contacts': new ContactPage(this.store),
           'keypad': new KeypadPage(this.store),
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
            switchBetweenPages();
            this.pages.keypad.applyListenerForKeypadPage();
            return;
        }

        if(action.type === 'MOVE_TO_CONTACT_PAGE') {
            switchBetweenPages();
            this.pages.contacts.applyListenerForContactPage();
            return;
        }

    }

    render() {
        const currentState = this.store.getState();

        const appTemplate = /*html*/`
            <div id="main-wraper" class="app-block">
                ${currentState.activePage}
                ${this.footerNavigationBar()}
            </div>
        `;
        const mountMode = document.getElementById('mountMode');
        mountMode.innerHTML = appTemplate;
    }

    footerNavigationBar() {
        return /*html*/`
            <footer class="container">
                <div class="row navigation-panel" id="wraper-for-footer">
                    <div class="col-4 d-flex justify-content-center">
                        <button id="to-contact-page" class="navigation-button">
                            <svg class="svg-inline--fa fa-address-book fa-w-14 icon" aria-hidden="true" data-prefix="far" data-icon="address-book" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M436 160c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20zm-68 304H48V48h320v416zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2z"></path></svg><!-- <span class="far fa-address-book icon"></span> -->
                        </button>
                    </div>

                    <div class="col-4 d-flex justify-content-center">
                        <button id="to-keypad-page" class="navigation-button">
                            <svg class="svg-inline--fa fa-tty fa-w-16 icon" aria-hidden="true" data-prefix="fas" data-icon="tty" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M5.37 103.822c138.532-138.532 362.936-138.326 501.262 0 6.078 6.078 7.074 15.496 2.583 22.681l-43.214 69.138a18.332 18.332 0 0 1-22.356 7.305l-86.422-34.569a18.335 18.335 0 0 1-11.434-18.846L351.741 90c-62.145-22.454-130.636-21.986-191.483 0l5.953 59.532a18.331 18.331 0 0 1-11.434 18.846l-86.423 34.568a18.334 18.334 0 0 1-22.356-7.305L2.787 126.502a18.333 18.333 0 0 1 2.583-22.68zM96 308v-40c0-6.627-5.373-12-12-12H44c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm-336 96v-40c0-6.627-5.373-12-12-12H92c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zM96 500v-40c0-6.627-5.373-12-12-12H44c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm288 0v-40c0-6.627-5.373-12-12-12H140c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h232c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12z"></path></svg><!-- <span class="fas fa-tty icon"></span> -->
                        </button>
                    </div>

                    <div class="col-4 d-flex justify-content-center">
                        <button id="to-addUser-page" class="navigation-button">
                            <svg class="svg-inline--fa fa-user-plus fa-w-20 icon" aria-hidden="true" data-prefix="fas" data-icon="user-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg><!-- <span class="fas fa-user-plus icon"></span> -->
                        </button>
                    </div>
                </div>
            </footer>
        `;
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
    }

    sortUsersByValue(key, users) {
        const sortFunction = function(value, nextValue) {
            if(value[key] > nextValue[key]) return 1;
            if(value[key] < nextValue[key]) return -1;
        }
    
        return [...users].sort(sortFunction);
    }
}

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
    }

    render() {
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
                            <div class="number-btn">1</div>
                            <div class="number-btn">2</div>
                            <div class="number-btn">3</div>
                        </div>
                        <div class="row">
                            <div class="number-btn">4</div>
                            <div class="number-btn">5</div>
                            <div class="number-btn">6</div>
                        </div>
                        <div class="row">
                            <div class="number-btn">7</div>
                            <div class="number-btn">8</div>
                            <div class="number-btn">9</div>
                        </div>
                        <div class="row">
                            <div class="number-btn">*</div>
                            <div class="number-btn">0</div>
                            <div class="number-btn">#</div>
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

    applyListenerForKeypadPage() {

        /* ADD NUMBER */
        const keypadButtons = document.getElementById('wraper-for-buttons');
        const fieldForNumber = document.getElementById('number');

        keypadButtons.addEventListener('click', (e) => {
            const TARGET_CLASS_NAME = e.target.className;

            if(TARGET_CLASS_NAME === 'number-btn') {
                const BUTTON_VALUE = e.target.textContent;
                fieldForNumber.textContent += BUTTON_VALUE;
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
                const LENGTH_OF_NUMBERS = fieldForNumber.textContent.length - 1;
                const strWithDeletedOneNumber = fieldForNumber.textContent.slice(0, LENGTH_OF_NUMBERS)
                fieldForNumber.textContent = strWithDeletedOneNumber;
                return;
            }
        });
    }
}

const APPLICATION = new App();