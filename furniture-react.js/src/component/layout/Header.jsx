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
  // header starts out zoomed out with header texts.
  // onwheel shrink container and header texts move up off screen per wheel.
  // when fully zoomed out background texts animation active.

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

      </div>
    </header>
  )
}

export default Header