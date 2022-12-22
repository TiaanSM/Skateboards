import styles from './Carousel.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Carousel = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };

  // need 2 replacement images for the copies in slider.
  // responsiveness.

  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        <div>
        <img src={require('../img/img-4.jpg')} alt="" className={styles.carouselImage1} />
        </div>
        <div>
        <img src={require('../img/img-7.jpg')} alt="" className={styles.carouselImage2} />
        </div>
        <div>
        <img src={require('../img/img-5.jpg')} alt="" className={styles.carouselImage1} />
        </div>
        <div>
        <img src={require('../img/img-9.jpg')} alt="" className={styles.carouselImage2} />
        </div>
        <div>
        <img src={require('../img/img-4.jpg')} alt="" className={styles.carouselImage1} />
        </div>
        <div>
        <img src={require('../img/img-7.jpg')} alt="" className={styles.carouselImage2} />
        </div>
        <div>
        <img src={require('../img/img-5.jpg')} alt="" className={styles.carouselImage1} />
        </div>
        <div>
        <img src={require('../img/img-9.jpg')} alt="" className={styles.carouselImage2} />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel

/*


<img src={require('../img/img-7.jpg')} alt="" className={styles.carouselImage} />  
           
            <img src={require('../img/img-4.jpg')} alt="" className={styles.carouselImage} /> 
         
            <img src={require('../img/img-5.jpg')} alt="" className={styles.carouselImage} />
         
            <img src={require('../img/img-9.jpg')} alt="" className={styles.carouselImage} />
*/