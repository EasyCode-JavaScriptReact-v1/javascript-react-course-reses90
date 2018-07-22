class Url{
    constructor() {
        this.url = 'http://easycode-js.herokuapp.com/myba/users';
    }
    
    getUsersFromServer() {
       return (async () => {
           const data = await fetch(this.url);
           return this.users = await data.json();
       })();
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