import styles from '../Main/Main.module.css';
import ButtonPrimary from '../General/ButtonPrimary.jsx';
import Carousel from './Carousel';

const Main = () => {

  // main image = 557,500 x 780.500

  // carousel at the bottom of this section, auto moving.

  // add intersection abserver details.
  // add carousel and finnish it.

  return (
    <article className={styles.main}>

       <h3 className={styles.title} >
        THIS IS DECK-TECH.<br/> 
        WE'LL COME IN EVEN TO THOSE<br/>
        WHO ARE COMPLETELY<br/>
        INDIFFERENT TO<br/>
        SKATEBOARDING.</h3>
        
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <img src={require('../img/img-6.jpg')} alt="" className={styles.leftImage} />
      </div>
        <div className="main-text-container">
          <img src={require('../img/img-9.jpg')} alt="" className={styles.centerImage} />
            <h5 className={styles.textTitle}>WHO HAS TRIED IT, KNOWS EVERYTHING. THOSE WHO HAVEN'T - GET READY FOR THE DOPAMINE THIRST OF "THAT VERY TASTE"</h5>
            <p className={styles.textDesc}>Our goal is not ice cream. It would be quite simple. We need to make you "touched" when you, for example, bite into an Eskimo. It is difficult to do, but we do it. How? We do not tolerate simplifications: neither in tastes, nor in ingredients, nor in production.<br/> <br/>Pistachio, for example, we buy on a farm in the Bronte region, Sicily. We order Alfonso mango from India, and chocolate is brought to us directly from Belgium. Our Japanese matcha tea is exclusively of the Sagano variety.</p>
              <ButtonPrimary text="ABOUT US" button="svg"/>
        </div>
        <div className="image-container">
          <img src={require('../img/img-5.jpg')} alt="" className={styles.rightImage}  />
        </div>
    </div>
        <Carousel />
    </article>
  )
}

export default Main