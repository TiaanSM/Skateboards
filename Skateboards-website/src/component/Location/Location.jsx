import React from 'react'
import './Location.css';
import IconButton from '../../IconButton';
import Map_Svg from './Map_Svg';

const Location = () => {
  return (
    <section className="locations-section">
        <div className="text-container-place">
            <h3 className="locations-title">YOU NEED TO TRUST YOUR OWN EXPERIENCE. VISIT ONE OF OUR POINTS OF SALE.</h3>
            <IconButton />
        </div>
        <div className="map-container">
            <Map_Svg />
        </div>
    </section>
  )
}

export default Location