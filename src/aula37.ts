// STATIC - criar membros estáticos, seja propriedade, seja método.
// Ao instanciar diferentes objetos, suas propriedades são direcionadas para endereços de memória distintos.
// com Static todos os objetos instanciados vão remeter o membro static para o mesmo endereço de memória.

import { Globais } from "./globais";

Globais.teste = 20

console.log(Globais.teste)
console.log(Globais.objeto)