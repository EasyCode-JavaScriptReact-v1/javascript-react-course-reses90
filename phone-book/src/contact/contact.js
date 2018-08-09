import {users} from '../components/users';

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
            const splitedFullName = user.fullName.split(' ');
            const userFirstName = splitedFullName[0];
            const userLastName = splitedFullName[1];
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

export {ContactPage};