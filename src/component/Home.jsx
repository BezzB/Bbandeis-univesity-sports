import React from 'react'
import {MyCarousel} from './MyCarousel'
import Homepage from "./Homepage"
import { Footer } from './Footer';

export const Home = () => {
  return (
    <div className='hero'>
      <div className="card text-white border-0">
        <MyCarousel />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0"> LATEST SPORTING ACTIVITIES </h5>
            <p className="card-text lead fs-2">
              JOIN A CLUB OF YOUR CHOICE TODAY
             </p>
            
            </div>
        
        </div>
        
      </div>    
    <Homepage />
    <Footer /> 
    </div>
  );
};


