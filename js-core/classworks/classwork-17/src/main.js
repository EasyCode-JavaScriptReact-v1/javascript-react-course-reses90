const next = document.getElementById('next');

const colors = ['yellow', 'green', 'red']

let conterBgc = 0;
let polzi = 0;

const traffickLight = setInterval(() => {
    next.style.backgroundColor = colors[conterBgc];
    conterBgc += 1;
    if(conterBgc === colors.length) {
        conterBgc = 0;
    }
    
    next.style.marginLeft = `${polzi}px`;
    polzi += 10
}, 100);

setInterval(() => {
    next.classList.toggle('circle');
}, 5000);