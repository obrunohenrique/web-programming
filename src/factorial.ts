function factorial(num:number): number{

    if (num === 0) {
        return 1
    } else {
        return num *= factorial(num - 1)
    }
}

let numero:number = 5
console.log(factorial(numero))