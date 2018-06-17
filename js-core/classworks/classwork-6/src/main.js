//forEach
const arr = [1, 2, 3];

arr.forEach(function (value, index, arr) {
    console.log(`value: `, value);
    console.log(`index: `, index);
    console.log(`arr: `, arr);
});

// START ARRAY

let listOfCompanys = [
  {
    company: 'ASIMILINE',
    name: {
      last: 'Watkins',
      first: 'Lindsay',
    },
    eyeColor: 'brown',
    age: 20,
    picture: 'http://placehold.it/32x32',
    balance: '$1,091.09',
    isActive: true,
    guid: '294814e3-4c89-428f-b0c9-da5c4c37ea5e',
    index: 0,
    _id: '584babb6eeb4137cf14c37a3',
  },
  {
    company: 'ENJOLA',
    name: {
      last: 'Price',
      first: 'Greene',
    },
    eyeColor: 'brown',
    age: 39,
    picture: 'http://placehold.it/32x32',
    balance: '$3,533.55',
    isActive: true,
    guid: 'e7b0824f-d6d1-4a82-b2c5-cd7a1ec8310c',
    index: 1,
    _id: '584babb6c7be9c2398ed263f',
  },
  {
    company: 'ZINCA',
    name: {
      last: 'Robertson',
      first: 'Barbara',
    },
    eyeColor: 'brown',
    age: 22,
    picture: 'http://placehold.it/32x32',
    balance: '$1,395.22',
    isActive: false,
    guid: '0735d8d9-a165-4ad1-893f-e821da37bf63',
    index: 2,
    _id: '584babb6cca4dbefa6001820',
  },
  {
    company: 'TALKOLA',
    name: {
      last: 'Cooke',
      first: 'Lea',
    },
    eyeColor: 'blue',
    age: 31,
    picture: 'http://placehold.it/32x32',
    balance: '$3,074.16',
    isActive: false,
    guid: '7d13cbc4-6b4d-4954-b3d3-df3cfe5f2373',
    index: 3,
    _id: '584babb6391a2b568f1e9416',
  },
  {
    company: 'GEEKKO',
    name: {
      last: 'Webb',
      first: 'Kline',
    },
    eyeColor: 'blue',
    age: 34,
    picture: 'http://placehold.it/32x32',
    balance: '$1,520.21',
    isActive: false,
    guid: '2b179de0-a659-4423-b3c4-11c6490e5c74',
    index: 4,
    _id: '584babb66d6ea73e8ed51208',
  },
];

// END ARRAY

function returnNewArrayWithCompanies () {
    let namesOfComanies = [];
    
    listOfCompanys.forEach(function(value, index, arr) {
        if(value.company) {
            namesOfComanies.push(value.company);
        }
    });
    
    return console.log(namesOfComanies);
}

returnNewArrayWithCompanies();

// START OBJECT

