import styles from '../Hero/Header.module.css';
import OverlayHero from './OverlayHero';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer'; 


const Header = () => {

  // make header scroll able container => overflow-y: scroll;
  // change to hidden on count 7.
  // extract image container as component for less code here and reusability.
  
  const [count, setCount] = useState(0);

  const handleWheel = ({ deltaY }) => {

    if (inView) {

    const increaseCount = () => {
      if (count >= 7) {
        console.log('count-limit');
      } else {
        setCount((count) => count + 1);
      }
    }

    const decreaseCount = () => {
      if (count > 0) {
        setCount((count) => count - 1);
      }
    }

    const wheel = deltaY > 0 ? increaseCount() : decreaseCount();

    return wheel, console.log(count);
    } 
  }
  

  const { ref, inView, entry } = useInView({  // currently working minor changes needed to improve header.
    // optional options
    threshold: 0.47,
  });
  console.log(inView);
  
  return (
    
    <header className={styles.header} onWheel={handleWheel}>
      <div className={styles.flexContainer}>
  
        <div className={styles.animationTrigger} ref={ref}></div>

        <div className={styles[`size${count}`]}>
          <img src={require('../img/img-1.jpg')} alt="Skater" className={styles.headerImage} />
        </div>
              
      </div>
      
      <OverlayHero />
      
     
      <div className={styles.backgroundText}>
        <span className={styles.scrollingTexts}>* WE ALWAYS CHECK THE QUALITY *<span className={styles.hollowTexts}> WE ALWAYS CHECK THE QUALITY * </span>* ART ON MAPLE MATERPIECES *</span>
        <span className={styles.scrollingTexts}><span className={styles.hollowTexts}> RECYCLED MATERIAL * </span>* RECYCLED MATERIALS *<span className="hollow-texts"> RECYCLED MATERIAL * </span></span>
        <span className={styles.scrollingTexts}>* ART ON MAPLE MATERPIECES *<span className={styles.hollowTexts}> ART ON MAPLE MASTERPIECES * </span>* ART ON MAPLE MATERPIECES *</span>
      </div>
    </header>
  )
}

export default Header

/*

*/