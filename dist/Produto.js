"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(nome, preco, codigo, img) {
        this.nome = nome;
        this.preco = preco;
        this.codigo = codigo;
        this.img = img;
    }
    aumentar_preco(valor) {
        this.preco = this.preco + valor;
        console.log(`O preço do produto foi aumentado para ${this.preco}`);
    }
}
exports.Produto = Produto;
//# sourceMappingURL=Produto.js.map