//Home Work 2 made by Balashov Nikita

/*======================= TASK 1 Variant-1(hard) =====================*/

function Variant1 () {
    
    let numbers = [25, 1];
    let project = 'проект';
    let team = `команда`;
    let howMuch = 'Сколько';
    let sentence = 'нужно программистов чтобы сделать project ?'; /* there is I can use `${project}` but I prefer hard way) I wonna boost my brain */ 

    let sentenceArray = sentence.split(' '); //transform string in array
    sentenceArray.splice(4, 5, `${project}?`);

    let task1 = [howMuch, sentenceArray.join(' '), `${numbers[1]},`, `${numbers[0]},`, team];

    console.log(task1.join(' '));
    
};

Variant1();

/*There is I trained to use .splice*/
//let arr = ['Нужно', 'программистов', 'чтобы', 'сделать', 'project', '?'];
//arr.splice(4, 5, `${project}`, '?');
//
//console.log(arr.join(' '));

/*======================= TASK 1 Variant-2(easy) =====================*/

function Variant2 () {
    
    let numbers = [25, 1];
    let project = 'проект';
    let team = `команда`;
    let howMuch = 'Сколько';
    let sentence = `нужно программистов чтобы сделать ${project}?`; 


    let task1 = [howMuch, sentence, `${numbers[1]},`, `${numbers[0]},`, team];

    console.log(task1.join(' '));
    
};

Variant2();


/*======================= TASK 2 =====================*/

let array = [
  'Он',
  'был больше ни телом, к которому рано или поздно',
  'он обнаружил',
  'не',
  'Так, когда Будда достиг Просветления',
  '...',
  'что больше',
  'ощущает себя мишенью',
  'не'
];

let homeSentence = [`${array[4]},`, `${array[2]},`, `${array[6]}`, `${array[3]}`, `${array[7]}.`, `${array[0]}`, `${array[8]}`, `${array[1]}`, `${array[5]}`];

console.log(homeSentence.join(' '));


/*======================= TASK 3 =====================*/

let myObj = {};

myObj.firstValue = `first value`;
myObj.secondValue = `second value`;
myObj['thirdValue'] = `third value`;
myObj['fourthValue'] = `fourth value`;

console.log(myObj);


/*======================= TASK 5 =====================*/

let frameworks = [4.7, 'Angular', '6Angular', 'React/Redux'];
let x = 'google released ' + 'new version ' + frameworks[1] + Math.floor(frameworks[0]) + 'But real speed is ' + `${frameworks[frameworks.length - 1]}`;












