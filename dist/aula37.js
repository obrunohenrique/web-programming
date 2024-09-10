"use strict";
// STATIC - criar membros estáticos, seja propriedade, seja método.
// Ao instanciar diferentes objetos, suas propriedades são direcionadas para endereços de memória distintos.
// com Static todos os objetos instanciados vão remeter o membro static para o mesmo endereço de memória.
Object.defineProperty(exports, "__esModule", { value: true });
const globais_1 = require("./globais");
globais_1.Globais.teste = 20;
console.log(globais_1.Globais.teste);
console.log(globais_1.Globais.objeto);
//# sourceMappingURL=aula37.js.map