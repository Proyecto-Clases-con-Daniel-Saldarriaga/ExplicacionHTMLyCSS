import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <ul className="navbar">
            <li><img src="media/Logo.png" className="logo" alt="Logo" /></li>
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
                <li className="card">
                    <div  className="contenedorImagen">
                        <img src="./media/Border_collie.jpg" alt="Foto de un Border_collie" />
                    </div>
                    <span className="title">Border Collie</span>
                    <div className="emoticones">
                        <i className="fas fa-heart" className="corazon">150</i>
                        <i className="far fa-comment" className="comentario">1.5k</i>
                        <i className="fas fa-eye" className="ojo">120</i> 
                    </div>    
                </li>
                <li className="card">
                    <div  className="contenedorImagen">
                        <img src="./media/rhodesian.jpg" alt="Foto de un Rhodesian" /> 
                    </div>
                    <span className="title">Rhodesian</span>
                    <div className="emoticones">
                        <i className="fas fa-heart" className="corazon">450</i>
                        <i className="far fa-comment" className="comentario">1.1k</i>
                        <i className="fas fa-eye" className="ojo">850</i> 
                    </div>               
                </li>
            </ul>
        </section>
        <section></section>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
