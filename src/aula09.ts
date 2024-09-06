/*ENUMERADORES - ENUM */

// São conjuntos de dados que podemos utilizar e classificar por valores numerais e textuais

enum dias {
    domingo = 0,
    segunda = 1,
    terca = 2,
    quarta = 3,
    quinta = 4,
    sexta = 5,
    sabado = 6
}

// console.log(dias.quarta)
// console.log(dias['domingo'])
// console.log(dias[1])

let d = new Date()
console.log(dias[d.getDay()])

enum cores {
    branco = "#fff",
    preto = "#000",
    vermelho = "#f00",
    verde = "#0f0",
    azul = "#00f"
}

console.log(cores.branco)

enum typeUser {
    user,
    admin,
    super
}

const tipo: typeUser = typeUser.admin
console.log(tipo)