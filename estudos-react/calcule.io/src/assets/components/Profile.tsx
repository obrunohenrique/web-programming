const pessoa = {
    nome: "Bruno",
    idade: 19,
    profissao: "desenvolvedor web"
}

const estilo = {
    theme: {
        backgroundColor: 'black',
        color: 'white',
    }
}

function Profile() {
    
    return (
        <>
            <div className="profile" style={estilo.theme}>
                <h1>Hello World! meu nome é {pessoa.nome}</h1>
                <h2>tenho {pessoa.idade} anos</h2>
                <p>Atuo como {pessoa.profissao}</p>
            </div>
        </>
    )
}

export default Profile;