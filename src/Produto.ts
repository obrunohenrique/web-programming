export class Produto {
    public nome: string;
    public preco: number;
    public img: string;
    protected codigo: string

    constructor(nome:string, preco:number, codigo:string, img:string) {
        this.nome = nome;
        this.preco = preco;
        this.codigo = codigo;
        this.img = img;
    }

    aumentar_preco(valor: number): void {
        this.preco = this.preco + valor
        console.log(`O preço do produto foi aumentado para ${this.preco}`)
    }
}

