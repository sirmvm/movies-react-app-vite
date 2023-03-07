//Representando cada una de las pelicula
import "./movieCard.css"
import {Link} from "react-router-dom";
import { useState } from "react";

export function MovieCard({movie}){
    //poster_path es la ruta de la imagen
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    return(
        <li className="movie-card">
            {/* Link es un elemento de react-router-dom
            Link indica que una vez presionado se redireccione a la pagina que uno desea pasando en este caso el id de movie*/}
            <Link to={"/details/"+movie.id}>
                <img class="img-card" width={300} height={400} src={imageUrl} alt={movie.title}></img>
                
            </Link>
            <div className="title-card">{movie.title} <MyLikes/></div>
            
            
            
        </li>
        
    )

}

function MyLikes() {
    const [count, setCount] = useState(0);

    function handleClick() 
    {
        setCount(count + 1);
    }

    return (
        <button className="buttonLike" onClick={handleClick}>
            Like {count}
        </button>
    );
}