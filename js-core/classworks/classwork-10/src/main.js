// Task 1

const cafe = {
    name: `fellowship of the ring`,
    fruits: `apple, orange, watermelon`,
    showFruits() {
        return this.fruits;
    },
    showPartnerFruits: showPartnerFruits,
    partners: [
        {
            name: `Frodo`,
            fruits: [`pineapple`, `nuts`]
        },
        {
            name: `Boromir`,
            fruits: [`sword`, `axe`]
        },
        {
            name: `Gendalf`,
            fruits: [`beard`, `chair`]
        },
    ],
}

function showPartnerFruits() {
    const partners = this.partners;
    partners.forEach((elem) => {
        console.log(this.showFruits.call(elem))
    })
}
cafe.showPartnerFruits();
console.log(cafe.showFruits());

const teacher = {
    teacherName: 'Alla Ivanovich',
}

const someMagic = {
    someMagic(){
        console.log(`ХАЛЯВА ПИРИДИ`);
    }
}

const students = [];

function makeStudents(arr, quantity) {
    for(let i = arr.length; i < quantity; i++) {
        const template = {
            name: `studen ${i + 1}`,
        }
        arr.push(template);
    }
}

function addTeacher(arr) {
    arr.forEach((elem) => {
        elem.__proto__ = teacher;
        elem.teacher = elem.__proto__;
    });
}

makeStudents(students, 30);
addTeacher(students);

teacher.teacherName = `Boris Snowden`;
console.log(students);

function addSomeMagic(arr) {
    arr.forEach((elem) => {
        elem.__proto__ = someMagic;
        elem.someMagic = elem.__proto__;
    });
}

addSomeMagic(students);
