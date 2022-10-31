import React from 'react'

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

  // image z index above background texts but under navbar

  return (
    <header onWheel={scale}>
        <div className="header-img">
           <img src={require('../Assets/img/header-img (3).jpg')} alt="" />
        </div>
    </header>
  )
}


export default Header