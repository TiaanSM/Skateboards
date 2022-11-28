import React, { useState, useRef, useEffect } from 'react';
import '../Hero/Header.css';
import OverlayHero from './OverlayHero';

const Header = () => {
  
  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState('down');

  const handleDirection = (event) => {

    const value = event.deltaY;

    if (value > 0 && count <= 6) {
      setCount((count) => count + 1);
      setDirection((direction) => direction = 'down');

    } else if (value < 0 && count >= 1) {
      setCount((count) => count - 1);
      setDirection((direction) => direction = 'up');
    } else {
      setCount((count) => count + 1 - 1);
    }

  } 

  console.log(count);
  
  return (
    
    <header onWheel={handleDirection}>
      <div className="flex">
      <div  
      className={count < 7 ? 'img-container' : 'img-container-2'}
      style={{ animation: `${direction}Scale${count} 0.2s ease forwards`}}
      >

        <img src={require('../img/header-img (3).jpg')} alt="Skater" />

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