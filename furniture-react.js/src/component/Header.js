import React, { useState, useRef, useEffect } from 'react';
import '../component/Header.css';

const Header = () => {
  
  const header = useRef(null)

  const [count, setCount] = useState(0);
  /*
  const handleWheel = ({ deltaY }) => {
    setCount((currentCount) =>
      deltaY > 0 ? currentCount + 1 : currentCount - 1
    );
  };
  */
  let [direction, setDirection] = useState(null)

  const handleDirection = (event) => {
    const value = event.deltaY;
    if (value > 0) {
      setCount((currentCount) => count + 1)
      setDirection((currentDirection) => direction = 'down')
    } else if (value < 0) {
      setCount((currentCount) => count - 1)
      setDirection((currentDirection) => direction = 'up')
    }
  }

  console.log(count);



  return (
    <header onWheel={handleDirection} ref={header}>
        <img src={require('../Assets/img/header-img (3).jpg')}
        style={{ animation: `${direction}Scale${count} 2s ease forwards` }}  // add up or down animation direction.
        alt="" />
    </header>
  )
}

export default Header