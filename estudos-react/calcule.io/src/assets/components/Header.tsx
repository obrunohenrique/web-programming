import { Link } from "react-router-dom";

function Header () {

    return (
        <>
            <header>
                <nav style={{
                    backgroundColor: 'black',
                    color: 'white'
                }}>
                    <ul className="flex">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sobre">Sobre mim</Link></li>
                        <li><Link to='/instrumentos'>Instrumentos</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;