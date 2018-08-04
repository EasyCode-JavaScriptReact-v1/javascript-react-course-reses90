const url = 'https://jsonplaceholder.typicode.com/users/';

const getUser = (userId, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            const user = JSON.parse(xhr.response);
            callback(user);
        }
    }
    xhr.open('GET', `${url}/${userId}`, true);
    xhr.send();
} 

getUser(1, user1 => {
    getUser(2, user2 => {
        getUser(3, user3 => {
            console.log(user1.id + user2.id + user3.id);
            console.log(user1.name + user2.name + user3.name);
        })
    })
})


// const myPromise = new Promise((resolve, reject) => {

// })

const users = [1, 2, 3];

const usersPromise = users.map(user => {
    return fetch(url + user).then(response => response.json());
})

Promise.all(usersPromise)
    .then(allUsers => {
        console.log(allUsers);
    })

const url2 = 'http://easycode-js.herokuapp.com/ollu/users';

fetch(url2)
    .then(data => {
        return data.json()
    })
    .then(users => console.log(users));

fetch(url2, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        fullName: 'Leon Kara',
        email: 'kara@mail.com',
        phone: '00000000'
    })
})    