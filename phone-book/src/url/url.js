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

    postUser(user) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', this.url, true);    
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(JSON.stringify(user));
    }

    deleteUserById(id) {
        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', `${this.url}/${id}`, true);    
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send();
    }
}

export {Url};