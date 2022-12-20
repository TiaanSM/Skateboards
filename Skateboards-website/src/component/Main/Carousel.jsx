import React from 'react'
import styles from './Carousel.module.css';

const Carousel = () => {
  return (
    <section className={styles.carousel}>
        <div className={styles.imageContainer}>
            <img src={require('../img/img-7.jpg')} alt="" className={styles.carouselImage} />  
            <img src={require('../img/img-4.jpg')} alt="" className={styles.carouselImage} /> 
            <img src={require('../img/img-5.jpg')} alt="" className={styles.carouselImage} />
            <img src={require('../img/img-9.jpg')} alt="" className={styles.carouselImage} />
        </div>
    </section>
  )
}

export default Carousel