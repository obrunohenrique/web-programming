class Pessoa {
    private _nome:string;
    private _idade:number

    constructor(nome:string, idade:number) {
        this._nome = nome;
        this._idade = idade
    }

    get nome():string {
        return this._nome
    }

    set nome(novoNome:string) {
        if (novoNome.length <= 0) {
            console.log("Nome inválido")
        } else {
            this._nome = novoNome
        }
    }
}

const p1 = new Pessoa("Bruno", 19)
console.log(p1.nome)

p1.nome = "Henrique"
console.log(p1.nome)