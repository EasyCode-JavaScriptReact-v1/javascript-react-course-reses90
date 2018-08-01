/* EASY
Алгоритмы !
TASK 0
Вам дано предложение, верните массив из слов,
которые длинее чем средняя длина всех слов.
Слова разделены пробелами, если в предложении запятые,они должны быть пропущены
solution(["This is a sample string"]) expected ["This" "sample" "string"]
solution(["Some another sample"]) expected ["another" "sample"]
solution(["Do, do, do, do... do it!"]) expected []
*/

const solution = sentence => {
    let arrWithWords = sentence.join('').split(' ');
    arrWithWords = arrWithWords.reduce((clearWords, word) => {
        const clearWord = word.replace(/\W/gmi, '');
        clearWords.push(clearWord);
        return clearWords;
    }, []);
    const middleLengthOfString = arrWithWords.reduce((acc, word) => acc + word.length, 0) / arrWithWords.length;
    
    return arrWithWords.reduce((output, word) => {
        if(word.length > middleLengthOfString) {
            output.push(word);
        }
        return output;
    }, []);
}

console.log(solution(["This is a sample string"]));
console.log(solution(["Some another sample"]));
console.log(solution(["Do, do, do, do... do it!"]));

/*
Подготовка к занятию в пятницу.
Windows:
  Установите все node.js скачать отсюда -> https://nodejs.org/en/
  Скачайте последнюю 10.x.x версию
  Для проверки установки в консоле введите "node -v" (без кавычек) отобразит версию node.js
Linux:
 sudo apt install npm // установить менеджер пакетов npm
 npm i -g n // установить пакет для установки node.js
 sudo n latest // установить последнюю версию node.js
*/


/* TASK 1
Сделайте таблицу 5x5
При клике на элемент, изменяйте цвет у элемента на красный.
Но цвет у элемента должен изменяться пропорционально в другой половине квадрата
Пример 3х3:
[]|[]|[]
[]|[]|[]
[]|[]|[]
кликаем сюда -> []|[]|[]
                []|[]|[]
                []|[]|[x] <- загорается тут
                []|[]|[]
кликаем сюда -> []|[]|[x] <- загорается тут
                []|[]|[x]
*/
const table = document.querySelector('tbody');
const reversedRows = [...table.rows].reverse();
const reversedTable = reversedRows.reduce((output, tr) => {
     output.push([...tr.cells].reverse());
     return output;
}, []);

table.addEventListener('click', (e) => {
    const toggleFunc = rowNumber => {
        const index = e.target.cellIndex;
        const cell = reversedTable[rowNumber][index];
        cell.classList.toggle('active');
    }

    if(e.target.tagName === 'TD' && e.target.parentElement.id ==='first') {
        toggleFunc(0)
    }
    if(e.target.tagName === 'TD' && e.target.parentElement.id ==='second') {
        toggleFunc(1)
    }
    if(e.target.tagName === 'TD' && e.target.parentElement.id ==='third') {
        toggleFunc(2)
    }
    if(e.target.tagName === 'TD' && e.target.parentElement.id ==='fourth') {
        toggleFunc(3)
    }
    if(e.target.tagName === 'TD' && e.target.parentElement.id ==='fifth') {
        toggleFunc(4)
    }
})

// @SUPER-FrontEnd
/*
У вас есть 3 блока смотри events.html
при mousedown и движении мышки нужно сделать
ресайз одного блока.
Подсказка - событие необходимо повесить на доп. элемент .resize
*/