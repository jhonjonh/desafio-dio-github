//Dado um vetor (array), se algum dos valores for divisivel por 3, imprime "contem divisiveis por 3". Se for divisivel por 5, imprima "contem divisiveis por 5". Se for divisivel pelos dois, imprima "contem divisiveis por 3 e 5". Se não for divisivel por nenhu, imprima "nenhum numero divisivel encontrado."

let numsArray = [1, 2, 3, 4];

function divPorTres(el) {
    return (el % 3 === 0);
}

function divPorCinco(el) {
    return (el % 5 === 0);
}

function divisores(array) {
    if ((array.find(divPorTres)) && (array.find(divPorCinco))) {
        return "contem divisiveis por 3 e 5"
    } else if (array.find(divPorTres)) {
        return "contem divisiveis por 3"
    } else if (array.find(divPorCinco)) {
        return "contem divisiveis por 5"
    } else {
        return "nenhum elemento divisivel por 3 ou 5 encontrado"
    }
};
//chama a funcao imprimindo o resultado no console:
// console.log(divisores(numsArray));


//faz o mesmo do anterior, porem retorna quantos divisiveis de cada existem.

function divisoresDesc(array) {
    let div3 = array.filter(el => el % 3 === 0);
    let div5 = array.filter(el => el % 5 === 0);
    if ((div3.length >= 1) && (div5.length >= 1)) {
        return `Vetor possui ${div3.length} valor(es) divisiveis por 3, e ${div5.length} valor(es) divisiveis por 5.`;
    } else if (div3.length >= 1) {
        return `Vetor possui ${div3.length} valor(es) divisiveis por 3, e nenhum divisivel por 5`;
    } else if (div5.length >= 1) {
        return `Vetor possui ${div5.length} valor(es) divisiveis por 5, e nenhum divisivel por 3`;
    } else {
        return `Vetor não possui valores divisiveis por 3 ou 5.`
    }
}

console.log(divisoresDesc(numsArray));

//-------------------------------------------------------------------------//
//Conte e imprima as strings que se repetem em um array.

let wordArray = ['um', 'dois', 'tres', 'quatro', 'um', 'um', 'dois'];

function repeatCounter(array) {
    let repetidos = []
    let resultado = {}

    for (let i = 0; i < array.length; i++) {
        repetidos = array.filter(el => el === array[i]);
        if (repetidos.length > 1) {
            resultado[array[i]] = repetidos.length;
        }
        repetidos = [];
    };

    //convertendo o resultado em string:    
    let resultadostr = '';
    for (let i in resultado) {
        resultadostr += i + ": " + resultado[i] + "\n";
    }

    return `Termos repetidos:\n${resultadostr}`;
}

console.log(repeatCounter(wordArray));