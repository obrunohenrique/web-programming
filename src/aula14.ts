// ARROW FUNCTION

const teste = (txt:string='...'): void => {
    console.log(txt);
}

teste("Eai, my brother")
teste()

const somaf = (numeros:number[]):number => {
    let soma:number = 0
    numeros.forEach((n)=>{
        soma += n;
    })

    return soma
}

let numer:number[] = [1,2,3,4,5,6]
console.log(somaf(numer))