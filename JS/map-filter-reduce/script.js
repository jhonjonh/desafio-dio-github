//Criando uma classe, seus getters e setters, seus métodos, depois um objeto e testando cada um deles no console.

class Classe {
    constructor(nome, saldo, vetor){
        this.nome = nome;
        this._saldo = saldo;
        this.vetor = vetor;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    multiplica(valor){
        return this.vetor.map(i => i * valor);
    }

    filtraPares(){
        return this.vetor.filter(i => i % 2 === 0);
    }

    juntaTudo(){
        return this.vetor.reduce((acc, curr) => acc + curr);
    }

    deduz(){
        this._saldo -= this.juntaTudo();
        return this._saldo ;
    }
}

let objeto = new Classe("objeto", 1000, [1,2,3,4,5]);

console.log(objeto.multiplica(2));
console.log(objeto.filtraPares());
console.log(objeto.juntaTudo());
console.log(objeto.deduz());
console.log(objeto.saldo);