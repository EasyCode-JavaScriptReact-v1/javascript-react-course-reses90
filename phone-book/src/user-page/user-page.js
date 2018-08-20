import {EditUserPage} from '../edit-user-page/edit-user-page';
import {Url} from '../url/url';

class UserPage{
    constructor(store, accountName) {
        this.setStateUserPage = () => {
            const {setState} = store;
            const initializeState = {
                stateName: 'USER_PAGE',
            };
            setState(initializeState);
        }

        this.editUserPage = new EditUserPage(store, accountName);
        this.url = new Url(accountName);
    }

    render(user) {
        this.user = user;

        return /*html*/`
            <div id="user-page">

                <header class="container">
                    <div class="row d-flex justify-content-center">
                        <span class="user-header">User page</span>
                    </div>
                </header>

                <main id="user-info" class="container mt-2">
                    
                    <div class="row d-flex justify-content-center">
                        <img id="user-page-avatar" src="${!user.avatarUrl ? 'https://steamuserimages-a.akamaihd.net/ugc/504697773361488218/90CC7E33B932155252A6C15117A3AB8031B3FE36/' : user.avatarUrl}" alt="avatar">
                    </div>

                    <div class="row d-flex justify-content-between">
                        <p class="user-page-key">Full Name: </p>
                        <p class="user-page-value">${user.fullName}</p>
                    </div>
                    <div class="row d-flex justify-content-between">
                        <p class="user-page-key">Email: </p>
                        <p class="user-page-value">${user.email}</p>
                    </div>
                    <div class="row d-flex justify-content-between">
                        <p class="user-page-key">Phone number: </p>
                        <p class="user-page-value">${user.phone}</p>
                    </div>
                    <div class="row d-flex justify-content-between">
                        <p class="user-page-key">Birth date: </p>
                        <p class="user-page-value">${user.birthdate ? user.birthdate.slice(0, 10) : '__________'}</p>
                    </div>
                    <div class="row d-flex justify-content-between">
                        <p class="user-page-key">Address: </p>
                        <p class="user-page-value">${user.address ? user.address : '__________'}</p>
                    </div>
                    <div class="row d-flex justify-content-between">
                        <p class="user-page-key">Gender: </p>
                        <p class="user-page-value">${user.gender === "M" ? 'Male' : 'Female'}</p>
                    </div>    

                    <div id="usp-wraper-for-btns" class="row d-flex justify-content-around">
                        <button type="button" class="btn btn-primary">Edit</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </div>

                </main>

            </div>
        `;
    }

    applyListenersForUserPage() {
        const wraperForButtons = document.getElementById('usp-wraper-for-btns');

        const handlerForButtons = (e) => {
            if(e.target.textContent.trim() === 'Edit') {
                this.editUserPage.setStateEditUser();
                const EDIT_USER_PAGE = this.editUserPage.render(this.user);

                const MAIN_WRAPER = document.getElementById('main-wraper');
                MAIN_WRAPER.firstElementChild.outerHTML = EDIT_USER_PAGE;
                this.editUserPage.applyListenersForEditUserPage()
            }

            if(e.target.textContent.trim() === 'Delete') {
                const requestForDelete = confirm('Are you sure?');
                if(requestForDelete) {
                    this.url.deleteUserById(this.user._id);

                    const USER_PAGE = document.getElementById('user-info');
                    USER_PAGE.innerHTML = /*html*/`<h1 class="respond-after-delete">This user was deleted</h1>`;
                }
            }
        };

        wraperForButtons.addEventListener('click', handlerForButtons)
    }
}

export {UserPage};