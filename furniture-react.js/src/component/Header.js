import React, { useState, useRef, useEffect } from 'react';
import '../component/Header.css';

const Header = () => {
  
  const header = useRef(null)

  const [count, setCount] = useState(1);
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
  // header starts out zoomed out with header texts.
  // onwheel shrink container and header texts move up off screen per wheel.
  // when fully zoomed out background texts animation active.

  // Header texts
  // Giant title, description section, cta button and downscroll button.

  return (
    <header onWheel={handleDirection} ref={header}>
        <img src={require('../Assets/img/header-img (3).jpg')}
        style={{ animation: `${direction}Scale${count} 1s ease-in forwards` }} 
        alt="" />
    </header>
  )
}

export default Header