class Url{
    constructor(accountName) {
        this.url = `https://easycode-js.herokuapp.com/${accountName}/users`;
    }
    
    getUsersFromServer() {
        return fetch(this.url)
    }

    postUser(user) {
        fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })    
    }

    editUser(infoToEdit,  id) {
        fetch(this.url + '/' + id, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(infoToEdit)
        })    
    }

    deleteUserById(id) {
        fetch(this.url + '/' + id, {
            method: 'DELETE'
        })
    }
}

export {Url};