import gato from '../img/gato.png';

export function getMovieImg(path,width) {
    return path?`https://image.tmdb.org/t/p/w${width}${path}`:gato;
    
}

