class Computador {
    public nome:string; //pode ser acessado de qualquer lugar
    private ram:number; // Só pode alterar pela própria classe
    private cpu:number;
    protected ligado:boolean; // Não pode ser acessado fora da classe, mas consegue por classes filhas

    constructor(nome:string, ram:number, cpu:number, ligado:boolean) {
        this.nome = nome;
        this.ram = ram
        this.cpu = cpu
        this.ligado = ligado
    }

    info():void {
        console.log()
        console.log(`Nome..: ${this.nome}`)
        console.log(`RAM...: ${this.ram}`)
        console.log(`CPU...: ${this.cpu}`)
        console.log(`Ligado: ${this.ligado? "Sim":"Não"}`)
        console.log('---------------------------')
    }

    ligar():void {
        this.ligado = true
    }

    desligar():void {
        this.ligado = false
    }

    upRAm(qnt:number):void {
        if (qnt >= 0 && qnt <= 1000) {
            this.ram = qnt
        } else {
            console.log(`A quantidade ${qnt} não é permitida`)
        }
    }

}


const c1 = new Computador("Computador 1", 16, 64, false)
const c2 = new Computador("Escritório", 8, 32.5, false)
const c3 = new Computador("Gamer", 64, 128, false)

c3.ligar()
c3.desligar()

c1.upRAm(100)

c1.info()
c2.info()
c3.info()