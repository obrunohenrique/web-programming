// INTERFACES

interface curso{
    titulo:string;
    des:string;
    iniciarCurso?(teste:string):void;
}

interface cursoProgramacao extends curso{
    aulas:number;
    maxAlunos?:number;
}


let curso1:cursoProgramacao = {
    titulo:"typescript",
    des:"Curso de Typescript",
    aulas:100,
    maxAlunos:50    
}

let curso2:cursoProgramacao = {
    titulo:"Javascript",
    des:"Curso de Javascript",
    aulas:200,
    maxAlunos:80
}

console.log(curso1)
console.log(curso2)

