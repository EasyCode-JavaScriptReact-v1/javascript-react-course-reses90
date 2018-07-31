/*
 TASK 0
 Отобразите всех лидеров массива.
 *
 *
 * Элемент лидер если он больше чем все последующие элементы
 * после него ( элементы справа ).
 * Последний элемент всегда лидер. Например в массиве [16,17,4,3,5,2]
 * лидеры 17, 5 и 2.
 *
 * */

const solution = arr => {
    return arr.reduce((newArr, number, index, arr) => {

        const arrToCompare = arr.slice((index + 1), arr.length);

        if(arrToCompare.every(numbers => number > numbers)) {
            newArr.push(number);
        }

        return newArr;
    }, [])
};

console.log(solution([16, 17, 4, 3, 5, 2])); // === [17, 5, 2]
console.log(solution([4, 3, 7, 12, 6, 67, 5, 45, 34, 35, 2, 8])); // [67, 45, 35, 8]
console.log(solution([12, 10, 12, 8, 7, 6])); // [12, 8, 7, 6]
console.log(solution([1, 2, 3, 4, 5, 4])); // [5, 4]
console.log(solution([12, 12, 12])); // [5, 4]

/* TASK 1
 * Сделайте карусель.
 * При клике по кнопке "<=" показывается первое изображение по "=>" следующее.
 *
 * 1.1
 * Сделайте слайдер - бесконечным, после третьего изображения снова первое.
 * 1.2
 * Добавьте внизу цифры с текущим активным изображением.
 *
 *
 *
 * @SUPER -> @front-end
 * Уберите в стилях li - position:absolute.
 * изменяйте свойство transform:translate3d у .carousel, добавьте transition
 * и сделайте чтобы картинки передвигались влево и вправо
 *
 * @PUPER -> переход к первой картинка
 *
 * */

class Carousel {
    constructor(quantitySlides) {
        this.quantityOfSlides = quantitySlides;
    }

    render() {
        const sliderTemplate = /*html*/`
            <div class="carousel-wraper">
                <span id="prev">Prev</span>
                ${this.createItems()}
                <span id="next">Next</span>
                ${this.createPointers()}
            </div>
        `;

        const mountMode = document.getElementById('mount-mode');
        mountMode.innerHTML += sliderTemplate;
    }

    createItems() {
        let output = '';

        for(let i = 1; i <= this.quantityOfSlides; i++) {
            if(i === 1) {
                output += /*html*/`<div class="item active"><span class="number">${i}</span></div>
                `;
            }
            if(i % 2 !== 0 && i !== 1) {
                output += /*html*/`<div class="item"><span class="number">${i}</span></div>
                `;
            }
            if(i % 2 === 0) {
                output += /*html*/`<div class="item gray"><span class="number">${i}</span></div>
                `;
            }
        }

        return output;
    }

    createPointers() {
        const blockWithPointers = document.createElement('div');
        blockWithPointers.id = 'current-item';

        for(let i = 1; i <= this.quantityOfSlides; i++) {
            if(i === 1) {
                blockWithPointers.innerHTML += /*html*/`<span class="pointer active-pointer">${i}</span>`
            } else {
                blockWithPointers.innerHTML += /*html*/`<span class="pointer">${i}</span>`
            }
         }

         return blockWithPointers.outerHTML;
    }

