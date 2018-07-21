
/*
Виртуализировать таблицу, сделать рендер всей
таблицы через JavaScript.
Второй макет.
https://github.com/aleksandra-maslennikova/telephone-book/blob/master/index.html
Выглядеть должно так же: https://aleksandra-maslennikova.github.io/telephone-book/index.html
*/

const contentForThead = ['Name', 'Last Name', 'Email'];

const users = [
    [
        {
            name: 'Ivan',
            lastName: 'Ivanov',
            email: 'ivan-ivanov@vkontakte.com'
        }
    ],
    [
        {
            name: 'Ivan',
            lastName: 'Ivanov',
            email: 'ivan-ivanov@vkontakte.com'
        }
    ],
    [
        {
            name: 'Ivan',
            lastName: 'Ivanov',
            email: 'ivan-ivanov@vkontakte.com'
        }
    ],
    [
        {
            name: 'Ivan',
            lastName: 'Ivanov',
            email: 'ivan-ivanov@vkontakte.com'
        }
    ],
    [
        {
            name: 'Ivan',
            lastName: 'Ivanov',
            email: 'ivan-ivanov@vkontakte.com'
        }
    ],
    [
        {
            name: 'Ivan',
            lastName: 'Ivanov',
            email: 'ivan-ivanov@vkontakte.com'
        }
    ],
    [
        {
            name: 'Ivan',
            lastName: 'Ivanov',
            email: 'ivan-ivanov@vkontakte.com'
        }
    ],
    [
        {
            name: 'Ivan',
            lastName: 'Ivanov',
            email: 'ivan-ivanov@vkontakte.com'
        }
    ],
    [
        {
            name: 'Ivan',
            lastName: 'Ivanov',
            email: 'ivan-ivanov@vkontakte.com'
        }
    ],
    [
        {
            name: 'Ivan',
            lastName: 'Ivanov',
            email: 'ivan-ivanov@vkontakte.com'
        }
    ],
    [
        {
            name: 'Ivan',
            lastName: 'Ivanov',
            email: 'ivan-ivanov@vkontakte.com'
        }
    ],
    [
        {
            name: 'Ivan',
            lastName: 'Ivanov',
            email: 'ivan-ivanov@vkontakte.com'
        }
    ],
    [
        {
            name: 'Ivan',
            lastName: 'Ivanov',
            email: 'ivan-ivanov@vkontakte.com'
        }
    ],
    [
        {
            name: 'Ivan',
            lastName: 'Ivanov',
            email: 'ivan-ivanov@vkontakte.com'
        }
    ],
    [
        {
            name: 'Ivan',
            lastName: 'Ivanov',
            email: 'ivan-ivanov@vkontakte.com'
        }
    ],
    [
        {
            name: 'Ivan',
            lastName: 'Ivanov',
            email: 'ivan-ivanov@vkontakte.com'
        }
    ],
    
    
];

class HelpfulFunctionsForContactPage{
    constructor() {};
    
    newElem(tagName) {
        return document.createElement(tagName);
    };
    
    setClass(target, className) {
        target.setAttribute('class', className);
    };
    
    setSimilarClassForManyTargets(arrayOfTargets, className) {
        arrayOfTargets.forEach(target => {
            target.setAttribute('class', className);
        });
    };
    
    setAnySimilarAttributeForManyTargets(arrayOfTargets, attributeName, value) {
        arrayOfTargets.forEach(target => {
            target.setAttribute(attributeName, value);
        });
    };
    
    setId(target, idName) {
        target.setAttribute('id', idName);
    };
    
    setTextContent(target, content) {
        target.textContent = content;
    };
    
    setLableFor(target, id) {
        target.setAttribute('for', id);  
    };
    
    setTypeForInput(target, kindOfTypes) {
        target.setAttribute('type', kindOfTypes);
    };
    
    setPlaceHolderForInput(target, value) {
        target.setAttribute('placeholder', value);  
    };
    
    setHrefForLink(target, value) {
        target.setAttribute('href', value);
    };
    
    setAriaHidden(target, boolean) {
          target.setAttribute('aria-hidden', boolean);
    };
    
