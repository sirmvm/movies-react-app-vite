//enroutar la app

import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import {LandingPage} from '../pages/landingPage';
import { MovieDetails } from '../pages/movieDetails';


export function MyRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage/>}/>
                <Route exact path="/details/:id" element={<MovieDetails/>}/>
            </Routes>
        </Router>
    )
}

