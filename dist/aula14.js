"use strict";
// ARROW FUNCTION
const teste = (txt = '...') => {
    console.log(txt);
};
teste("Eai, my brother");
teste();
const somaf = (numeros) => {
    let soma = 0;
    numeros.forEach((n) => {
        soma += n;
    });
    return soma;
};
let numer = [1, 2, 3, 4, 5, 6];
console.log(somaf(numer));
//# sourceMappingURL=aula14.js.map