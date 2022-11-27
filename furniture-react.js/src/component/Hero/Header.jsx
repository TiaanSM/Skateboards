import React, { useState, useRef, useEffect } from 'react';
import '../Hero/Header.css';
import OverlayHero from './OverlayHero';

import {motion, useScroll} from 'framer-motion';

const Header = () => {
  
  const { scrollY } = useScroll();
    
  useEffect(() => {
    return scrollY.onChange((latest) => {
      console.log("Page scroll:", latest / 100 * 1)
    })
  }, [])


  return (
    <header>

      <div className="img-container" >
        <img src={require('../img/header-img (3).jpg')} alt="Skater" />
      </div>

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
<header onWheel={handleDirection} ref={header}>

      <div className="img-container" 
      style={{ animation: `${direction}Scale${count} 0.2s ease forwards`}}>
        <img src={require('../img/header-img (3).jpg')} alt="Skater" />
      </div>
      <OverlayHero />

      <div className="background-text-container">
        <span className="scrolling-texts">* WE ALWAYS CHECK THE QUALITY *<span className="hollow-texts"> WE ALWAYS CHECK THE QUALITY * </span>* ART ON MAPLE MATERPIECES *</span>
        <span className="scrolling-texts"><span className="hollow-texts"> RECYCLED MATERIAL * </span>* RECYCLED MATERIALS *<span className="hollow-texts"> RECYCLED MATERIAL * </span></span>
        <span className="scrolling-texts">* ART ON MAPLE MATERPIECES *<span className="hollow-texts"> ART ON MAPLE MASTERPIECES * </span>* ART ON MAPLE MATERPIECES *</span>
      </div>
    </header>

  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState('down');
  const [isVisible, setIsVisible] = useState(false);

  const header = useRef(null);

  const callbackFunction = (entries) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (header.current) observer.observe(header.current)

    return () => {
      if(header.current) observer.unobserve(header.current)
    }
  }, [header, options])


  const handleDirection = (event) => {

   if (isVisible) {
    const value = event.deltaY;

    if (value > 0 && count <= 6) {
      setCount((count) => count + 1);
      setDirection((direction) => direction = 'down');

    } else if (value < 0 && count >= 1) {
      setCount((count) => count - 1);
      setDirection((direction) => direction = 'up');
    }
   } 
  }

  if (isVisible && count < 6) {
    document.body.style.overflow = 'hidden'
  } else if (isVisible && count === 7) {
    document.body.style.overflow = ''
  }

  console.log(count);
*/