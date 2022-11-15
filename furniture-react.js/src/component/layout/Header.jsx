import React, { useState, useRef, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
  
  const header = useRef(null)

  const [count, setCount] = useState(0);
  let [direction, setDirection] = useState('down');


  const handleDirection = (event) => {
    const value = event.deltaY;
    if (value > 0) {
      setCount((currentCount) => count + 1);
      setDirection((currentDirection) => direction = 'down');
    } else if (value < 0) {
      setCount((currentCount) => count - 1);
      setDirection((currentDirection) => direction = 'up');
    }
  }

  console.log(count);
  
  // Header
  // header scroll down 7, scroll up 6 animation sequences.

  // background texts = requires = text-shadow: 0 0 5px black;

  // Header texts
  // Giant title, description section, cta button and downscroll button.

  // if (count > 6) => container size fixed to last animation size.
  // remove event listener 
  // if (count < 0) => count stop and stays 0
  // if count <= 6 adds even back to header.

  

  return (
    <header onWheel={handleDirection} ref={header}>

      <div className="img-container"
      style={{ animation: `${direction}Scale${count} 0.3s ease-in-out forwards`}}>
        <img src={require('../img/header-img (3).jpg')} alt="" />
      </div>

      <div className="background-text-container">
        <h3>* WE ALWAYS CHECK THE QUALITY *<span> WE ALWAYS CHECK THE QUALITY * </span></h3>
        <h3>* RECYCLED MATERIALS *<span> RECYCLED MATERIAL * </span></h3>
        <h3>* ART ON MAPLE MATERPIECES *<span> ART ON MAPLE MASTERPIECES * </span></h3>
      </div>
    </header>
  )
}

export default Header