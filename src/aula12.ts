function logar(user:string, senha:string):void {
    console.log(`User..: ${user}`)
    console.log(`Senha.: ${senha}`)
}
logar('BRuno', "1234")

function soma2(n1:number, n2:number):number {
    let soma:number = n1 + n2
    return soma
}
const res:number = soma2(3, 5)
console.log(res)

