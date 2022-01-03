import './App.css';
import borderCollie from './media/Border_collie.jpg'
import rhodesian from './media/rhodesian.jpg'
import logo from './media/Logo.png'
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
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
            <CardFuncion nombreRaza="BorderCollie" img={borderCollie} color='backgroundRojo'/>
            <CardFuncion nombreRaza="Rhodesian" img={rhodesian} color='backgroundVerde'/>
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

function CardFuncion(props){
    return(
        <li className="card" className={props.color}>
                    <div  className="contenedorImagen">
                        <img src={props.img} alt={props.nombreRaza} />
                    </div>
                    <span className="title">{props.nombreRaza}</span>
                    <div className="emoticones">
                        <i className="fas fa-heart" className="corazon">150</i>
                        <i className="far fa-comment" className="comentario">1.5k</i>
                        <i className="fas fa-eye" className="ojo">120</i> 
                    </div>    
                </li>
    )
}


let a = 5;
let bob = a => a + 100;


export default App;
