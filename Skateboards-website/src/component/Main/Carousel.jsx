import React from 'react'

const Carousel = () => {
  return (
    <section className="animated-carousel">
        <div className="carousel-image-container">
            <img src={require('../img/img-7.jpg')} alt="" className="carousel-image" />  
            <img src={require('../img/img-4.jpg')} alt="" className="carousel-image" /> 
            <img src={require('../img/img-5.jpg')} alt="" className="carousel-image" />
            <img src={require('../img/img-9.jpg')} alt="" className="carousel-image" />
        </div>
    </section>
  )
}

export default Carousel