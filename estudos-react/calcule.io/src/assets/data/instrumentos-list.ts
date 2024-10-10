interface Instrumento {
    nome:string,
    preco:number,
    url:string,
    descricao:string
}

const instrumentoslist: Instrumento[] = [
    {
        nome: "violão",
        preco: 350.00,
        url: "https://s3.wasabisys.com/michael.smserver.com.br/violao-acustico-michael-antares-vm19s_5470.png",
        descricao: "O violão é um instrumento musical de cordas dedilhadas, com um corpo em forma de oito e um braço que sustenta as cordas. É um dos instrumentos mais populares do mundo e é usado em vários gêneros musicais, como música clássica, rock, pop, folk e jazz."
    },
    {
        nome: "guitarra",
        preco: 850.00,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW2-iEF7zKcsLU_bj35gYRML0zzVxe5ZacHw&s",
        descricao: "A guitarra é um instrumento musical de cordas dedilhadas, com um braço e um corpo em formato de 8, que pode ser acústico ou elétrico."
    }
]

export default instrumentoslist;