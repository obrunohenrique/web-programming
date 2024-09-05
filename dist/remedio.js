"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Produto_1 = require("./Produto");
class Remedio extends Produto_1.Produto {
    constructor(nome, preco, codigo, img, categoria, num_capsulas) {
        super(nome, preco, codigo, img);
        this.categoria = categoria;
        this.num_capsulas = num_capsulas;
    }
}
const paracetamol = new Remedio("paracetamol", 23.50, "123f", "paracetamol.png", "analgésico", 20);
console.log(paracetamol);
//# sourceMappingURL=remedio.js.map