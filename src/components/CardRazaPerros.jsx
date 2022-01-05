import {Link} from "react-router-dom"


function CardRazaPerros(props){
    return(
        <li className="card" className={props.color}>
            <Link to="rhodesian">
            <div  className="contenedorImagen">
                        <img src={props.img} alt={props.nombreRaza} />
                    </div>
                    <span className="title">{props.nombreRaza}</span>
                    <div className="emoticones">
                        <i className="fas fa-heart" className="corazon">150</i>
                        <i className="far fa-comment" className="comentario">1.5k</i>
                        <i className="fas fa-eye" className="ojo">120</i> 
                    </div>    
            </Link>
                </li>
        
            
    )
}

export default CardRazaPerros;