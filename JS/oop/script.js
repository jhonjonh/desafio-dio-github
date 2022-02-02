class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }
//quando uma propriedade tiver getter ou setter de mesmo nome, uma boa pratica é colocar um underscore antes do nome da propriedade para separa-los.
    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo){
            return "Sem saldo disponivel para sacar esse valor"
        } else {
            this._saldo = this._saldo - valor;
        }
        return this._saldo;
        
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, CartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._CartaoCredito = CartaoCredito;
    }

    get CartaoCredito() {
        return this._CartaoCredito;
    }

    set CartaoCredito(valor) {
        this._CartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupanca';
    }

}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor) {
        if(valor > 500) {
            return "Não é possível sacar mais do que 500 reais";
        } else {
            this.saldo -= valor;
        }
        return this.saldo;
    }
}