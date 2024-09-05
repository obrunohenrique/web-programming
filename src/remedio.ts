import { Produto } from "./Produto"


class Remedio extends Produto  {
    public categoria: string
    public num_capsulas: number

    constructor(nome:string, preco:number,codigo:string, img:string, categoria:string, num_capsulas:number) {
        super(nome,preco,codigo, img)
        this.categoria = categoria
        this.num_capsulas = num_capsulas
    }
}

const paracetamol = new Remedio("paracetamol", 23.50, "123f", "paracetamol.png", "analgésico", 20)

console.log(paracetamol)
