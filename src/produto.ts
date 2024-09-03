class Produto {
    nome: string;
    preco: number;
    img: string;

    constructor(nome:string, preco:number, img:string) {
        this.nome = nome;
        this.preco = preco;
        this.img = img
    }

    aumentar_preco(valor: number): void {
        this.preco = this.preco + valor
        console.log(`O preço do produto foi aumentado para ${this.preco}`)
    }
}

