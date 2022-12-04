import '../Hero/Header.css';
import OverlayHero from './OverlayHero';
import { motion, useScroll } from 'framer-motion';


const Header = () => {

  // make header scroll able container => overflow-y: scroll;
  // change to hidden on count 7.
  
  return (
    
    <header>
      <div className="flex">
        <div className='img-container'>

        <img src={require('../img/header-img (3).jpg')} alt="Skater" className="header-img-1" />

        </div>
      </div>
      <OverlayHero />
      <div className="background-text-container">
        <span className="scrolling-texts">* WE ALWAYS CHECK THE QUALITY *<span className="hollow-texts"> WE ALWAYS CHECK THE QUALITY * </span>* ART ON MAPLE MATERPIECES *</span>
        <span className="scrolling-texts"><span className="hollow-texts"> RECYCLED MATERIAL * </span>* RECYCLED MATERIALS *<span className="hollow-texts"> RECYCLED MATERIAL * </span></span>
        <span className="scrolling-texts">* ART ON MAPLE MATERPIECES *<span className="hollow-texts"> ART ON MAPLE MASTERPIECES * </span>* ART ON MAPLE MATERPIECES *</span>
      </div>
    </header>
  )
}

export default Header