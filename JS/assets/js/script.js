var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var subtrair = document.querySelector("[name='subtrair']");
var adicionar = document.querySelector("[name='adicionar']");

adicionar.addEventListener('click', increment);
subtrair.addEventListener('click', decrement);

function increment() {
    if(currentNumber >= 10) {
        adicionar.disabled = true;
    } else {
        subtrair.disabled = false;
        currentNumber ++;
        currentNumberWrapper.innerHTML = currentNumber;
    } 
    avermelhou();
}

function decrement() {  
    if(currentNumber <= (-10)) {
        subtrair.disabled = true;
    } else {
        adicionar.disabled = false;
        currentNumber --;
        currentNumberWrapper.innerHTML = currentNumber;
    } 
    avermelhou();
}

function avermelhou() {
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = "red";
    } else {
        currentNumberWrapper.style.color = "black";
    }
}


