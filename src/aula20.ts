class Conta {
    numero:number;
    titular:string;
    constructor(titular:string) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }

    gerarNumeroConta():number {
        return Math.floor(Math.random()*100000) + 1;
    }

}

class ContaPF extends Conta {
    cpf:number

    constructor(titular:string, cpf:number) {
        super(titular)
        this.cpf = cpf
    }
}

class ContaPJ extends Conta {
    cnpj:number

    constructor(titular:string, cnpj:number) {
        super(titular)
        this.cnpj = cnpj
    } 
}

const conta1 = new ContaPF("Bruno", 456163878533)
const conta2 = new ContaPJ("Goiáis", 1254584862400515)

console.log(conta2.titular)
console.log(conta2.numero)