"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Objeto = exports.Coisas = exports.Pessoa = void 0;
const Coisas = ["Corda", "Mochila", "Martelo", "Chave de fenda"];
exports.Coisas = Coisas;
class Pessoa {
    constructor(nome, altura) {
        this.nome = nome;
        this.altura = altura;
    }
}
exports.Pessoa = Pessoa;
class Objeto {
    constructor(nome) {
        this.nome = nome;
    }
}
exports.Objeto = Objeto;
exports.default = Pessoa;
//# sourceMappingURL=Classes.js.map