import React, { useState, useRef, useEffect } from 'react';
import '../component/Header.css';

const Header = () => {
  
  const header = useRef(null)

  const [count, setCount] = useState(0);

  const handleWheel = ({ deltaY }) => {
    setCount((currentCount) =>
      deltaY > 0 ? currentCount + 1 : currentCount - 1
    );
  };


  const handleDirection = (event) => {
    const value = event.deltaY;
    let way = '';  // Make this value global and part of animation name.
    if (value > 0) {
      way = 'up'
      console.log(way)
    } else if (value < 0) {
      way = 'down'
      console.log(way)
    }
  }

  
  console.log(count);

  
  

  return (
    <header onWheel={handleDirection} ref={header}>
        <img src={require('../Assets/img/header-img (3).jpg')}
        style={{ animation: `scaleImg${count} 2s ease forwards` }}  // add up or down animation direction.
        alt="" />
    </header>
  )
}

export default Header