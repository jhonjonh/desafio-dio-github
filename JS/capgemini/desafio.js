// Questão 1:
// Escreva um algoritmo que mostre na tela uma escada de tamanho n utilizando o caractere * e espaços. A base e altura da escada devem ser iguais ao valor de n. A última linha não deve conter nenhum espaço.

let numero = 6;
let asterisco = '*';

function escadita(n){
    console.log(`Resultado da questão 1:`)
    for (let i = 1; i <= n; i++) {
        console.log( `${asterisco.repeat(i)}`)
    }
}

escadita(numero);


// Questão 2:
// Construa um algoritmo que informe qual é o número mínimo de caracteres que devem ser adicionados para uma string qualquer ser considerada segura.

let senha = "Ya3"

let faltamQtos = (s) => s.length >= 6 ? 0 : 6 - s.length;

console.log(`Resultado da Questão 2: ${faltamQtos(senha)}`);


// Questão 3:
// Dada uma string qualquer, desenvolva um algoritmo que encontre o número de pares de substrings que são anagramas.

let texto = "ovo";

//funcao que ordena string em ordem alfabetica
let ordenado = (str) => str.split("").sort().join("");

function findRpt(str){

    var result = [];

    for(let i = 0; i < str.length; i++){
        let subString = str.substring(i);
        let reverseSentence = subString.split('').reverse().join('');      
        let same = (subString === reverseSentence);
        if(same === true){
            result.push(same);
        }
    };
    return result.length;
};

console.log(`Resultado da Questão 3: ${findRpt(texto)}`);



