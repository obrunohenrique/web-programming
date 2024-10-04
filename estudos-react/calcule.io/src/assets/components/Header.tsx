function Header () {

    return (
        <>
            <header>
                <nav style={{
                    backgroundColor: 'black',
                    color: 'white'
                }}>
                    <ul className="flex">
                        <li>Portifólio</li>
                        <li>Sobre mim</li>
                        <li>Contatos</li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;