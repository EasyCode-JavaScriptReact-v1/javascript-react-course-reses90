import {AuthorizationPage} from './authorization-page/authorization-page';
import {ContactPage} from './contact/contact';
import {KeypadPage} from './keypad/keypad';
import {AddUserPage} from './add-user/add-user';

class App {
    constructor() {
        this.store = this.createStore();
        this.authorizationPage = new AuthorizationPage();
        this.renderAuthorizationPage();
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
            this.pages.contacts.renderUsers();
            this.pages.contacts.applyListenerForContactPage();
            return;
        }

        if(action.type === 'MOVE_TO_ADD_USER_PAGE') {
            this.pages.addUser.setStateContact();
            switchBetweenPages();
            this.pages.addUser.applyListenersForAddUserPage();
            return;
        }

    }

    renderAuthorizationPage() {
        const authorizationPage = this.authorizationPage.render();
        const mountMode = document.getElementById('mountMode');
        mountMode.innerHTML = authorizationPage;
        this.applyListenerForAuthorizationPage();
    }

    applyListenerForAuthorizationPage() {
        const input = document.querySelector('.au-input');
        const logInButton = document.getElementById('log-in');
        const switchBetweenPages = () => {
                this.accountName = input.value;

                this.pages = {
                    'contacts': new ContactPage(this.store, this.accountName),
                    'keypad': new KeypadPage(this.store, this.accountName),
                    'addUser': new AddUserPage(this.store, this.accountName),
                    'footer': new FooterNavigationBar()
                }
                
                this.pages.contacts.setStateContact();
                this.render();
                this.pages.contacts.applyListenerForContactPage();
                this.applyListenerForNavigation();
        }

        const handlerForLogInBtn = () => {
            if(input.value.length > 3) {
                switchBetweenPages();
            } else {
                alert('So short login');
            }   
        };

        const handlerForLogInInput = (e) => {
            if(e.keyCode === 13) {
                if(input.value.length > 3) {
                    switchBetweenPages();
                } else {
                    alert('So short login');
                }  
            }     
        };

        logInButton.addEventListener('click', handlerForLogInBtn);
        input.addEventListener('keydown', handlerForLogInInput);
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

        this.pages.contacts.renderUsers();
    }

    applyListenerForNavigation() {

        const _MOVE_TO_KEYPAD_PAGE = {
            type: 'MOVE_TO_KEYPAD_PAGE'
        }

        const _MOVE_TO_CONTACT_PAGE = {
            type: 'MOVE_TO_CONTACT_PAGE'
        }

        const _MOVE_TO_ADD_USER_PAGE = {
            type: 'MOVE_TO_ADD_USER_PAGE'
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

            if(
                BUTTON_ID === 'to-addUser-page' 
                || BUTTON_ID_FROM_SVG === 'to-addUser-page' 
                || BUTTON_ID_FROM_PATH === 'to-addUser-page'
            ) {

                if(currentState.stateName !== 'ADD USER') {
                    this.pages.addUser.setStateContact();
                    return this.reducer(_MOVE_TO_ADD_USER_PAGE);
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