    applyListeners() {
        const items = [...document.querySelectorAll('.item')];
        const pointers = [...document.getElementById('current-item').children];

        const nextBtn = document.getElementById('next');
        const prevBtn = document.getElementById('prev');

        const next = () => {
            for(let i = 0; i < items.length; i++) {
                const item = items[i];
                const nextItem = items[i + 1];
                if(item.classList.contains('active')) {
                    if(item.firstChild.textContent == this.quantityOfSlides) {
                        item.classList.remove('active');
                        items[0].classList.add('active');
                        pointers[i].classList.remove('active-pointer');
                        pointers[0].classList.add('active-pointer');
                        return;
                    } else {
                    item.classList.remove('active');
                    nextItem.classList.add('active');
                    pointers[i].classList.remove('active-pointer');
                    pointers[i + 1].classList.add('active-pointer');
                    return; }
                }
            }
        }

        const prev = () => {
            for(let i = 0; i < items.length; i++) {
                const item = items[i];
                const prevItem = items[i - 1];
                if(item.classList.contains('active')) {
                    if(item.firstChild.textContent === '1') {
                        item.classList.remove('active');
                        items[items.length - 1].classList.add('active');
                        pointers[i].classList.remove('active-pointer');
                        pointers[pointers.length - 1].classList.add('active-pointer');
                        return;
                    }
                    item.classList.remove('active');
                    prevItem.classList.add('active');
                    pointers[i].classList.remove('active-pointer');
                    pointers[i - 1].classList.add('active-pointer');
                    return;
                }
            }
        }

        nextBtn.addEventListener('click', next);
        prevBtn.addEventListener('click', prev);

        const wraperForPointers = document.getElementById('current-item');
        wraperForPointers.addEventListener('click', (e) => {
            const point = Number(e.target.textContent);

            if(e.target.classList.contains('active-pointer') || e.target.id === 'current-item') {
                return;
            }

            const activeSlide = document.querySelector('.active');
            activeSlide.classList.remove('active');
            const activePointer = document.querySelector('.active-pointer');
            activePointer.classList.remove('active-pointer');

            e.target.classList.add('active-pointer');
            items[point - 1].classList.add('active');
        })
    }
}

const slider = new Carousel(10);
slider.render();
slider.applyListeners();
/*создайте новый instance Carouse при вызове initialize*/
// var myInitializedCarousel = Carousel.initialize({
//   elementToApply: '.carousel',
//   infinity: true,
// });

/*
* TASK 2
* Сделайте класс, который будет иметь метод topStyle
* метод topStyle принимает объект с CSS стилями и добавляет в <head>
*   новый элемент с данными стилями
*
*
* */
// .topStyle('fetch', {backgroundColor:'blue'})
/*
*
* <style>.fetch {
* background-color
* */

class PushStyle{
    topStyle(className, object) {
        const arrWithStyles = this.fillStyles(object);
        const stringWithStyles = arrWithStyles.reduce((newStyle, style) => {
            newStyle += `${style}`;
            return newStyle;
        }, '');

        const structure = `
            .${className} {
                ${stringWithStyles}
            }
        `;
        
        const tagStyle = document.querySelector('style');
        tagStyle.textContent += structure.trim();
        tagStyle.textContent.trim()
    }

    isUpperCase(letter) {
        const toUpperCase = letter.toUpperCase();
        return letter === toUpperCase;
    }

    fillStyles(object) {
        const styles = Object.keys(object);
        const values = Object.values(object);
        
        return styles.reduce((newArr, styleName, index) => {
            const value = values[index];
            const structure = `${this.createFormatedStyleName(styleName)}: ${value};`
            newArr.push(structure);
            return newArr;
        }, []);
    }

    createFormatedStyleName(styleName) {
        const splitStyleName = styleName.split('');

        const formatedArr =  splitStyleName.reduce((newArr, letter) => {
            if(this.isUpperCase(letter)) {
                const toLowerCaseLetter = letter.toLowerCase();
                newArr.push(`-${toLowerCaseLetter}`);
            }
            if(!this.isUpperCase(letter)) {
                newArr.push(letter);
            }
            return newArr;
        }, []);

        return formatedArr.join('')
    }
}

const pushStyle = new PushStyle();
pushStyle.topStyle('test', {backgroundColor: 'green'})



/* @SUPER
 *
 * Напишите функцию которая будет преобразовывать CSS-свойство в
 * ликвидное JS свойство
 *
 * background-color -> backgroundColor
 * margin-left -> marginLeft
 * flex-basis -> flexBasis
 *
 * ...etc
 *
 * сделать через regExp
 *
 * */


/*
Нужно визуализировать keypad.html -> keypad.js
Нужно визуализировать index.html -> contacts.js !!!
Структура виртуализации:
 >------ Это 2 разных класса KeypadPage, ContactsPage  <-----
innerHTML по максимуму
https://aleksandra-maslennikova.github.io/telephone-book/keypad.html
Сделайте чтобы при нажатии на кнопку цифра отобразилась
в <span class="numbers">
*/

/*
https://aleksandra-maslennikova.github.io/telephone-book/index.html
По клику по заголовку таблицы,
таблица сортировалась по соответствующему свойству
*/