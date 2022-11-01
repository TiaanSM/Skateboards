import React from 'react'
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
  


let count = 0;

  window.addEventListener('wheel', function(event)  // needs to be header not window.
{
 if (event.deltaY < 0)
 {
  count++
  console.log(count);
 }
 else if (event.deltaY > 0)
 {
  count--
  console.log(count);
 }
});


   switch (count) {
    case 0:
       console.log('case 0');
      break;
    
    case -1:
      console.log('case 1');
      break;
    case -2:
      console.log('case 2');
      break;

    case -3:
      console.log('case 3');
      break;

    case -4:
      console.log('case 4');
      break;

    case -5:
      console.log('case 5');
      break;

    case -6:
      console.log('case 6');
      break;

    case count > 0 :
      console.log('Scrolling up');
   }

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