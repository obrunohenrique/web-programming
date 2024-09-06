/* OBJETOS */

//em TypeScript, o tipo object é muito genérico. Ao definir o tipo object, o TypeScript não sabe quais propriedades específicas estão disponíveis dentro desse objeto.

let dados: { nome: string; idade: number; status: string } = { 
    nome: "Douglas",
    idade: 25,
    status: "A"
}

console.log(typeof(dados))
console.log(dados.nome)