let megaObject = {
  favoriteFruit: 'apple',
  greeting: 'Hello, Lenora! You have 5 unread messages.',
  friends: [
    {
      name: 'Paul Carrillo',
      id: 0,
    },
    {
      name: 'Prince Dejesus',
      id: 1,
    },
    {
      name: 'Carey Bates',
      id: 2,
    },
    {
      name: 'Moses Ballard',
      id: 3,
    },
    {
      name: 'Rowe Bolton',
      id: 4,
    },
    {
      name: 'Beck Atkinson',
      id: 5,
    },
    {
      name: 'Rose Travis',
      id: 6,
    },
    {
      name: 'Monica Goff',
      id: 7,
    },
    {
      name: 'Mcfadden Nelson',
      id: 8,
    },
    {
      name: 'Luann Carney',
      id: 9,
    },
    {
      name: 'Cheri Buck',
      id: 10,
    },
    {
      name: 'Hartman Potts',
      id: 11,
    },
    {
      name: 'Farley Austin',
      id: 12,
    },
    {
      name: 'Jerri Richardson',
      id: 13,
    },
    {
      name: 'Burnett Sharp',
      id: 14,
    },
    {
      name: 'Katy Madden',
      id: 15,
    },
    {
      name: 'Kristine Payne',
      id: 16,
    },
    {
      name: 'Ashlee Wilson',
      id: 17,
    },
    {
      name: 'Jan Pugh',
      id: 18,
    },
    {
      name: 'Michael King',
      id: 19,
    },
    {
      name: 'Patty Rivas',
      id: 20,
    },
    {
      name: 'Bridges Oneil',
      id: 21,
    },
    {
      name: 'Walters Vazquez',
      id: 22,
    },
    {
      name: 'English Andrews',
      id: 23,
    },
    {
      name: 'Woodard Cardenas',
      id: 24,
    },
    {
      name: 'Mercado Chan',
      id: 25,
    },
    {
      name: 'Guerra Lawson',
      id: 26,
    },
    {
      name: 'Riley Gray',
      id: 27,
    },
    {
      name: 'Romero Sampson',
      id: 28,
    },
    {
      name: 'Reva Carroll',
      id: 29,
    },
    {
      name: 'Carey Mckenzie',
      id: 30,
    },
    {
      name: 'Miles Raymond',
      id: 31,
    },
    {
      name: 'Ray Underwood',
      id: 32,
    },
    {
      name: 'Maude Norris',
      id: 33,
    },
    {
      name: 'Brigitte Kirkland',
      id: 34,
    },
    {
      name: 'Graham Russell',
      id: 35,
    },
    {
      name: 'Sonia Holcomb',
      id: 36,
    },
    {
      name: 'Hopper Garrison',
      id: 37,
    },
    {
      name: 'Butler Harrison',
      id: 38,
    },
    {
      name: 'Grant Wheeler',
      id: 39,
    },
    {
      name: 'Stout Barker',
      id: 40,
    },
    {
      name: 'Merritt Kelley',
      id: 41,
    },
    {
      name: 'Kari Holman',
      id: 42,
    },
    {
      name: 'Tamra Howell',
      id: 43,
    },
    {
      name: 'Good Harvey',
      id: 44,
    },
    {
      name: 'Hendrix Webb',
      id: 45,
    },
    {
      name: 'Hammond Harris',
      id: 46,
    },
    {
      name: 'Ester Hamilton',
      id: 47,
    },
    {
      name: 'Lopez Hopper',
      id: 48,
    },
    {
      name: 'Newton Cantrell',
      id: 49,
    },
  ],
  range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  tags: ['nulla', 'Lorem', 'labore', 'dolore', 'enim'],
  longitude: '0.298835',
  latitude: '20.822214',
  registered: 'Saturday, July 2, 2016 10:52 PM',
  about: 'Ipsum adipisicing nulla adipisicing culpa qui et esse labore ut nostrud excepteur amet elit voluptate. Ut ex laborum enim sit. Proident eu elit tempor occaecat dolor.',
  address: '597 Agate Court, Interlochen, Utah, 6828',
  phone: '+1 (987) 453-2740',
  email: 'lenora.barr@uberlux.me',
  company: 'UBERLUX',
  name: {
    last: 'Barr',
    first: 'Lenora',
  },
  eyeColor: 'brown',
  age: 37,
  picture: 'http://placehold.it/32x32',
  balance: '$3,110.45',
  isActive: true,
  guid: '74d9074f-004a-447f-8721-12d884011852',
  index: 0,
  _id: '584bac50967253d4322db586',
};

// END OBJECT

/*
* Напишите функцию которая проходится по списку компаний
* и берет свойство 'index' и находит в megaObj друга у которого
* такой же index равен id
*
* Вам нужно вернуть новый массив который содержит объекты(друзей)
* у которых есть свойство companyName имя компании
* и так же имя друга friendName
 /

/*
* [
*  {
*    companyName: 'ASIMILINE',
*    friendName: 'Paul Carrillo'
*  }
* ]
*/

function returnArrWithFriendAndCompany () {
    let newArray = [];
    
    listOfCompanys.forEach(function(company, companyIndex, arr) {
        const companyIndx = company.index;
        const megaObjectFriends = megaObject.friends;
        
        megaObjectFriends.forEach(function(friend, friendIndex, arr) {
            const friendId = friend.id;
            if(friendId === companyIndx) {
                const requiredData = {
                    companyName: company.company,
                    friendName: friend.name,
                };
                newArray.push(requiredData);
            }
        });
    });
    return console.log(newArray);
}

returnArrWithFriendAndCompany();

//map

const someArray = [1, 2, 3, 4, 5,];

console.log(someArray.map(function(value) {
    return value * 2;
}));

//filter

const someArray2 = [10, 20, 30];

console.log(someArray2.filter(function(value) {
    return value > 10;
}));

const user ={
    englishLevel: 'B2',
    };

const salary = [
    {
        salary: 500,
        englishLevel: 'A2',
    },
    {
        salary: 800,
        englishLevel: 'B1',
    },
    {
        salary: 1000,
        englishLevel: 'B2',
    },
    {
        salary: 2000,
        englishLevel: 'C1',
    },
    {
        salary: 3000,
        englishLevel: 'C2',
    },
]

console.log(salary.filter(function(salary, index, arr) {
    let wishesSalary = salary.salary;
    
    if(user.englishLevel === salary.englishLevel) {
        return wishesSalary;
    }
}))

const someArray3 = [10, 20, 30];

console.log(someArray3.reduce(function(newValue, value, index, arr) {
    console.log(`newValue: `, newValue);
    return newValue + value;
}, 0));

function sumArray () {
    let counter = 0;
    someArray3.forEach(function(value, index, arr) {
        return counter += value;
    });
    return console.log(counter);
}

sumArray();

const someArray4 = [`JS`, `Easy`, `For`, `Life`];

console.log(someArray4.reduce(function(newValue, value, index, arr) {
    return newValue + ` - ` + value; 
},));