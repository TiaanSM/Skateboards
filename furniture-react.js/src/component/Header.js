import React, { useState, useRef } from 'react'
import './Header.css'


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
  
  const [scrollCount, setScrollCount] = useState(0);

  const decreaseCount = () => {
    setScrollCount(prevCount => prevCount - 1);
  }

  const increaseCount = () => {
    setScrollCount(prevCount => prevCount + 1);
  }

  const header = useRef(null)

  const checkScrollDirection = (event) => {
      if (event.deltaY < 0) {
        console.log('scrolling up');
        increaseCount()
      } else if (event.deltaY > 0) {
        console.log('scrolling down');
        decreaseCount()
      }
  }

  // Connect the scroll value to the scale amount of the image.
  // image starts out at full screen then shrinks to a fixed size.

  // if the fixed size is met then the header will unlock from 100vh and continue to next section.

  // animation for scaling image, scroll value is image scale value

  // header texts float upwards out of screen.

  // when scrolling up the event occurs in reverse.

  return (
    <header useRef={header} onWheel={checkScrollDirection}>
        <div className="header-img">
           <img src={require('../Assets/img/header-img (3).jpg')} alt="" />
        </div>
        <div>{ scrollCount }</div>
    </header>
  )
}


export default Header