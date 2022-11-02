import React, { useState, useRef } from 'react'
import { Home, HeaderContainer, Image, scaleDown1, scaleDown2, scaleDown3, scaleDown4, scaleDown5, scaleDown6 } from './Styled';


const Header = () => {

  const headerElement = useRef(null)
  const headerImg = useRef(null)
  
  const [scrollCount, setScrollCount] = useState(0);

  const decreaseCount = () => {
    setScrollCount(prevCount => prevCount - 1);
  }

  const increaseCount = () => {
    setScrollCount(prevCount => prevCount + 1);
  }

  const checkScrollDirection = (event) => {
      if (event.deltaY < 0) {
        console.log('scrolling up');
        decreaseCount()
      } else if (event.deltaY > 0) {
        console.log('scrolling down');
        increaseCount()
      }
  }

  // each case will increase or decrease the size of the image on screen.
  // the default case will stop the count and init the new state of the page.
  switch (scrollCount) {
    case 0: 
      console.log('case 0')
      break;
    
    case 1: 
      console.log('case 1')
      break;

    case 2:
      console.log('case 2')
      break;

    case 3:
      console.log('case 3')
      break;

    case 4:
      console.log('case 4')
      break;

    case 5:
      console.log('case 5')
      break;

    case 6:
      console.log('case 6')
      break;

    default:
      console.log('default')
  }

  return (
    <header ref={headerElement} onWheel={checkScrollDirection}>
        <HeaderContainer>
           <Image src={require('../Assets/img/header-img (3).jpg')} ref={headerImg} alt="" />
        </HeaderContainer>
        <div>{ scrollCount }</div>
    </header>
  )
}

  // Connect the scroll value to the scale amount of the image.
  // image starts out at full screen then shrinks to a fixed size.

  // if the fixed size is met then the header will unlock from 100vh and continue to next section.

  // animation for scaling image, scroll value is image scale value

  // header texts float upwards out of screen.

  // when scrolling up the event occurs in reverse.

// on document load show loading screen as seen
// image will be in a container using parralax scroll
// image will have 2 divs in container animated, highlighting product as seen in mrpops site.

export default Header