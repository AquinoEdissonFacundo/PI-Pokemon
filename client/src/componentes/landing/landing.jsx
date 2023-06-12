import React from 'react'
import './landing.css'
import {Link} from 'react-router-dom'
const LandingPage = ()=>{
    
    return(
  <div class='contenedor'>
    <h1 class='text'>PokeHub</h1>
    <Link to='/home' className='button'>
        <span>Home</span>
      </Link>
  </div>
    );
};
export default LandingPage;