import {
    HelpfulFeaturesForElementPrototype,
    createElem
} from './helper';

import {users} from './users';

const helper = new HelpfulFeaturesForElementPrototype();

class ContactMode{
    constructor() {}

    render() {
        const contactTempalte = /*html*/`
            <div id="contact-wraper">
                ${this.contactHeaderComponent()}

                <main class="container contact-list">
                    <table class="table table-hover table-striped">
                        ${this.contactHeaderListComponent()}
                        ${this.contactListComponent(users)}
                    </table>
                </main>
            </div>
        `;

        return contactTempalte;
    }

    contactHeaderComponent(){
        return /*html*/`
            <header class="container">
                <form class="form-inline search-form row">
                    <div class="form-group">
                        <label class="sr-only" for="search">Search</label>
                        <input type="text" class="form-control" id= "search" placeholder="Search">
                    </div>
                </form>
            </header>
        `
    }

    contactHeaderListComponent() {
        return /*html*/`
            <thead>
                <tr id="wraper-for-th">
                    <th class="for-sort">Name</th>
                    <th class="for-sort">Last Name</th>
                    <th class="for-sort">Email</th>
                </tr>
            </thead>
        `
    }

    contactListComponent(arrayWithUsers) {
        const contactList = createElem('tbody');
        contactList.id = 'list-of-contacts';

        arrayWithUsers.forEach(user => {
            const userFirstName = user.firstName;
            const userLastName = user.lastName;
            const userEmail = user.email;

            contactList.innerHTML +=  /*html*/`
                <tr class="user">
                    <td> ${userFirstName} </td>
                    <td> ${userLastName} </td>
                    <td> ${userEmail} </td>
                </tr>
            `
        })

        return contactList.outerHTML;
    }

    applyListeners() {
        const titlesForContactList = document.getElementById('wraper-for-th');

        titlesForContactList.addEventListener('click', (e) => {
            const listOfContacts = document.getElementById('list-of-contacts');

            const arrayWithUsersOnCurrecntPage = [...listOfContacts.children].reduce((newArr, user) => {
                const userInfo = {
                    firstName: user.children[0].textContent.trim(),
                    lastName: user.children[1].textContent.trim(),
                    email: user.children[2].textContent.trim(),
                };
                newArr.push(userInfo);
                return newArr;
            }, []);

            if(e.target.textContent === 'Name') {
                const NAME = 'firstName';
                const sortedUsers = this.sortUsersByValue(NAME, arrayWithUsersOnCurrecntPage);
                const newContactList =  this.contactListComponent(sortedUsers);
                listOfContacts.outerHTML = newContactList;
            }

            if(e.target.textContent === 'Last Name') {
                const LAST_NAME = 'lastName';
                const sortedUsers = this.sortUsersByValue(LAST_NAME, arrayWithUsersOnCurrecntPage);
                const newContactList =  this.contactListComponent(sortedUsers);
                listOfContacts.outerHTML = newContactList;
            }

            if(e.target.textContent === 'Email') {
                const EMAIL = 'email';
                const sortedUsers = this.sortUsersByValue(EMAIL, arrayWithUsersOnCurrecntPage);
                const newContactList =  this.contactListComponent(sortedUsers);
                listOfContacts.outerHTML = newContactList;
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

export {ContactMode};
    

