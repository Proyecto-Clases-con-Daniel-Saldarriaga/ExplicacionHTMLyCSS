import logo from 'media/Logo.png'

const Header = () =>{
    return(
        <header>
    <ul className="navbar">
        <li><img src={logo} className="logo" alt="Logo" /></li>
        <li><button className="mainButtom">Nuevo post</button></li>
        <li><button className="secondaryButtom">Login</button></li>
        <li><button className="mainButtom">Registro</button></li>
        <li>
            <div className="buscar">
                <input placeholder="Buscar raza de perro" />
                <i className="fas fa-search"></i>
            </div>
        </li>
    </ul>
</header>
    )
}

export default Header;