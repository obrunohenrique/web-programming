"use strict";
// GENERICS - Um componente que pode funcionar com vários tipos
function fteste(v, r) {
    return r;
}
console.log(fteste(10, "10")); //  pode operar com qualquer tipo de valor desde que seja especificado.
console.log(fteste("10", false));
class C_teste {
    constructor(valor) {
        this.valor = valor;
    }
}
const cteste1 = new C_teste("1564");
console.log(cteste1);
//# sourceMappingURL=aula29.js.map