    appendManyChildrenToManyParents(arrayWithParentsAndWithChildren) {
        arrayWithParentsAndWithChildren.forEach(family => {
            const parent = family[0];
            const children = family[1];
            children.forEach(child => {
               parent.appendChild(child);
            }); 
        });
    };
};

class ContactPage{
    constructor() {
        this.contactPageName = 'Contact';
        /*Simple fuctions for facilitate the live*/
        this.helpfulFunctions = new HelpfulFunctionsForContactPage();
    };
    
    createHeader() {
        /*Create header element and fill it*/
        this.header = this.helpfulFunctions.newElem('header');
        const div = this.helpfulFunctions.newElem('div');
        const h2 = this.helpfulFunctions.newElem('h2');
    
        this.helpfulFunctions.setClass(this.header, 'header');
        this.helpfulFunctions.setClass(div, 'container top-radius');
        
        this.helpfulFunctions.setTextContent(h2, this.contactPageName);
        
        div.appendChild(h2);
        this.header.appendChild(div);
        document.body.appendChild(this.header);
    };
    
    fillSearchForm() {
        const formGroup = this.helpfulFunctions.newElem('div');
        const label = this.helpfulFunctions.newElem('label');
        const input = this.helpfulFunctions.newElem('input');
        
        this.helpfulFunctions.setClass(formGroup, 'form-group');
        this.helpfulFunctions.setClass(label, 'sr-only');
        this.helpfulFunctions.setClass(input, 'form-control');
        
        this.helpfulFunctions.setId(input, 'search');
        this.helpfulFunctions.setTypeForInput(input, 'text');
        this.helpfulFunctions.setPlaceHolderForInput(input, 'search');
        this.helpfulFunctions.setLableFor(label, 'search');
        
        formGroup.appendChild(label);
        formGroup.appendChild(input);
        
        return formGroup;
    };
    
    fillTableContactList() {
        /*Create thead element and fill it*/
        const thead = this.helpfulFunctions.newElem('thead');
        const trForThead = this.helpfulFunctions.newElem('tr');
        
        contentForThead.forEach(contentElem => {
            const th = this.helpfulFunctions.newElem('th');
            this.helpfulFunctions.setTextContent(th, contentElem);
            trForThead.appendChild(th);
        });
        
        thead.appendChild(trForThead);
        
        /*Create tbody element and fill it*/
        const tbody = this.helpfulFunctions.newElem('tbody');
        
        users.forEach(user => {
            const tr = this.helpfulFunctions.newElem('tr');
            
            user.forEach(userInfo => {
                const name = this.helpfulFunctions.newElem('td');
                const lastName = this.helpfulFunctions.newElem('td');
                const email = this.helpfulFunctions.newElem('td');
                
                this.helpfulFunctions.setTextContent(name, userInfo.name);
                this.helpfulFunctions.setTextContent(lastName, userInfo.lastName);
                this.helpfulFunctions.setTextContent(email, userInfo.email);
                
                tr.appendChild(name);
                tr.appendChild(lastName);
                tr.appendChild(email);
            });
            tbody.appendChild(tr);
        });
        
        /*Append these element to table*/
        this.table.appendChild(thead);
        this.table.appendChild(tbody);
    };
    
    createMainContent() {
        this.main = this.helpfulFunctions.newElem('main');
        const conteiner = this.helpfulFunctions.newElem('div');
        this.helpfulFunctions.setClass(conteiner, 'container');
        
        /*There is implementation of search form*/
        const searchForm = this.helpfulFunctions.newElem('form');
        this.helpfulFunctions.setClass(searchForm, 'form-inline search-form');
        searchForm.appendChild(this.fillSearchForm()); // fillSearchForm is above
        
        /*There is implementation of contact list (table)*/
        this.table = this.helpfulFunctions.newElem('table');
        this.helpfulFunctions.setClass(this.table, 'table table-hover contacts');
        this.fillTableContactList();
        
        conteiner.appendChild(searchForm);
        conteiner.appendChild(this.table);
        this.main.appendChild(conteiner);
        document.body.appendChild(this.main);
    };
    
