/**
 * this geralmente é usado em metodos, para chamar propriedades dentro do objeto pai desse método.
 */

 const USUARIO = {
    id: 3354,
    apelido: 'gatonet',
    nomeCompleto: {
        nome: 'Juriamir',
        sobrenome: 'Carvalho'
    },
    //métodos do objeto USUARIO
    pegaId(){
        return this.id
    },
    pegaNomeCompleto(){
        return `${this.nomeCompleto.nome} ${this.nomeCompleto.sobrenome}`
    }
};

//Chamando métodos:
console.log(`${USUARIO.pegaNomeCompleto()}, seu ID é ${USUARIO.pegaId()}`);


/**Exemplo de uso do método call, para usar uma funcao (ou método dentro de um objeto) em outro objeto.
 * funcao.call(outro_objeto)
 */

const USUARIO2 = {
    id: 1122,
    apelido: 'lilika',
    nomeCompleto: {
        nome: 'Liliane',
        sobrenome: 'Prosdócimo'
    },

    mostraApelido() {
        console.log(this.apelido);
    }
}


// Usando o método call para usar o método de USUARIO2 no objeto USUARIO. Caso o método tenha parâmetros, coloque-os após o objeto, separando com virgulas.
USUARIO2.mostraApelido.call(USUARIO)

//Outro método semelhante é o apply, mas passam-se os argumentos dentro de um array[]


/** Exemplo de uso do método bind, que clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parametro */

let golimar = USUARIO2.mostraApelido.bind({ apelido: 'Golimar'});

golimar();