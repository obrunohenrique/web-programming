// NAMESPACES - Forma de organizanização/direcionar conteúdos

namespace Veiculos {
    enum Cores{"Preto", "Branco", "Vermelho", "Amarelo", "Azul", "Prata"}

    export abstract class Carro {
        private nome:string
        private motor:Motores.Motor
        private cor:string
    
        constructor(nome:string,motor:Motores.Motor, cor:Cores) {
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }

        public ligar() {
            this.motor.liga = true
        }

        public desligar() {
            this.motor.liga = false
        }

        get minhaCor() {
            return this.cor
        }

        get meuNome() {
            return this.nome
        }

        get estouLigado() {
            return (this.motor.liga?"Sim":"Não")
        }

        get minhaPot() {
            return this.motor.potencia
        }
    }

    export class CarroEsportivo extends Carro {
        constructor(nome:string, cor:Cores) {
            super(nome, new Motores.Motor(300, 6, new Motores.Turbo(100)), cor)
        }
    }

    export class CarroPopular extends Carro {
        constructor(nome:string, cor:Cores) {
            super(nome, new Motores.Motor(100, 3), cor)
        }
    }
}



namespace Motores {

    export class Turbo {
        private pot:number

        constructor (pot:number) {
            this.pot = pot
        }

        get potencia() {
            return this.pot
        }
    }
    
    export class Motor {
        private ligado:boolean
        private cilindros:number
        private pot:number;
    
        constructor(pot:number,cilindros:number, turbo?:Turbo) {
            this.ligado = false
            this.cilindros = cilindros
            this.pot = pot + (turbo?turbo.potencia:0)
        }

        set liga(ligado:boolean) {
            this.ligado = ligado
        }

        get liga() {
            return this.ligado
        }

        get potencia() {
            return this.pot
        }
    }
}


const carro1 = new Veiculos.CarroEsportivo("Camaro", 3)
const carro2 = new Veiculos.CarroEsportivo("Ferrari", 2)
const carro3 = new Veiculos.CarroPopular("Fiat uno", 5)
const carro4 = new Veiculos.CarroPopular("ONIX", 0)

carro2.ligar()

console.log(carro1)
console.log(carro2)
console.log(carro3)
console.log(carro4)
