class UserPage{
    constructor(store) {

    }

    render() {
        return /*html*/`
            <div id="user-page">

                <header class="container">
                    <div class="row d-flex justify-content-center">
                        <span class="user-header">User page</span>
                    </div>
                </header>

                <main class="container mt-2">
                    
                    <div class="row d-flex justify-content-center">
                        <img id="user-page-avatar" src="img/avatar.jpg" alt="avatar">
                    </div>

                    <div class="row d-flex justify-content-between">
                        <p class="user-page-key">Full Name: </p>
                        <p class="user-page-value">???????????</p>
                    </div>
                    <div class="row d-flex justify-content-between">
                        <p class="user-page-key">Email: </p>
                        <p class="user-page-value">??????@??????.???</p>
                    </div>
                    <div class="row d-flex justify-content-between">
                        <p class="user-page-key">Phone number: </p>
                        <p class="user-page-value">(???) ???-??-??</p>
                    </div>
                    <div class="row d-flex justify-content-between">
                        <p class="user-page-key">Birth date: </p>
                        <p class="user-page-value">????/??/??</p>
                    </div>
                    <div class="row d-flex justify-content-between">
                        <p class="user-page-key">Address: </p>
                        <p class="user-page-value">????? ??????</p>
                    </div>
                    <div class="row d-flex justify-content-between">
                        <p class="user-page-key">Gender: </p>
                        <p class="user-page-value">?????</p>
                    </div>    

                    <div class="row d-flex justify-content-around">
                        <button type="button" class="btn btn-primary">Edit</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </div>

                </main>

            </div>
        `;
    }
}