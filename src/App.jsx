import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import { MyRoutes } from './routers/routes';
import banner from './img/banner.jpg'


function App() {
  return (
    <div>
      <header>
        <img className="banner" src={banner}></img>
        <h1 className='title-1'>Centro de películas Matias V</h1>
      </header>
      <MyRoutes/>
    </div>
    
      

    
    
  );
}

export default App;
