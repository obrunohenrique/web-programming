// DESESTRUTURAÇÃO
let av = [10, 20, 30, 40];
// aa = av[0] ASSIM É SEM A ESTRUTURA DE DESESTRUTURAÇÃO
// bb = av[1]
// cc = av[2]
// dd = av[3]
// let [aa, bb, cc, dd]=av
// console.log(aa)
// console.log(bb)
// console.log(cc)
// console.log(dd)
const obj = {
    cor1: 'branco',
    cor2: "preto",
    cor3: "azul",
    cor4: "amarelo"
};
let { cor1, cor2, cor3, cor4 } = obj;
console.log(cor1);
console.log(cor2);
console.log(cor3);
console.log(cor4);
let [n1 = 0, n2 = 0, ...n3] = [65, 54, 98, 87, 54, 16, 21, 35, 874];
console.log(n1);
console.log(n2);
console.log(n3);
//# sourceMappingURL=aula35.js.map