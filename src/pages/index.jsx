import CardRazaPerros from "components/CardRazaPerros";
import Header from "components/Header";
import borderCollie from 'media/Border_collie.jpg'
import rhodesian from 'media/rhodesian.jpg'
import Footer from 'components/Footer'


function Index(){
    return (
        <div>
    <Header/>
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
    <Footer/>
</footer>
</div>
);
}

export default Index;