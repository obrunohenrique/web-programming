"use strict";
class Pessoa {
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        if (novoNome.length <= 0) {
            console.log("Nome inválido");
        }
        else {
            this._nome = novoNome;
        }
    }
}
const p1 = new Pessoa("Bruno", 19);
console.log(p1.nome);
p1.nome = "Henrique";
console.log(p1.nome);
//# sourceMappingURL=fap12-09.js.map