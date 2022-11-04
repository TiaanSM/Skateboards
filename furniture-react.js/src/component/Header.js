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

  // Improve code, split components if needed.
  // Change the animation changing origin.
  // Complete header and improve.

  return (
    <header onWheel={handleDirection} ref={header}>
        <img src={require('../Assets/img/header-img (3).jpg')}
        style={{ animation: `${direction}Scale${count} 1s ease-in forwards` }}  // add up or down animation direction.
        alt="" />
    </header>
  )
}

export default Header