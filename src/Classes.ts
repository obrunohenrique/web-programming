const Coisas:string[] = ["Corda", "Mochila", "Martelo", "Chave de fenda"]

export class Pessoa{
    nome:string;
    altura:number

    constructor(nome:string, altura:number) {
        this.nome = nome;
        this.altura = altura
    }
}

class Objeto {
    nome:string

    constructor(nome:string) {
        this.nome = nome
    }
}

export default Pessoa
export {Coisas,Objeto}