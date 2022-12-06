import '../Hero/Header.css';
import OverlayHero from './OverlayHero';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer'; 


const Header = () => {

  // make header scroll able container => overflow-y: scroll;
  // change to hidden on count 7.
  // extract image container as component for less code here and reusability.
  
  const [count, setCount] = useState(0);

  const handleWheel = ({ deltaY }) => {

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

    return wheel;
  }

  useEffect(() => {
    console.log(count);
  }, [count]);

  const { ref, inView, entry } = useInView({  // currently working minor changes needed to improve header.
    // optional options
    threshold: 1,
  });
  console.log(inView);
  
  return (
    
    <header onWheel={handleWheel}>
      <div className="flex">
  
        <div className={`img-container-${count}`} ref={ref}>
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

/*
{ count === 1 &&
        <div className='img-container-2'>
          <img src={require('../img/header-img (3).jpg')} alt="Skater" className="header-img-1" />
        </div>
       }
       { count === 2 &&
        <div className='img-container-3'>
          <img src={require('../img/header-img (3).jpg')} alt="Skater" className="header-img-1" />
        </div>
       }
       { count === 3 &&
        <div className='img-container-4'>
          <img src={require('../img/header-img (3).jpg')} alt="Skater" className="header-img-1" />
        </div>
       }
       { count === 4 &&
        <div className='img-container-5'>
          <img src={require('../img/header-img (3).jpg')} alt="Skater" className="header-img-1" />
        </div>
       }
       { count === 5 &&
        <div className='img-container-6'>
          <img src={require('../img/header-img (3).jpg')} alt="Skater" className="header-img-1" />
        </div>
       }
       { count === 6 &&
        <div className='img-container-7'>
          <img src={require('../img/header-img (3).jpg')} alt="Skater" className="header-img-1" />
        </div>
       }
       { count === 7 &&
        <div className='img-container-8'>
          <img src={require('../img/header-img (3).jpg')} alt="Skater" className="header-img-1" />
        </div>
       }
*/