/*
 0 Алгоритмы
 Реализуйте функцию которая будет превращать трехмерный массив
 в двухмерный, а если массив двухмерный, тогда в трехмерный массив
 // solution([ [1, 'a'], [2, 'b'], [3, 'c'] ]) => [ [1, 2, 3], [a, b, c] ]
 // solution([ [1, 3, 5], [2, 4, 6] ]) => [ [1, 2], [3, 4], [5, 6] ]
 // solution([[]]) => []
 [ [ [ ] ] ] = [ [] ]
 ИСПОЛЬЗУЙТЕ МЕТОДЫ МАССИВОВ !
 */

const solution = arr => {
    if(arr.length === 2) {
        let output = [];
        
        const firstPart = arr.reduce((newArr, childArr) => {
            newArr.push(childArr[0]);
            return newArr;
        }, []);
        
        const secondPart = arr.reduce((newArr, childArr) => {
            newArr.push(childArr[1]);
            return newArr;
        }, []);
        
        const thirdPart = arr.reduce((newArr, childArr) => {
            newArr.push(childArr[2]);
            return newArr;
        }, []);
        
        output.push(firstPart);
        output.push(secondPart);
        output.push(thirdPart);
        
        return output;
    }
    
    if(arr.length === 3) {
        let output = [];
        
        const firstPart = arr.reduce((newArr, childArr) => {
            newArr.push(childArr[0]);
            return newArr;
        }, []);
        
        const secondPart = arr.reduce((newArr, childArr) => {
            newArr.push(childArr[1]);
            return newArr;
        }, []);
        
        output.push(firstPart);
        output.push(secondPart);
        
        return output;
    }
};

console.log(solution([[1, 3, 5], [2, 4, 6]]));
console.log(solution([[1, 'a'], [2, 'b'], [3, 'c']]));

const navigation = [
  {name: 'Главная'},
  {
    name: 'Каталог',
    children: [
      {
        name: 'Компьютеры',
        children: [{name: 'Ноутбуки'}, {name: 'Планшеты'}]
      }
    ]
  },
  {name: 'Профиль'}
];

/*
 Визуализируйте массив, если в коллекции есть свойство
 children,
 тогда создайте вложенный лист
 name - свойство h1
 children ul -> li
 Используйте innerHTML
 */

/*
<h1>Main</h1>
<ul>
  <h1>Catalog</h1>
  <li>
    <ul>
      <h1>Comp</h1>
      <ul>
        <li>
          <h1>Notebook</h1>
          <h1>...</h1>
        </li>
      </ul>
  </li>
*/

const visualArray = arr => {
    return `
            <h1>${arr[0].name}</h1>
            <ul>
            <h1>${arr[1].name}</h1>
            <li>
                <ul>
                <h1>${arr[1].children[0].name}</h1>
                <ul>
                    <li>
                    <h1>${arr[1].children[0].children[0].name}</h1>
                    <h1>${arr[1].children[0].children[1].name}</h1>
                    </li>
                </ul>
            </li>
    `;
};

const testNavigation = visualArray(navigation);

document.body.innerHTML += testNavigation;

/*  ПРИЛОЖЕНИЕ  */
// Добавьте скрипт который будет рисовать всю страницу с таблицей.
// https://github.com/aleksandra-maslennikova/telephone-book
// innerHTML должно быть максимум

/* ТЕСТ */

/*
* Добавьте реальных вопросов про JavaScript с вариантами
* ответов
* */

// 3. При нажатии на кнопку если были выбраны правильные ответы,
// отображайте "ПРАВИЛЬНО" или не правильно
// или отображайте значек X или галочку, возле вопроса



/* @SUPER-FRONT */

/*
* 4. По нажатию на кнопку(проверить) отобразится "модальное" окно в котором отобразится
* весь тест с отображенными правильными ответами(обозначьте их) и неправильными(тоже обозначьте)
* Отобразите количество правильных и неправильных ответов
* счетчик
* У модального окна будет 2 кнопки "пересдать" и "отправить"
* *
* Если все ответы правильные, кнопка пересдать не активна
* disabled
*
* По нажатию отправить, модальное окно закрывается и на экране надпись "ваши ответы успешно
* отправлены"
*
* --- Если все ответы правильные отобразите картинку
*
* По нажатию на пересдать - появляется снова наш тест сначала
*
* @Super-FRONT @ 2
* При загрузке странице добавьте таймер отсчета с милисекундами -> В модальном окне отобразите
* количество затраченного времени на тест
*
* */