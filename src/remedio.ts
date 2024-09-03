class Remedio extends Produto {
    num_capsulas: number

    constructor(nome:string, preco:number, img:string, num_capsulas:number) {
        super(nome, preco, img)
        this.num_capsulas = num_capsulas
    }
}
