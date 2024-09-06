function soma(n1:number=0, n2:number=0):number {
    return n1 + n2
}

//INDICAR PARÂMETRO PADRÃO IGUAL AO PYTHON

console.log(soma(5, 5)) // 10
console.log(soma())     // 0


function novoUser(user:string, pass:string, nome?:string):void { // A ? coloca o parâmetro como opcional
    let dados = {user,pass,nome}
    console.log(dados)
}

novoUser("bhfp", "1234")
novoUser("bhfp", "1234", "bruno")