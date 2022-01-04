import CardRazaPerros from "components/CardRazaPerros";
import borderCollie from 'media/Border_collie.jpg'
import rhodesian from 'media/rhodesian.jpg'
import logo from 'media/Logo.png'

function Index(){
    return (
        <div>
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
<main>
    <section>
        <h1 className="titulo-principal">Razas de perros</h1>
        <ul className="contenerCards">
        <CardRazaPerros nombreRaza="BorderCollie" img={borderCollie} color='backgroundRojo'/>
        <CardRazaPerros nombreRaza="Rhodesian" img={rhodesian} color='backgroundVerde'/>
        </ul>
    </section>
    <section>
    </section>
</main>
<footer>
</footer>
</div>
);
}

export default Index;