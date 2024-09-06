// NULL - UNDEFINED - UNKNOWN

let vnome:string|null; // NULL <> vazio, ele não é "nada", ele é o tipo que possui o vazio.
vnome = null 
console.log(vnome)

let vnome2; //Ela é do tipo any, mas seu valor é undefined
console.log(vnome2)

let vnome3:unknown = 10
let vnum:any = vnome3   // Tipo desconhecido, ex: pode ter um number, mas não é um number
console.log(vnum)       // Pode ser atribuído a outras varariaveis unknown / any


