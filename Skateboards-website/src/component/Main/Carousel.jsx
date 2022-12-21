import './Carousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Carousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return (
    <div className="container-slick">
      <h2>Auto Play</h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
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