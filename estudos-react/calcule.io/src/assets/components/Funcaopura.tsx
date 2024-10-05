function Tentativa({num}: {num:number}) {
    return <h2>Tentativas de finalizar esse script: {num}</h2>
}

export default function FuncaoPura() {
    let tent = []

    for(let i:number = 1; i <= 10; i++) {
        tent.push(<Tentativa num={i} key={i}/>)
    }

    return tent
}