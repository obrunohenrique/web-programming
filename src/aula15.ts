// Parâmetro REST

function fsmoa(...n:number[]):number { // "..." no início
    let s:number = 0
    n.forEach((en)=>{
        s += en
    })
    return s
}

console.log(fsmoa(30, 10, 40, 10, 5))