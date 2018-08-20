import {Url} from '../url/url';

class EditUserPage {
    constructor(store, accountName) {
        this.setStateEditUser = () => {
            const {setState} = store;
            const initializeState = {
                stateName: 'EDIT USER',
            };
            setState(initializeState);
        }

        this.url = new Url(accountName);
    }

    render(user) {
        this.user = user;

        return /*html*/`
            <div id="add-user-page">

                <header class="container">
                    <div class="row d-flex justify-content-center">
                        <span class="add-user-header">Edit user ${user.fullName}</span>
                    </div>
                </header>

                <main class="container add-user-block">
                    <form>

                        <div class="form-group">
                            <label for="fullName-input">Full name:</label>
                            <input type="text" name="fullName" class="form-control" id="fullName-input" placeholder="Enter full name">
                        </div>

                        <div class="form-group">
                            <label for="email-input">Email address:</label>
                            <input type="email" name="email" class="form-control" id="email-input" placeholder="Enter email">
                        </div>

                        <div class="form-group">
                            <label for="phoneNumber-input">Phone Number:</label>
                            <input type="number" name="phone" class="form-control" id="phoneNumber-input" placeholder="Enter phone number">
                            <small class="form-text text-muted">Length of your phone number should be more than 9</small>
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
                            <button type="submit" class="btn btn-primary">Edit this user</button> 
                        </div>
                        
                    </form>
                </main>

            </div>
        `;
    }

    applyListenersForEditUserPage() {

        const editUserForm = document.querySelector('form');

        const handlerForInputs = (e) => {
            if(e.target.name === 'fullName') {
                const VALUE = e.target.value;

                if(VALUE.length === 0) {
                    e.target.classList.remove('wrong')
                    e.target.classList.remove('correct')
                    return;
                }
        
                if(this.isValidFullName(VALUE)) {
                    e.target.classList.add('correct')
                    e.target.classList.remove('wrong')
                } else {
                    e.target.classList.add('wrong')
                    e.target.classList.remove('correct')
                }
                    
            }

            if(e.target.name === 'email') {
                const VALUE = e.target.value;

                if(VALUE.length === 0) {
                    e.target.classList.remove('wrong')
                    e.target.classList.remove('correct')
                    return;
                }

                if(this.isValidEmail(VALUE)) {
                    e.target.classList.add('correct')
                    e.target.classList.remove('wrong')
                } else {
                    e.target.classList.add('wrong')
                    e.target.classList.remove('correct')
                }
            }

            if(e.target.name === 'phone') {
                const VALUE = e.target.value;

                if(VALUE.length === 0) {
                    e.target.classList.remove('wrong')
                    e.target.classList.remove('correct')
                    return;
                }

                if(VALUE.length > 9) {
                    e.target.classList.add('correct')
                    e.target.classList.remove('wrong')
                } else {
                    e.target.classList.add('wrong')
                    e.target.classList.remove('correct')
                }
            }

            if(e.target.name === 'birthdate') {
                const VALUE = e.target.value;

                if(VALUE.length === 0) {
                    e.target.classList.remove('correct')
                    return;
                }

                if(VALUE.length > 9) {
                    e.target.classList.add('correct')
                }
            }

            if(e.target.name === 'address') {
                const VALUE = e.target.value;

                if(VALUE.length === 0) {
                    e.target.classList.remove('correct')
                    return;
                }

                if(VALUE.length > 0) {
                    e.target.classList.add('correct')
                }
            }

            if(e.target.name === "avatarUrl") {
                const VALUE = e.target.value;

                if(VALUE.length === 0) {
                    e.target.classList.remove('wrong')
                    e.target.classList.remove('correct')
                    return;
                }

                if(this.isValidURL(VALUE)) {
                    e.target.classList.add('correct')
                    e.target.classList.remove('wrong')
                } else {
                    e.target.classList.add('wrong')
                    e.target.classList.remove('correct')
                }
            }
            
        };

        editUserForm.addEventListener('input', handlerForInputs);
        const inputs = [...editUserForm.elements]
                            .filter(elem => elem.tagName === 'INPUT' || elem.tagName === 'SELECT');

        const handlerForSubmit = (e) => {
            e.preventDefault();

            const infoToEdit = inputs.reduce((editedUser, input) => {
                if(input.classList.contains('wrong')) {
                    alert(`${input.name} is incorrect!`);
                    return;
                };
                if(input.value.length !== 0 
                    && input.name !== 'phone' 
                    && input.name !== 'gender'
                    && input.name !== 'fullName'
                ) {
                    editedUser[input.name] = input.value;
                }
                if(input.value.length !== 0 && input.name === 'phone') {
                    editedUser[input.name] = input.value.replace(/(.{3})(.{3})(.{2})/g, '($1) $2-$3-');
                }
                if(input.name === 'gender') {
                    input.value === "Male"
                        ? editedUser[input.name] = "M"
                        : editedUser[input.name] = "F"
                }
                if(input.value.length !== 0 && input.name === 'fullName') {
                    const formatedFullName = input.value.split(' ').reduce((output, word, index) => {
                        const splitedWord = word.toLowerCase().split('');
                        const firstLetter = splitedWord[0].toUpperCase();
                        splitedWord[0] = firstLetter;
                        output += splitedWord.join('');

                        if(index === 0) {
                            output += ' ';
                        }

                        return output;
                    }, '');

                    editedUser[input.name] = formatedFullName;
                }
                return editedUser;
            }, {});

            if(infoToEdit) {
                this.url.editUser(infoToEdit, this.user._id);

                inputs.forEach(input => {
                    if(input.tagName !== "SELECT") {
                        input.value = "";
                        input.classList.remove('correct');
                    }
                });
            } else {
                alert('Something is incorrect!');
            }
            
        }

        editUserForm.addEventListener('submit', handlerForSubmit);
    }

    isValidFullName(value) {
        const splitedValue = value.split(' ');

        return splitedValue.length === 2 && splitedValue[0].length > 0 && splitedValue[1].length > 0;
    }

    isValidEmail(value) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(value).toLowerCase());  
    }

    isValidURL(value) {
        const re = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return re.test(String(value).toLowerCase());
    }

}

export {EditUserPage};