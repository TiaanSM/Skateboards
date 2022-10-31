import React from 'react'
import { useState, useEffect } from 'react';


const Header = () => {

  // onWheel image zooms out from full screen to fixed smaller image.
  // element move of screen onWheel

  const scale = () => {

    const onWheel = (e) => {
      console.log(e.deltaY)
    }
    
    if (onWheel > 0) {
        // image zoom out
    } else if (onWheel < 0) {
      // image zoom in
      // transform: scale(1);
    }
  }
  
  // Counts the scroll value
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    console.log(position);
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  }, [scrollPosition]);


  // Connect the scroll value to the scale amount of the image.
  // image starts out at full screen then shrinks to a fixed size.

  // if the fixed size is met then the header will unlock from 100vh and continue to next section.

  // animation for scaling image, scroll value is image scale value

  // header texts float upwards out of screen.

  // when scrolling up the event occurs in reverse.

  return (
    <header onWheel={scale}>
        <div className="header-img">
           <img src={require('../Assets/img/header-img (3).jpg')} alt="" />
        </div>
    </header>
  )
}


export default Header