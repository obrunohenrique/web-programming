class Conta {
    protected numero:number;
    protected titular:string;
    protected saldoconta:number;

    constructor(titular:string) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoconta = 0
    }

    private gerarNumeroConta():number {
        return Math.floor(Math.random()*100000) + 1;
    }

    protected info():void {
        console.log(`Títular: ${this.titular}`)
        console.log(`Número.: ${this.numero}`)
    }

    public get saldo():number {
        return this.saldoconta
    }

    set saldo(saldoconta:number) { //Setter
        this.saldoconta = saldoconta
    }

    protected deposito(valor:number):void {
        if (valor<0){
            console.log("Valor inválido!")
            return
        }
        this.saldoconta += valor
    }

    protected saque(valor:number):void {
        if (valor<0){
            console.log("Valor inválido!")
            return
        }
        if (valor < this.saldoconta) {
            this.saldoconta -= valor
        } else {
            console.log('Saldo indisponível para saque')
        }
    }
    
}

class ContaPF extends Conta {
    cpf:number

    constructor(titular:string, cpf:number) {
        super(titular)
        this.cpf = cpf
        // console.log(`Conta PF criada:${this.titular}`)
    }

    info() {
        super.info()
        console.log(`CPF....: ${this.cpf}`)
        console.log("----------------------")
    }

    public deposito(valor:number):void {
        if (valor < 1000) {
            super.deposito(valor)
        } else {
            console.log("Valor de deposíto muito elevado para esse tipo de conta.")
        }
    }

    public saque(valor:number):void {
        if (valor > 1000) {
            console.log("Valor de saque muito alto para esse tipo de conta.")
        } else {
            super.saque(valor)
        }
    }
}

class ContaPJ extends Conta {
    cnpj:number

    constructor(titular:string, cnpj:number) {
        super(titular)
        this.cnpj = cnpj
        // console.log(`Conta PJ criada:${this.titular}`)
    } 

    info() {
        super.info()
        console.log(`CNPJ....: ${this.cnpj}`)
        console.log("----------------------")
    }

    public deposito(valor:number):void {
        if (valor < 10000) {
            this.saldoconta += valor
        } else {
            console.log("Valor de deposíto muito elevado para esse tipo de conta.")
        }
    }

    public saque(valor:number):void {
        if (valor > 10000) {
            console.log("Valor de saque muito alto para esse tipo de conta.")
        } else {
            super.saque(valor)
        }
    }
}


const conta1 = new ContaPF("Bruno", 456163878533)
const conta2 = new ContaPJ("Goiáis", 1254584862400515)

// console.log(conta2.titular)
// console.log(conta2.numero)

conta1.deposito(550)
conta1.saque(60)

conta1.saldo = 250
console.log(conta1.saldo)

// conta1.info()
// conta2.info()