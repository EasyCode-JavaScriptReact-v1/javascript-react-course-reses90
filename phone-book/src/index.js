import {
    HelpfulFeaturesForElementPrototype,
    createElem
} from './modules/helper';

import {ContactMode} from './modules/contact';
import {FooterNavigationBar} from './modules/footer';
import {KeypadMode} from './modules/keypad';

const helper = new HelpfulFeaturesForElementPrototype();

const contactPage = new ContactMode();

const footer = new FooterNavigationBar();

const keypad = new KeypadMode();

class App{
    constructor() {}

    render(page) {
        const appTemplate = /*html*/`
            <div id="main-wraper" class="contact-block">
                ${page}
                ${footer.render()}
            </div>
        `;
        const mountMode = document.getElementById('mountMode');
        mountMode.innerHTML = appTemplate;
    }
}

const phoneBookApp = new App();
phoneBookApp.render(contactPage.render());

footer.applyListeners();
contactPage.applyListeners();

