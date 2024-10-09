function Form() {
    return(
        <form onSubmit={e => {
            e.preventDefault() //ao invés de só emitir o alerta. eu mando previnir o comportamento padrão
            alert("submetendo...")
            }}>
            <h2>prevent default behavior</h2>
            <input type="text" name="input" id="input" />
            <button>enviar</button>
        </form>
    )
}

export default Form;