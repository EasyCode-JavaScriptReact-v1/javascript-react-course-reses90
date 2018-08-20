import {Url} from '../url/url';
import {UserPage} from '../user-page/user-page';

/* ================== CONTACT START================== */

class ContactPage {
    constructor(store, accountName) {
        this.setStateContact = () => {
            const {setState} = store;
            const initializeState = {
                stateName: 'CONTACT',
                activePage: this.render(),
            };
            setState(initializeState);
        }

        this.url = new Url(accountName);
        this.userPage = new UserPage(store, accountName);
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
                            
                        </tbody>

                    </table>
                </main>
            </div>
        `;

        return contactTempalte;
    }

    contactListComponent(userList) {
        return userList.reduce((listStructure, user) => {
            const splitedFullName = user.fullName.split(' ');
            const userFirstName = splitedFullName[0];
            const userLastName = splitedFullName[1];
            const userEmail = user.email;
            const id = user._id;

            const userComponent = /*html*/`
            <tr id="${id}" class="user">
                <td> ${userFirstName} </td>
                <td> ${userLastName} </td>
                <td> ${userEmail} </td>
            </tr>
            `;

            listStructure += userComponent;
            return listStructure;
        }, ``)
    }

    renderUsers() {
        this.url.getUsersFromServer()
            .then(data => {
                return data.json()
            })
            .then(users => {
                this.users = users;
                const listStructure = this.contactListComponent(users);
                const listOfContacts = document.getElementById('list-of-contacts');
                listOfContacts.innerHTML = listStructure;
            })
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

            const listOfContacts = document.getElementById('list-of-contacts');

            if(TH_ELEM_CONTAINS === PREDICT_TEXT_CONTENT.firstName) {
                const firstName = 0;
                const sortedListByFirsName = this.mergeSort(this.users, firstName);
                listOfContacts.innerHTML = this.contactListComponent(sortedListByFirsName);
                return;
            }

            if(TH_ELEM_CONTAINS === PREDICT_TEXT_CONTENT.lastName) {
                const lastName = 1;
                const sortedListByLastName = this.mergeSort(this.users, lastName);
                listOfContacts.innerHTML = this.contactListComponent(sortedListByLastName);
                return;
            }

            if(TH_ELEM_CONTAINS === PREDICT_TEXT_CONTENT.email) {
                const sortedListByEmail = this.sortUsersByValue('email', this.users);
                listOfContacts.innerHTML = this.contactListComponent(sortedListByEmail);
                return;
            }
        })

        /* SORT USERS BY INPUTED LETTERS OF NAME */
        const contactSearchField = document.querySelector('#search');

        contactSearchField.addEventListener('input', () => {
            const VALUE = contactSearchField.value;
            const filteredUsers = this.filterUsersByInputValueByName(VALUE);
            const listOfContacts = document.getElementById('list-of-contacts');

            filteredUsers.length === 0 
                ? listOfContacts.innerHTML = /*html*/`<p>No such users</p>`
                : listOfContacts.innerHTML = this.contactListComponent(filteredUsers);

            
        });

        /* DEFINE USER */

        const listOfContacts = document.getElementById('list-of-contacts');
        const handlerForListOfContacts = (e) => {
            if(e.target.parentElement.tagName === "TR") {
                const id = e.target.parentElement.id;
                const user = this.users.filter(user => user._id === id)[0];
                this.userPage.setStateUserPage();
                const userPage = this.userPage.render(user);

                const MAIN_WRAPER = document.getElementById('main-wraper');
                MAIN_WRAPER.firstElementChild.outerHTML = userPage;
                this.userPage.applyListenersForUserPage();
            }    
        }

        listOfContacts.addEventListener('click', handlerForListOfContacts);
    }

    sortUsersByValue(key, users) {
        const sortFunction = function(value, nextValue) {
            if(value[key] > nextValue[key]) return 1;
            if(value[key] < nextValue[key]) return -1;
        }
    
        return [...users].sort(sortFunction);
    }

    mergeSort(arr, index) {

        const len = arr.length;
        if(len < 2) return arr;
        const mid = Math.floor(len / 2),
        left = arr.slice(0, mid),
        right =arr.slice(mid);

        return this.merge(this.mergeSort(left, index), this.mergeSort(right, index), index);
    }

    merge(left, right, index) {
        let result = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;
        while(l < lLen && r < rLen){
            const leftWord = left[l].fullName.split(' ')[index];
            const rightWord = right[r].fullName.split(' ')[index];
            if(leftWord < rightWord){
                result.push(left[l++]);
            }
            else{
                result.push(right[r++]);
            }
        }  
    
        return result.concat(left.slice(l)).concat(right.slice(r));
    }

    filterUsersByInputValueByName(inputValue) {
        return this.users.reduce((newUsers, user) => {
            const firstName = user.fullName.split(' ')[0].toLowerCase();

            const comparedPartOfName = firstName.slice(0, inputValue.length);

            if(inputValue.toLowerCase() === comparedPartOfName) {
                newUsers.push(user);
            }

            return newUsers;
        }, []);

    }
}

/* ================== CONTACT END================== */

export {ContactPage};