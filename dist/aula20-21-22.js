"use strict";
class Conta {
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
}
class ContaPF extends Conta {
    constructor(titular, cpf) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF criada:${this.titular}`);
    }
}
class ContaPJ extends Conta {
    constructor(titular, cnpj) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ criada:${this.titular}`);
    }
}
const conta1 = new ContaPF("Bruno", 456163878533);
const conta2 = new ContaPJ("Goiáis", 1254584862400515);
// console.log(conta2.titular)
// console.log(conta2.numero)
//# sourceMappingURL=aula20-21-22.js.map