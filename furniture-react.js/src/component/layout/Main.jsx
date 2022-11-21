import React from 'react'
import { useInView } from 'react-intersection-observer';
import '../styles/Main.css';

const Main = () => {

  // main image = 557,500 x 780.500

  // carousel at the bottom of this section, auto moving.
  return (
    <article className="main-section">

       <h3 className="main-title">
        THIS IS DECK-TECH.<br/> 
        WE'LL COME IN EVEN TO THOSE<br/>
        WHO ARE COMPLETELY<br/>
        INDIFFERENT TO<br/>
        SKATEBOARDING.</h3>
        
    <div className="main-section-container">
      <div className="image-container">
        <img src={require('../img/img-6.jpg')} alt="" className="main-img-2" />
      </div>
        <div className="main-text-container">
          <inView>
          <img src={require('../img/img-9.jpg')} alt="" className="main-img-1" ref={ref} />
          </inView>
            <h5 className="main-text-title">WHO HAS TRIED IT, KNOWS EVERYTHING. THOSE WHO HAVEN'T - GET READY FOR THE DOPAMINE THIRST OF "THAT VERY TASTE"</h5>
            <p className="main-text-desc">Our goal is not ice cream. It would be quite simple. We need to make you "touched" when you, for example, bite into an Eskimo. It is difficult to do, but we do it. How? We do not tolerate simplifications: neither in tastes, nor in ingredients, nor in production. Pistachio, for example, we buy on a farm in the Bronte region, Sicily. We order Alfonso mango from India, and chocolate is brought to us directly from Belgium. Our Japanese matcha tea is exclusively of the Sagano variety.</p>
            <button className="about-cta">ABOUT US</button>
        </div>
        <div className="image-container">
        <img src={require('../img/img-5.jpg')} alt="" className="main-img-3" />
        </div>
    </div>
        
    </article>
  )
}

export default Main