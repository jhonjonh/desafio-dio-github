let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');

let carousel = [btn1, btn2, btn3, btn6, btn9, btn8, btn7, btn4];
let numCarousel = [1, 2, 3, 6, 9, 8, 7, 4];

btn5.addEventListener('click', applier);

function applier() {
    numCarousel = rodaRodaJequiti(numCarousel);
    carousel.map(function(btn, i) { btn.innerHTML = numCarousel[i] })
};

//função que recebe um array e faz os itens avancarem uma posicao, e o ultimo item vai para a primeira posicao do array.
function rodaRodaJequiti(array) {
    let arraySaida = [];
    for (let i = 0; i < array.length; i++) {
        if (i == (array.length - 1)) {
            arraySaida.unshift(array[i]);
        } else {
            arraySaida.push(array[i]);
        }
    }
    return arraySaida;
};