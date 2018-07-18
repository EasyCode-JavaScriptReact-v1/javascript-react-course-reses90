/*
TASK 0
Проверьте что строка содержит все символы от "a" до "z"
  solution("wyyga") // false
  solution("qwertyuioplkjhgfdsazxcvbnm") // true
  solution("ejuxggfsts") // false
  solution("qpwoeirutyalskdjfhgmznxbcv") // true
  solution("qqqqqqqqpwoeirutyallskkdjfhgmmznxbcv") // true
  solution("0123456789abcdefghijklmnop") // false
*/

const solution = str => {
    const turnStrToArray = str.toLowerCase().split('');
    const uniqueLetters = new Set();
    
    turnStrToArray.forEach(letter => {
        uniqueLetters.add(letter);
    });
    
    return uniqueLetters.size === 26 ? true : false;
};

const testStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const testStr2 = 'test';

console.log(solution(testStr));
console.log(solution(testStr2));

/*
 2. Напишите функция которая преобразовывает / открывает
 скобки всех вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество
 внутренних массивов и объектов
 example:
 [[1,2],[3,[4]],5, 10] => [1, 2, 3, 4, 5, 10]
 [25, 10, [10, [15]]] => [25, 10, 10, 15]
 [1, [2, [ {a: "b", c: 'd' }, { c: [1, 2, 5] } ] ] ] => [1, 2, {a: "b"}]
 */

//#1 arr == [...] flattenedArray = [1] + flatten = [2, [{a: "b"}, { c: 'd' }]]
//#2 arr == [2, [ {a: "b"}, { c: 'd' } ] ] flattenedArray = [2] + flatten == [{a: "b"}, { c: 'd' }]
//#3 arr == [ {a: "b"}, { c: 'd' } ] flattenedArray = [{a: "b"}, { c: 'd' }]
//#
const flatten = arr => {
    return arr.reduce(function(newArray, elem) {
    return Array.isArray(elem) ? newArray.concat(flatten(elem)) : newArray.concat(elem);
  }, []);
};

console.log(flatten([[1,2],[3,[4]],5, 10]));
console.log(flatten([25, 10, [10, [15]]]));
console.log(flatten([1, [2, [ {a: "b", c: 'd' }, { c: [1, 2, 5] } ] ] ]));


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

const footerTabs = [
    'Contacts',
    'Keypad',
    'Edit contact',
    'User',
    'Add user'
];

const idOfIcons = [
    'search',
    'th',
    'pencil',
    'user',
    'plus'
];

const contactPage = {
    contactPageName: 'Contact',
    
    /* Simple fuctions for facilitate the live : START*/
    
    newElem(tagName) {
        return document.createElement(tagName);
    },
    
    setClass(target, className) {
        target.setAttribute('class', className);
    },
    
    setId(target, idName) {
        target.setAttribute('id', idName);
    },
    
    setTextContent(target, content) {
        target.textContent = content;
    },
    
    setLableFor(target, id) {
        target.setAttribute('for', id);  
    },
    
    setTypeForInput(target, kindOfTypes) {
        target.setAttribute('type', kindOfTypes);
    },
    
    setPlaceHolderForInput(target, value) {
        target.setAttribute('placeholder', value);  
    },
    
    setHrefForLink(target, value) {
        target.setAttribute('href', value);
    },
    
    setAriaHidden(target, boolean) {
          target.setAttribute('aria-hidden', boolean);
    },
    
    /* Simple fuctions for facilitate the live : END*/
    
    createHeader() {
        /*Create header element and fill it*/
        this.header = this.newElem('header');
        const div = this.newElem('div');
        const h2 = this.newElem('h2');
        
        this.setClass(this.header, 'header');
        this.setClass(div, 'container top-radius');
        
        this.setTextContent(h2, this.contactPageName);
        
        div.appendChild(h2);
        this.header.appendChild(div);
    },
    
    fillSearchForm() {
        const formGroup = this.newElem('div');
        const label = this.newElem('label');
        const input = this.newElem('input');
        
        this.setClass(formGroup, 'form-group');
        this.setClass(label, 'sr-only');
        this.setClass(input, 'form-control');
        
        this.setId(input, 'search');
        this.setTypeForInput(input, 'text');
        this.setPlaceHolderForInput(input, 'search');
        this.setLableFor(label, 'search');
        
        formGroup.appendChild(label);
        formGroup.appendChild(input);
        
        return formGroup;
    },
    
    fillTableContactList() {
        /*Create thead element and fill it*/
        const thead = this.newElem('thead');
        const trForThead = this.newElem('tr');
        
        contentForThead.forEach(contentElem => {
            const th = this.newElem('th');
            this.setTextContent(th, contentElem);
            trForThead.appendChild(th);
        });
        
        thead.appendChild(trForThead);
        
        /*Create tbody element and fill it*/
        const tbody = this.newElem('tbody');
        
        users.forEach(user => {
            const tr = this.newElem('tr');
            
            user.forEach(userInfo => {
                const name = this.newElem('td');
                const lastName = this.newElem('td');
                const email = this.newElem('td');
                
                this.setTextContent(name, userInfo.name);
                this.setTextContent(lastName, userInfo.lastName);
                this.setTextContent(email, userInfo.email);
                
                tr.appendChild(name);
                tr.appendChild(lastName);
                tr.appendChild(email);
            });
            tbody.appendChild(tr);
        });
        
        /*Append these element to table*/
        this.table.appendChild(thead);
        this.table.appendChild(tbody);
    },
    
    createMainContent() {
        this.main = this.newElem('main');
        const conteiner = this.newElem('div');
        this.setClass(conteiner, 'container');
        
        /*There is implementation of search form*/
        const searchForm = this.newElem('form');
        this.setClass(searchForm, 'form-inline search-form');
        searchForm.appendChild(this.fillSearchForm()); // fillSearchForm is above
        
        /*There is implementation of contact list (table)*/
        this.table = this.newElem('table');
        this.setClass(this.table, 'table table-hover contacts');
        this.fillTableContactList();
        
        conteiner.appendChild(searchForm);
        conteiner.appendChild(this.table);
        this.main.appendChild(conteiner);
    },
    
    fillFooter() {
        const nav = this.newElem('nav');
        this.setClass(nav, 'main-nav');
        
        footerTabs.forEach((tab, index) => {
            const link = this.newElem('a');
            const icon = this.newElem('span');
            const tabContent = this.newElem('span');
            
            this.setClass(link, 'tab');
            this.setClass(icon, `glyphicon glyphicon-${idOfIcons[index]}`);
            this.setClass(tabContent, 'tab-text');
            
            this.setHrefForLink(link, '#');
            this.setAriaHidden(icon, true);
            this.setTextContent(tabContent, tab);
            
            link.appendChild(icon);
            link.appendChild(tabContent);
            nav.appendChild(link);
        });
        
        /*Make first child active*/
        
        return nav;
    },
    
    createFooter() {
        this.footer = this.newElem('footer');
        const container = this.newElem('div');
        
        this.setClass(this.footer, 'footer');
        this.setClass(container, 'container bottom-radius');
        
        container.appendChild(this.fillFooter());
        this.footer.appendChild(container);
    },
    
    render() {
        this.createHeader();
        this.createMainContent();
        this.createFooter();
        
        document.body.appendChild(this.header);
        document.body.appendChild(this.main);
        document.body.appendChild(this.footer);
    }
}

contactPage.render();