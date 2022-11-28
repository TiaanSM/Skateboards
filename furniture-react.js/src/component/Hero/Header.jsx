import React, { useState, useRef, useEffect } from 'react';
import '../Hero/Header.css';
import OverlayHero from './OverlayHero';

const Header = () => {

  const headerRef = useRef(null);
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
    if (headerRef.current) observer.observe(headerRef.current);

    return () => {
      if(headerRef.current) observer.unobserve(headerRef.current)
    }
  }, [headerRef, options])

  
  
  return (
    
    <header ref={headerRef} >
      <div className="flex">
        <div className='img-container'>

        <img src={require('../img/header-img (3).jpg')} alt="Skater" className="header-img-1" />

        </div>
      </div>
      <OverlayHero />
      <div className="background-text-container">
        <span className="scrolling-texts">* WE ALWAYS CHECK THE QUALITY *<span className="hollow-texts"> WE ALWAYS CHECK THE QUALITY * </span>* ART ON MAPLE MATERPIECES *</span>
        <span className="scrolling-texts"><span className="hollow-texts"> RECYCLED MATERIAL * </span>* RECYCLED MATERIALS *<span className="hollow-texts"> RECYCLED MATERIAL * </span></span>
        <span className="scrolling-texts">* ART ON MAPLE MATERPIECES *<span className="hollow-texts"> ART ON MAPLE MASTERPIECES * </span>* ART ON MAPLE MATERPIECES *</span>
      </div>
    </header>
  )
}

export default Header

/* 




  
*/