    fillFooter() {
        const nav = this.helpfulFunctions.newElem('nav');
        this.helpfulFunctions.setClass(nav, 'main-nav');
        
        const linkForContact = this.helpfulFunctions.newElem('a');
        const linkForKeypad = this.helpfulFunctions.newElem('a');
        const linkForEditContact = this.helpfulFunctions.newElem('a');
        const linkForUser = this.helpfulFunctions.newElem('a');
        const linkForAddUser = this.helpfulFunctions.newElem('a');
        
        const iconForContact = this.helpfulFunctions.newElem('span');
        const iconForKeypad = this.helpfulFunctions.newElem('span');
        const iconForEditContact = this.helpfulFunctions.newElem('span');
        const iconForUser = this.helpfulFunctions.newElem('span');
        const iconForAddUser = this.helpfulFunctions.newElem('span');
        
        const tabContentForContact = this.helpfulFunctions.newElem('span');
        const tabContentForKeypad = this.helpfulFunctions.newElem('span');
        const tabContentForEditContact = this.helpfulFunctions.newElem('span');
        const tabContentForUser = this.helpfulFunctions.newElem('span');
        const tabContentForAddUser = this.helpfulFunctions.newElem('span');
        
        /*Set similar class for elements*/
        this.helpfulFunctions.setSimilarClassForManyTargets([
            linkForContact,
            linkForKeypad,
            linkForEditContact,
            linkForUser,
            linkForAddUser
        ] ,'tab');
        
        this.helpfulFunctions.setSimilarClassForManyTargets([
            tabContentForContact,
            tabContentForKeypad,
            tabContentForEditContact,
            tabContentForUser,
            tabContentForAddUser
        ] ,'tab-text');
        
        /*Set similar attribute aria-hidden for icons*/
        this.helpfulFunctions.setAnySimilarAttributeForManyTargets([
            iconForContact,
            iconForKeypad,
            iconForEditContact,
            iconForUser,
            iconForAddUser
        ], 'aria-hidden', true);
        
        /*Set unique class for icons*/
        this.helpfulFunctions.setClass(iconForContact, 'glyphicon glyphicon-search');
        this.helpfulFunctions.setClass(iconForKeypad, 'glyphicon glyphicon-th');
        this.helpfulFunctions.setClass(iconForEditContact, 'glyphicon glyphicon-pencil');
        this.helpfulFunctions.setClass(iconForUser, 'glyphicon glyphicon-user');
        this.helpfulFunctions.setClass(iconForAddUser, 'glyphicon glyphicon-plus');

        /*Set textContent for tabContent*/
        this.helpfulFunctions.setTextContent(tabContentForContact, 'Contacts');
        this.helpfulFunctions.setTextContent(tabContentForKeypad, 'Keypad');
        this.helpfulFunctions.setTextContent(tabContentForEditContact, 'Edit contact');
        this.helpfulFunctions.setTextContent(tabContentForUser, 'User');
        this.helpfulFunctions.setTextContent(tabContentForAddUser, 'Add user');
        
        /*Append many children for many parents*/
        this.helpfulFunctions.appendManyChildrenToManyParents([
            [
                linkForContact,
                [
                    iconForContact,
                    tabContentForContact
                ]
            ],
            [
                linkForKeypad,
                [
                    iconForKeypad,
                    tabContentForKeypad
                ]
            ],
            [
                linkForEditContact,
                [
                    iconForEditContact,
                    tabContentForEditContact
                ]
            ],
            [
                linkForUser,
                [
                    iconForUser,
                    tabContentForUser
                ]
            ],
            [
                linkForAddUser,
                [
                    iconForAddUser,
                    tabContentForAddUser
                ]
            ],
            [
                nav,
                [
                    linkForContact,
                    linkForKeypad,
                    linkForEditContact,
                    linkForUser,
                    linkForAddUser
                ]
            ]
        ]);
        
        return nav;
    };
    
    createFooter() {
        this.footer = this.helpfulFunctions.newElem('footer');
        const container = this.helpfulFunctions.newElem('div');
        
        this.helpfulFunctions.setClass(this.footer, 'footer');
        this.helpfulFunctions.setClass(container, 'container bottom-radius');
        
        container.appendChild(this.fillFooter());
        this.footer.appendChild(container);
        document.body.appendChild(this.footer);
    };
    
    render() {
        this.createHeader();
        this.createMainContent();
        this.createFooter();
    }  
};

const test = new ContactPage();
test.render();