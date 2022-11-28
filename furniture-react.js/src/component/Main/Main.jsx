import React from 'react'
import {useState, useRef, useEffect} from 'react';
import '../Main/Main.css';

const Main = () => {

  const mainRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (mainRef.current) observer.observe(mainRef.current);

    return () => {
      if(mainRef.current) observer.unobserve(mainRef.current)
    }
  }, [mainRef, options])

  // main image = 557,500 x 780.500

  // carousel at the bottom of this section, auto moving.
  return (
    <article className="main-section">

       <h3 className="main-title" >
        THIS IS DECK-TECH.<br/> 
        WE'LL COME IN EVEN TO THOSE<br/>
        WHO ARE COMPLETELY<br/>
        INDIFFERENT TO<br/>
        SKATEBOARDING.</h3>
        
    <div className="main-section-container">
      <div className="image-container">
        <img src={require('../img/img-6.jpg')} alt="" className="main-img-2" ref={mainRef}
        style={{animation: `${isVisible ? 'slideImage 3s ease forwards': ''}`}} />
      </div>
        <div className="main-text-container">
          <img src={require('../img/img-9.jpg')} alt="" className="main-img-1"
           style={{animation: `${isVisible ? 'popup 3s ease forwards': ''}`}}
          />
            <h5 className="main-text-title">WHO HAS TRIED IT, KNOWS EVERYTHING. THOSE WHO HAVEN'T - GET READY FOR THE DOPAMINE THIRST OF "THAT VERY TASTE"</h5>
            <p className="main-text-desc">Our goal is not ice cream. It would be quite simple. We need to make you "touched" when you, for example, bite into an Eskimo. It is difficult to do, but we do it. How? We do not tolerate simplifications: neither in tastes, nor in ingredients, nor in production.<br/> <br/>Pistachio, for example, we buy on a farm in the Bronte region, Sicily. We order Alfonso mango from India, and chocolate is brought to us directly from Belgium. Our Japanese matcha tea is exclusively of the Sagano variety.</p>
            <button className="about-cta">ABOUT US</button>
        </div>
        <div className="image-container">
        <img src={require('../img/img-5.jpg')} alt="" className="main-img-3" ref={mainRef}
        style={{animation: `${isVisible ? 'slideImage 3s ease forwards': ''}`}} />
        </div>
    </div>
        
    </article>
  )
}

export default Main