class Url{
    constructor() {
        this.url = 'http://easycode-js.herokuapp.com/myba/users';
    }
    
    getUsersFromServer() {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4) {
                this.users = xhr.response
            }
        }

        xhr.open('GET', this.url, false);
        xhr.send();
    }

    obtainUsers() {
        this.getUsersFromServer();
        return this.users;
    }
}

export {Url};