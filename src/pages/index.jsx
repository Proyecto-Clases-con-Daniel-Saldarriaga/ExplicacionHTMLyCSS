import CardRazaPerros from "components/CardRazaPerros";
import borderCollie from 'media/Border_collie.jpg'
import rhodesian from 'media/rhodesian.jpg'



function Index(){
    return (

            <section>
        <h1 className="titulo-principal">Razas de perros</h1>
        <ul className="contenerCards">
        <CardRazaPerros nombreRaza="BorderCollie" img={borderCollie} color='backgroundRojo'/>
        <CardRazaPerros nombreRaza="Rhodesian" img={rhodesian} color='backgroundVerde'/>
        <CardRazaPerros nombreRaza="BorderCollie" img={borderCollie} color='backgroundRojo'/>
        <CardRazaPerros nombreRaza="Rhodesian" img={rhodesian} color='backgroundVerde'/>
        </ul>
    </section>

);
}

export default Index;