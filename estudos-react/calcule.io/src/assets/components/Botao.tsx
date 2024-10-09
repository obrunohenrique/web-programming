function Alertbutton({msg, children}: {msg:string, children:string}) {
    
    return (
        <button onClick={e => {
            e.stopPropagation();    //parei a propagação do evento de clique
            alert(msg)              
        }}>
            {children}
        </button>
    )
}

export default function Botao() {

    return (
        <>
        <div onClick={() => alert('você clicou na div')}>

            <h2>Evitando propagação de manipulação de eventos</h2>
            <Alertbutton msg="O filme começou">
                iniciar filme
            </Alertbutton>
            <Alertbutton msg="O filme foi pausado">
                Pause
            </Alertbutton>
        </div>
        </>
    )
}

