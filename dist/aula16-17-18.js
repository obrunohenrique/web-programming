"use strict";
class Computador {
    constructor(nome, ram, cpu, ligado) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = ligado;
    }
    info() {
        console.log();
        console.log(`Nome: ${this.nome}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`CPU: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado ? "Sim" : "Não"}`);
        console.log('---------------------------');
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
}
const c1 = new Computador("Computador 1", 16, 64, false);
const c2 = new Computador("Escritório", 8, 32.5, false);
const c3 = new Computador("Gamer", 64, 128, false);
c3.ligar();
c2.ligar();
c3.desligar();
c1.info();
c2.info();
c3.info();
//# sourceMappingURL=aula16-17-18.js.map