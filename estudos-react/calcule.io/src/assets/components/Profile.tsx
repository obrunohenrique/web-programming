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

interface Person {
    name:string;
    imgid:string;
}

function Card({children}: {children:any}) {

    return (
        <div className="profile" style={estilo.theme}>
            {children}
        </div>
    )
}

function Avatar({size, person}: {size:number; person:Person}) {

    return (
        <>
            <img
                src={person.imgid}
                alt={person.name}
                width={size}
                height={size} 
            />
        </>
        
    )
}


function Profile() {
    
    return (
        <>
            <Card>
                
                <Avatar
                    size={100}
                    person={{
                        name: "bruno",
                        imgid: 'https://images.vexels.com/content/196107/preview/chair-front-stroke-41f31d.png'
                    }}
                />
                <h1>Hello World! meu nome é {pessoa.nome}</h1>
                <h2>tenho {pessoa.idade} anos</h2>
                <p>Atuo como {pessoa.profissao}</p>
            </Card>
        </>
    )
}

export default Profile;