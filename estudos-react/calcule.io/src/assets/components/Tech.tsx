function Item({name, know}: {name:string, know:boolean}) {
    return (
        <li className="item">
            {name} {know && ':)'}
        </li> //se know == true -> add ":)"
    ) 
}

const projetos = [ // LISTA DE TODOS OS PROJETOS
    {
        name: "projeto 1",
        concluido: true,
        id: '001'
    },{
        name: "projeto 2",
        concluido: true,
        id: '002'
    },{
        name: "projeto 3",
        concluido: false,
        id: '003'
    },{
        name: "projeto 4",
        concluido: false,
        id: '004'
    },{
        name: "projeto 5",
        concluido: true,
        id: '005'
    }
]

const projetos_concluidos = projetos.filter(p => p.concluido === true)  //FILTREI PROJETOS CONCLUIDOS

export default function Tech() {

    const listItems = projetos_concluidos.map(projeto => <li key={projeto.id}>{projeto.name}</li>) //MAPIEI OS PROJETOS COMO LI's
    console.log(listItems)

    return (
        <>
            <h1>Minhas skills</h1>
            <ul>
                <Item
                name="React"
                know={true}
                />
                <Item
                name="Python"
                know={true}
                />
                <Item
                name="C#"
                know={false}
                />  
            </ul>

            <h1>Alguns projetos</h1>
            <ul>
                {listItems}
            </ul>
        </>
    )
}