const btn = document.querySelector('button');
const add = document.querySelector('.add');
const test = document.querySelector('#test');

const url = 'http://easycode-js.herokuapp.com/qwerty12341';

const serverRequest = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            test.innerHTML += xhr.responseText + '\n';
        }
    }

    xhr.open('GET', url, true);
    xhr.send();
}

btn.addEventListener('click', () => {
    serverRequest();
})

const serverAddUser = (usreProps) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            test.innerHTML += xhr.responseText + '\n';
        }
    }

    xhr.open('POST', `${url}/users`, true);    
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(usreProps));
}

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = [...form.elements].filter(elem => elem.tagName === "INPUT");
    let passedValid = true;
    const user = {};

    inputs.forEach(input => {
        if(!input.value) {
            passedValid = false;
            alert(`404 ${input.name}`)
            return;
        }

        user[input.name] = input.value;
    })

    if(passedValid) {serverAddUser(user);}
   
})