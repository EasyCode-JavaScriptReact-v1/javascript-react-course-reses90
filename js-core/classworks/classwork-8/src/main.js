function checkActionType(action) {
    switch(action.type){
        case(`INITIALIZE`):
            return {initialized: true};
        case(`INCREMENT`):
            return {salary: `+500$`};
        case(`DECREMENT`):
            return {salary: `-500$`};
    }
}

console.log(checkActionType({type: `INITIALIZE`}));
console.log(checkActionType({type: `INCREMENT`}));
console.log(checkActionType({type: `DECREMENT`}));

// TASK 1

function sumArguments() {
    const argumentsTheFunc = [...arguments];
    const sum = argumentsTheFunc.reduce(function(newValue, value) {
        return newValue + value;
    }, 0)
    return sum;
}

function sumArguments2() {
    let zero = 0;
    for(let i = 0; i < arguments.length; i++) {
        zero += arguments[i];
    }
    return zero;
}
console.log(sumArguments2(12, 13, 14));

console.log(sumArguments(10, 12, 12, 12, 12, 23, 23, 44));
console.log(sumArguments(10, 12));

console.log(sumArguments(10, 12, 12, 12, 12, 23, 23, 44, 12, 32, 43, 32));

// TASK 2

const user = {
    id: 10,
    city: `Tailand`,
    email: `example@example.com`,
    cars: {
        id: 20,
        names: [`bmw`, `VAZ`, `mercedes`, `AUDI`],
        venders: {
            id: 30,
            adreses: [`google`, `yahoo`],
        }
    },
};

function copyObject(obj) {
//    for(let key in obj) {
//        newObj[key] = obj[key];
//    }
//    newObj.city = `Kharkiv`;
    /* version 1 */
//    return Object.assign({}, obj, {cars: [...obj.cars]});
    /* version 2 */ 
    const newObj = {
        ...obj,
        cars:{
            ...obj.cars,
            names: [...obj.cars.names],
            venders: {
                ...obj.cars.venders,
                adreses: [...obj.cars.venders.adreses],
             }},
                   };
    return newObj;
}

const newUser = copyObject(user);
newUser.cars.names.push(`Juguli`);
newUser.cars.venders.adreses.push(`mAIL.rU`);
console.log(newUser);
console.log(user);

console.log(sumArguments(10, 12, 12, 12, 12, 23, 23, 44, 12, 32, 43, 32));

