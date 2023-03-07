import {useState,useEffect} from "react";
import {get} from "../db/db";
import {useParams} from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";
import "./movieDetails.css";


export function MovieDetails(){
    //useParams es un hook de react-router-dom
    //useParams nos permite obtener el id de la pelicula
    const{id} = useParams()
    const[movie,setMovie] = useState([])
    const[generos,setGeneros] = useState([])
    
    
    useEffect(()=>{
        get("/movie/"+id).then((data)=>
        {
            setMovie(data)
            setGeneros(data.genres[0])
            
        })
    },[id]) //cuando cambie el id, volver a ejecutar el useEffect
    const imageUrl = getMovieImg(movie.poster_path,500)

    return(
        <div className="details-container">
            <img src={imageUrl} className="col imagens"/>   
            <div className="col movie-details">
                <p className="title-movie">
                    {movie.title}
                </p>
                <p>
                    <strong>Genero: </strong>{generos.name}
                </p>
                <p>
                    <strong>Descripción: </strong>{movie.overview}
                </p>
            </div>
        </div>
    )
}