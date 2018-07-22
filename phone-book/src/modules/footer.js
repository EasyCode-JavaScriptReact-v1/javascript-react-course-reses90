import {
    HelpfulFeaturesForElementPrototype,
    createElem
} from './helper';

import {ContactMode} from './contact';
import {KeypadMode} from './keypad';

const helper = new HelpfulFeaturesForElementPrototype();

const contactPage = new ContactMode();
const keypad = new KeypadMode();

const navigationIcons = [
    'far fa-address-book icon',
    'fas fa-tty icon',
    'fas fa-user-plus icon'
];

const identificatorForIcons = [
    'to-contact-page',
    'to-keypad-page',
    'to-addUser-page',
]

const generateIcon = (className, id) => {
    return /*html*/`
        <div class="col-4 d-flex justify-content-center">
            <button id="${id}" class="navigation-button">
                <span class="${className}"></span>
            </button>
        </div>
    `;
}

class FooterNavigationBar{
    constructor() {}

    render() {
        const footerTemplate = /*html*/`
            <footer class="container">
               ${this.navigationPanelComponent()}
            </footer>
        `;

        return footerTemplate;
    }

    navigationPanelComponent() {
        this.navPanel = createElem('div');
        this.navPanel.addClass('row');
        this.navPanel.addClass('navigation-panel');
        this.navPanel.id = 'wraper-for-footer';

        const contactIcon = generateIcon(navigationIcons[0], identificatorForIcons[0]);
        const keypadIcon = generateIcon(navigationIcons[1], identificatorForIcons[1]);
        const addUserIcon = generateIcon(navigationIcons[2], identificatorForIcons[2]);

        this.navPanel.innerHTML = contactIcon + keypadIcon + addUserIcon;

        return this.navPanel.outerHTML;
    }

    applyListeners() {
        const wraperForFooter = document.getElementById('wraper-for-footer');
        wraperForFooter.addEventListener('click', (e) => {

            if(document.getElementById('keypad-wraper') !== null) {
                const currentPage = document.getElementById('keypad-wraper');

                if(e.target.parentElement.id === 'to-contact-page') {
                    const pageToReplace = contactPage.render();
                    const mainWraper = document.getElementById('main-wraper');
                    mainWraper.firstChild.nextElementSibling.innerHTML = pageToReplace;
                    contactPage.applyListeners();
                }

                if(e.target.parentElement.id === 'to-addUser-page') {
                    
                }

                if(e.target.id === 'to-contact-page') {
                    const pageToReplace = contactPage.render();
                    const mainWraper = document.getElementById('main-wraper');
                    mainWraper.firstChild.nextElementSibling.innerHTML = pageToReplace;
                    contactPage.applyListeners();
                }

                if(e.target.id === 'to-addUser-page') {
                    
                }
            }

            if(document.getElementById('contact-wraper') !== null) {
                const currentPage = document.getElementById('contact-wraper');

                if(e.target.parentElement.id === 'to-keypad-page') {
                    const pageToReplace = keypad.render();
                    const mainWraper = document.getElementById('main-wraper');
                    mainWraper.firstChild.nextElementSibling.innerHTML = pageToReplace;
                }

                if(e.target.parentElement.id === 'to-addUser-page') {
                    
                }

                if(e.target.id === 'to-keypad-page') {
                    const pageToReplace = keypad.render();
                    const mainWraper = document.getElementById('main-wraper');
                    mainWraper.firstChild.nextElementSibling.innerHTML = pageToReplace;
                }

                if(e.target.id === 'to-addUser-page') {
                    
                }
            }

        })
    }

}

export {FooterNavigationBar};