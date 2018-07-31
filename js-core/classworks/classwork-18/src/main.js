const query = (selector) => document.querySelector(selector);

// const block1 = query(`.block1`);
// const block2 = query(`.block2`);
// const block3 = query(`.block3`);

// block1.addEventListener('click', (e) => {
//     if(e.target.classList.contains('block1')) {
//         console.log(`I'M BLOCK 1`)
//     }
//     if(e.target.classList.contains('block2')) {
//         console.log(`I'M BLOCK 2`)
//     }
//     if(e.target.classList.contains('block3')) {
//         console.log(`I'M BLOCK 3`)
//     }
// }, true)

// block1.addEventListener('click', (e) => {
//     console.log(`I'M Block 1`)
// })

// block1.addEventListener('click', (e) => {
//     console.log(`I'M Block 2`)
// })

// block1.addEventListener('click', (e) => {
//     console.log(`I'M Block 3`)
// })

const table = query('table')

table.addEventListener('click', (e) => {
    if(e.target.tagName === 'TD') {
        e.stopPropagation()
        e.target.classList.toggle('active');
    }
})

const block3 = query('.block3');

let counter = 0;

const clickHendler = e => {
    counter++;
    if(counter === 3) {
        block3.removeEventListener('click', clickHendler)
    }
    console.log(counter)
}

block3.addEventListener('click', clickHendler);