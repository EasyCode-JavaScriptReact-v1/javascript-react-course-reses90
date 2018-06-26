'use strict';

const myobj = {
    methodES5: function() {
        return `ES5`
    },
    methodES6() {
        return `ES6`
    },
    set length(version) {
        myobj.version = version
    },
    get length() {
        return myobj.version
    }
}

console.log(myobj.methodES5())
console.log(myobj.methodES6())

function add(a, b) {
    return a + b
}

const sumES6 = (a, b) => a + b

const sum2ES6 = (a, b) => {
    return a + b
}

console.log(add(2, 12))
console.log(sumES6(0, 6))
console.log(sum2ES6(2, 4))

const returnIyourName = (name) => `I am your ${name}`
const returnObjectWithName = (name, id, version) => {
    return {name, id, version}
}
const returnObjectWithNameV2 = (name) => ({name})

console.log(returnIyourName(`Nikita`))
console.log(returnObjectWithName(`Nikita`, 10, `0.0.1`))
console.log(returnObjectWithNameV2(`Nikita`))

const userArray = [`Name1`, `Name2`, `Name3`]

const returnObject = arr => arr.map(name => ({name}))

console.log(returnObject(userArray))


const obj = {
    name: `student`,
    id: 0,
    salary: `+500$`
}

const test = () => this

//TASK with this

let book1 = {
    name: `Learn Ruby`,
    pages: 200,
    showPages: showPages
}

let book2 = {
    name: `Be a pro in JS`,
    pages: 10,
    showPages: showPages
}

function showPages() {
    return this.pages
}

console.log(book1.showPages())
console.log(book2.showPages())