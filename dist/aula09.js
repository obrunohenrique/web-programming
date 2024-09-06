"use strict";
/*ENUMERADORES - ENUM */
// São conjuntos de dados que podemos utilizar e classificar por valores numerais e textuais
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
// console.log(dias.quarta)
// console.log(dias['domingo'])
// console.log(dias[1])
let d = new Date();
console.log(dias[d.getDay()]);
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["vermelho"] = "#f00";
    cores["verde"] = "#0f0";
    cores["azul"] = "#00f";
})(cores || (cores = {}));
console.log(cores.branco);
var typeUser;
(function (typeUser) {
    typeUser[typeUser["user"] = 0] = "user";
    typeUser[typeUser["admin"] = 1] = "admin";
    typeUser[typeUser["super"] = 2] = "super";
})(typeUser || (typeUser = {}));
const tipo = typeUser.admin;
console.log(tipo);
//# sourceMappingURL=aula09.js.map