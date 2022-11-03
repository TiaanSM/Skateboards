import React, { useState, useRef, useEffect } from 'react';
import '../component/Header.css';

const Header = () => {
  
  const header = useRef(null)

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  }

  const decreaseCount = () => {
    setCount(count - 1);
  }

  const handleScroll = (event) => {

    if (event.deltaY > 0) {
      increaseCount();

    } else if (event.deltaY < 0) {
      decreaseCount();
    }
  }
  console.log(count)

  return (
    <header onWheel={handleScroll} ref={header}>
        <img src={require('../Assets/img/header-img (3).jpg')}
        style={{ animation: `scaleImg${count} 2s ease forwards` }}
        alt="" />
    </header>
  )
}

export default Header