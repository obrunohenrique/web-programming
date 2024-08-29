let fibonacci: Array<number> = [1, 1]
let num_sequential: number = 6

function fibonacci_sequencial(len: number, lista: number[]): number[] {
    if (lista.length === len) {
        return lista

    } else {
        let add: number = lista.indexOf(lista.length - 1) + lista.indexOf(lista.length - 2)
        lista.push(add)

        return fibonacci_sequencial(len, lista) 
    }
}

console.log(fibonacci_sequencial(num_sequential, fibonacci))