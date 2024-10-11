import { useState } from "react"

function Preservstate() {
    
    const [to, setTo] = useState("Alice")
    const [message, setMessage] = useState("Oi!")
    
    function handleSubmit(e:any) {
        e.preventDefault();
        setTimeout(() => {
            alert(`você disse ${message} to ${to}`)
        }, 3000)
    }

    return (

        <>
        <h1>Forms</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Para: {' '}
                <select value={to}
                onChange={e => {setTo(e.target.value)}}>
                <option value="Alice">Alice</option>
                <option value="Bob">Bob</option>
                </select>    
            </label>

            <textarea
            placeholder="mensagem"
            value={message}
            onChange={e => setMessage(e.target.value)}
            />

            <button type="submit">Enviar</button>
        </form>
        </>

    )
}

export default Preservstate