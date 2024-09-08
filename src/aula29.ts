// GENERICS - Um componente que pode funcionar com vários tipos

function fteste<T, U>(v:T, r:U):U {
    return r
}

console.log(fteste<number, string>(10, "10"))     //  pode operar com qualquer tipo de valor desde que seja especificado.
console.log(fteste<string, boolean>("10", false))

class C_teste<T> {                                 // Pode ser usado em classes
    public valor:T

    constructor(valor:T) {
        this.valor = valor
    }
}

const cteste1 = new C_teste<string>("1564")
console.log(cteste1)