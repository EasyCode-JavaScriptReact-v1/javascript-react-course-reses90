import {users} from './components/users';
import {MOBILE_OPERATORS_IDENTIFICATORS} from './components/mobile-operators-identifiers';

import {ContactPage} from './contact/contact';
import {KeypadPage} from './keypad/keypad';
// import {} from './add-user/add-user';

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

const APPLICATION = new App();