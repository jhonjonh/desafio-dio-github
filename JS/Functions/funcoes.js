//exemplo de uso de um operador Spread (...). Cada item do array se torna um argumento da funcao.

function soma(a, b, c) {
    return a + b + c;
}

const NUMBERS_ARRAY = [3, 2, 1];

console.log(soma(...NUMBERS_ARRAY));


/* Exemplo de uso do operador Rest (...args). Combina todos os argumentos de uma funcao em um array e pode colocar quantos argumentos quiser.
Aqui a funcao quantosArgs descobre quantos parametros tem a funcao.
*/

function quantosArgs(...argumentos){
    console.log(argumentos.length)
}

quantosArgs("um", "dois", "tres");
quantosArgs("um");
quantosArgs(1, 2, 3, 4, 5);
quantosArgs();


/**
 * Exemplo de função com Object Destructuring. Entre chaves, pode-se escolher dados especificos do objeto como argumentos da funcao, e depois chamar a funcao para qualquer objeto que tenha esses dados.
 */

const USUARIO = {
    id: 3354,
    apelido: 'gatonet',
    nomeCompleto: {
        nome: 'Juriamir',
        sobrenome: 'Carvalho'
    }
};

let pegaId = function({id: id}) {
    return id;
}

let pegaNomeCompleto = function({nomeCompleto: {nome: nome, sobrenome: sobrenome}}) {
    return `${nome} ${sobrenome}`;
}

console.log(`Senhor ${pegaNomeCompleto(USUARIO)}, seu ID é ${pegaId(USUARIO)}`);