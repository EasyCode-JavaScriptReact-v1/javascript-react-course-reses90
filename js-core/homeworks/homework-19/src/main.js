/*
Даны строки разделенные различным образом,
верните строки разделенные / или _, в нижнем регистре
solution("ActiveModel::Errors") => active_model/errors"
solution("HelloHowAreYou") => "hello_how_are_you"
solution("MyNAMEIsBOND-JamesBond") => my_name_is_bond_james_bond"
solution("MAINCompany::BEST-MAINUser") => "main_company/best_main_user"
*/

const isLowerCase = (letter) => {
    if(letter === undefined) {
        return false;
    }
    const compareLetter = letter.toLowerCase();
    return letter === compareLetter;
}

const isUpperCase = (letter) => {
    if(letter === undefined) {
        return false;
    }
    const compareLetter = letter.toUpperCase();
    return letter === compareLetter;
}

const solution = (str) => {
    const replacedColon = str.replace(/::/, '/');
    const replacedDash = replacedColon.replace(/-/, '_');
    
    const spliteddStr = replacedDash.split('')
    let output = '';

    spliteddStr.forEach((letter, index, arr) => {
        const nextLetter = arr[index + 1];
        const prevLetter = arr[index - 1];
        const isNotStr = /\W/;

        if(isNotStr.test(letter)) {
            output += letter;
            return;
        }

        if(letter === '_') {
            return;
        }

        if(isLowerCase(letter)) {
            output += letter;
            return;
        }

        if(prevLetter === '/' || letter === '/') {
            const changedLetter = letter.toLowerCase();
            output += changedLetter;
            return;
        }

        if(isUpperCase(letter) && isLowerCase(prevLetter) && isUpperCase(nextLetter)) {
            const changedLetter = letter.toLowerCase();
            output += '_' + changedLetter;
            return;
        }

        if(isUpperCase(letter) && index === 0) {
            const changedLetter = letter.toLowerCase();
            output += changedLetter;
            return;
        }

        if(isUpperCase(letter) && isUpperCase(nextLetter)) {
            const changedLetter = letter.toLowerCase();
            output += changedLetter;
            return;
        }

        if(isUpperCase(letter) && isLowerCase(nextLetter) && isUpperCase(prevLetter)) {
            const changedLetter = letter.toLowerCase();
            output += '_' + changedLetter;
            return;
        }

        if(isUpperCase(letter) && isLowerCase(prevLetter)) {
            const changedLetter = '_' + letter.toLowerCase();
            output += changedLetter;
            return;
        }

    });

    return output;
}

console.log(solution("MAINCompany::BEST-MAINUser"));
console.log(solution("MyNAMEIsBOND-JamesBond"));
console.log(solution("HelloHowAreYou"));
console.log(solution("ActiveModel::Errors"));

/* TASK 0.5
ГОТОВО: Добавить кота в ваш КОД в Node.js !!
КОТА ОСТАВИТЬ
 Добавить проверку на существование файла
*/

/* TASK 1
По приложению phone-book;
1. Для каждой страницы у вас должен быть класс с одноименным названием
в отдельном файле
2. Каждый класс должен содержать методы render() - который рендерит всю страницу
3. Удалить jquery.js и bootstrap.js с проекта
-> Закончить keypad с прошлого занятия, добавить функционал для удаления номера
Сортировка таблицы!
Визуализировать страницы Edit contact, User, Add User;
TASK 2
1. keypad - сделать чтобы номер можно было набрать с клавиатуры (!)
2. Формат номера должен быть таким (099)-17-38-170
*/

/*
TASK 3
edit-contact,
- сделать данные редактируемыми (атрибут contentEditable) // input
- изменять backgroundColor
add-user при клике:
index.html/contacts.html - в поле search при вводе буквы,
добавить поиск по имени если имя включает хотя бы одну эту букву.
после ввода каждого символа, фильтровать отображаемых пользователей.
При удалении всех символов отобразить снова весь список
*/      
