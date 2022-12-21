import React from 'react'
import styles from './Location.module.css';
import ButtonPrimary from '../General/ButtonPrimary';
import Map_Svg from './Map_Svg';

const Location = () => {
  
  // map location colored and on hover show text location. 

  return (
    <section className={styles.section}>
        <div className={styles.textContainer}>
            <h3 className={styles.title}>YOU NEED TO TRUST YOUR OWN EXPERIENCE. VISIT ONE OF OUR POINTS OF SALE.</h3>
            <ButtonPrimary text="WHERE TO FIND" button="primary-button" />
        </div>
        <div className={styles.mapContainer}>
            <Map_Svg />
        </div>
    </section>
  )
}

export default Location