// tipos primitivos:
// typeof(variavel) descobre o tipo da variavel
//boolean
//number
//string
//var é global e local, let e const são só locais.
//const requer um valor inicial obrigatorio.
let array = ['string', 2, true];

let objeto = {
    string: 'string',
    number: 1,
    boolean: true,
    array: [1, 2, 3, 4, 5],
    objetoInterno: { stringInterna: 'string interna'}
};

function calculadora(){
    const operacao = prompt('Escolha uma operação:\n')
}