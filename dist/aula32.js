// NAMESPACES - Forma de organizanização/direcionar conteúdos
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["Preto"] = 0] = "Preto";
        Cores[Cores["Branco"] = 1] = "Branco";
        Cores[Cores["Vermelho"] = 2] = "Vermelho";
        Cores[Cores["Amarelo"] = 3] = "Amarelo";
        Cores[Cores["Azul"] = 4] = "Azul";
        Cores[Cores["Prata"] = 5] = "Prata";
    })(Cores || (Cores = {}));
    class Carro {
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        ligar() {
            this.motor.liga = true;
        }
        desligar() {
            this.motor.liga = false;
        }
        get minhaCor() {
            return this.cor;
        }
        get meuNome() {
            return this.nome;
        }
        get estouLigado() {
            return (this.motor.liga ? "Sim" : "Não");
        }
        get minhaPot() {
            return this.motor.potencia;
        }
    }
    Veiculos.Carro = Carro;
    class CarroEsportivo extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(300, 6, new Motores.Turbo(100)), cor);
        }
    }
    Veiculos.CarroEsportivo = CarroEsportivo;
    class CarroPopular extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(100, 3), cor);
        }
    }
    Veiculos.CarroPopular = CarroPopular;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        constructor(pot) {
            this.pot = pot;
        }
        get potencia() {
            return this.pot;
        }
    }
    Motores.Turbo = Turbo;
    class Motor {
        constructor(pot, cilindros, turbo) {
            this.ligado = false;
            this.cilindros = cilindros;
            this.pot = pot + (turbo ? turbo.potencia : 0);
        }
        set liga(ligado) {
            this.ligado = ligado;
        }
        get liga() {
            return this.ligado;
        }
        get potencia() {
            return this.pot;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const carro1 = new Veiculos.CarroEsportivo("Camaro", 3);
const carro2 = new Veiculos.CarroEsportivo("Ferrari", 2);
const carro3 = new Veiculos.CarroPopular("Fiat uno", 5);
const carro4 = new Veiculos.CarroPopular("ONIX", 0);
carro2.ligar();
console.log(carro1);
console.log(carro2);
console.log(carro3);
console.log(carro4);
//# sourceMappingURL=aula32.js.map