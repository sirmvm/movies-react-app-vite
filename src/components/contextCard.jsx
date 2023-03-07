// Engloba las cartas de peliculas

import { useEffect } from "react";
import{useState} from "react";
import {get} from "../db/db";
import {MovieCard} from "../components/movieCard";
import "./contextCard.css"


export function ContextCard(){
    const[movies,SetMovies] = useState([]);
    useEffect (()=>
    {
        //la funcion de db es get()
        get("/discover/movie").then((data)=>
        {
            console.log(data);
            SetMovies(data.results);
        })
    },[])

    return(
    <ul className="container-return">
        {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
        ))}
    </ul>
    )

}