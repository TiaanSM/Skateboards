import React from 'react'

const Header = () => {

  const header = document.querySelector('.header');

  header.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (e.originalEvent.wheelDelta / 120 > 0) {
      console.log('scrolling up !', 'X: ', e.pageX, 'Y: ', e.pageY);
    } else {
      console.log('scrolling down !', 'X: ', e.pageX, 'Y: ', e.pageY);
    }
  });

  return (
    <header className="header">
        <div className="header-img">
           <img src={require('../img/header-img (3).jpg')} width="450" height="auto" alt="" />
        </div>
    </header>
  )
}


export default Header