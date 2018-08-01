// @SUPER-FrontEnd
/*
У вас есть 3 блока смотри events.html
при mousedown и движении мышки нужно сделать
ресайз одного блока.
Подсказка - событие необходимо повесить на доп. элемент .resize
*/

const resizeBlocks = document.querySelectorAll('.resize');

[...resizeBlocks].forEach(block => {
    console.log(block)
    block.addEventListener('click', (e) => {
        console.log(e.target.parentElement)
    });
})