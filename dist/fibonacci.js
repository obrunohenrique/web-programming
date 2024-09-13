let fibonacci = [1, 1];
let num_sequential = 6;
function fibonacci_sequencial(len, lista) {
    if (lista.length === len) {
        return lista;
    }
    else {
        let add = lista[lista.length - 1] + lista[lista.length - 2];
        lista.push(add);
        return fibonacci_sequencial(len, lista);
    }
}
console.log(fibonacci_sequencial(num_sequential, fibonacci));
//# sourceMappingURL=fibonacci.js.map