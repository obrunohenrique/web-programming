"use strict";
class Conta {
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoconta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Títular: ${this.titular}`);
        console.log(`Número.: ${this.numero}`);
    }
    get saldo() {
        return this.saldoconta;
    }
    set saldo(saldoconta) {
        this.saldoconta = saldoconta;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log("Valor inválido!");
            return;
        }
        this.saldoconta += valor;
    }
    saque(valor) {
        if (valor < 0) {
            console.log("Valor inválido!");
            return;
        }
        if (valor < this.saldoconta) {
            this.saldoconta -= valor;
        }
        else {
            console.log('Saldo indisponível para saque');
        }
    }
}
class ContaPF extends Conta {
    constructor(titular, cpf) {
        super(titular);
        this.taxa = 10;
        this.cpf = cpf;
        // console.log(`Conta PF criada:${this.titular}`)
    }
    info() {
        super.info();
        console.log(`CPF....: ${this.cpf}`);
        console.log("----------------------");
    }
    deposito(valor) {
        if (valor < 1000) {
            super.deposito(valor);
        }
        else {
            console.log("Valor de deposíto muito elevado para esse tipo de conta.");
        }
    }
    calcularimposto(valor) {
        return valor * this.taxa;
    }
    saque(valor) {
        if (valor > 1000) {
            console.log("Valor de saque muito alto para esse tipo de conta.");
        }
        else {
            super.saque(valor);
        }
    }
}
class ContaPJ extends Conta {
    constructor(titular, cnpj) {
        super(titular);
        this.cnpj = cnpj;
        // console.log(`Conta PJ criada:${this.titular}`)
    }
    info() {
        super.info();
        console.log(`CNPJ....: ${this.cnpj}`);
        console.log("----------------------");
    }
    deposito(valor) {
        if (valor < 10000) {
            this.saldoconta += valor;
        }
        else {
            console.log("Valor de deposíto muito elevado para esse tipo de conta.");
        }
    }
    saque(valor) {
        if (valor > 10000) {
            console.log("Valor de saque muito alto para esse tipo de conta.");
        }
        else {
            super.saque(valor);
        }
    }
}
const conta1 = new ContaPF("Bruno", 456163878533);
const conta2 = new ContaPJ("Goiáis", 1254584862400515);
// console.log(conta2.titular)
// console.log(conta2.numero)
conta1.deposito(550);
conta1.saque(60);
conta1.saldo = 250;
console.log(conta1.saldo);
// conta1.info()
// conta2.info()
//# sourceMappingURL=aula20a26.js.map