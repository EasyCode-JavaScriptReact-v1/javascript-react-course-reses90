import {Url} from '../url/url';

class AddUserPage {
    constructor(store) {
        this.setStateContact = () => {
            const {setState} = store;
            const initializeState = {
                stateName: 'ADD USER',
                activePage: this.render(),
            };
            setState(initializeState);
        }

        this.serverSide = new Url();
    }

    render() {
        return /*html*/`
            <div id="add-user-page">

                <header class="container">
                    <div class="row d-flex justify-content-center">
                        <span class="add-user-header">Add new user</span>
                    </div>
                </header>

                <main class="container add-user-block">
                    <form>

                        <div class="form-group">
                            <label for="fullName-input">Full name:</label>
                            <input type="text" name="fullName" class="form-control" id="fullName-input" placeholder="Enter full name" required>
                        </div>

                        <div class="form-group">
                            <label for="email-input">Email address:</label>
                            <input type="email" name="email" class="form-control" id="email-input" placeholder="Enter email" required>
                        </div>

                        <div class="form-group">
                            <label for="phoneNumber-input">Phone Number:</label>
                            <input type="number" name="phone" class="form-control" id="phoneNumber-input" placeholder="Enter phone number" required>
                        </div>

                        <div class="form-group">
                            <label for="birthDate-input">Birth date:</label>
                            <input type="date" name="birthdate" class="form-control" id="birthDate-input">
                        </div>

                        <div class="form-group">
                            <label for="address-input">Address:</label>
                            <input type="text" name="address" class="form-control" id="address-input" placeholder="Enter address">
                        </div>

                        <div class="form-group">
                            <label for="gender-selection">Gender:</label>
                            <select name="gender" class="form-control" id="gender-selection">
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                                
                        <div class="form-group">
                            <label for="avatarUrl-input">Avatar url:</label>
                            <input type="text" name="avatarUrl" class="form-control" id="avatarUrl-input" aria-describedby="avatarHelp" placeholder="Enter avatar url">
                            <small id="avatarHelp" class="form-text text-muted">ex: https://cloud-drive/photo123456.</small>
                        </div>

                        <div class="row d-flex justify-content-center">
                            <button type="submit" class="btn btn-primary">Add user</button> 
                        </div>
                        
                    </form>
                </main>

            </div>
        `;
    }

    applyListenersForAddUserPage() {
        // const fullNameInput = document.querySelector('#fullName-input');
        // const emailInput = document.querySelector('#email-input');
        // const phoneNumberInput = document.querySelector('#phoneNumber-input');
        // const birthDateInput = document.querySelector('#birthDate-input');
        // const addressInput = document.querySelector('#address-input');
        // const genderInput = document.querySelector('#gender-selection');
        // const avatarUrlInput = document.querySelector('#avatarUrl-input');

        const addUserForm = document.querySelector('form');
        const inputs = [...addUserForm.elements]
                            .filter(elem => elem.tagName === 'INPUT' || elem.tagName === 'SELECT');

        addUserForm.addEventListener('submit', (e) => {

            const user = inputs.reduce((newUser, input) => {
                const KEY = input.name;
                const VALUE = input.value;

                if(VALUE.lenght !== 0) {
                    newUser[KEY] = VALUE;
                }
                if(VALUE === 'Male' || VALUE === 'Female') {
                    const firstChar = input.value[0];
                    newUser[KEY] = firstChar;
                }
                return newUser;
            }, {});
            
            this.serverSide.postUser(user);
        })
    }

    isValid() {

    }
}

export {AddUserPage};
