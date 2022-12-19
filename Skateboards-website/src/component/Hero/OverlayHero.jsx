import IconButton from '../General/IconButton';
import styles from './OverlayHero.module.css';

const OverlayHero = () => {

  return (

    <div className={styles.textOverlay}>
      <div className={styles.textContainer}>
        <h2 className={styles.specialTitle}><span>TRUE</span><br/> <span>SK8</span><br/> <span>BOA</span></h2>
      </div>
      <div className={styles.paragraphContainer}>
        <p className={styles.overlayDesc}>
        No, girl, I don't like all these ice creams and frozen juices... When I was a kid I liked it, of course, but I don't know what else I liked... let's have the usual, white chocolate-covered... And what's that lilac soap you have? mr.pops? I'll take the bright yellow one, what's that? Mango-maracuya? Oh, it's cold! And what's that crunching on your teeth? Bones... cool! And can I bring this pink one, too!
        </p>
        <IconButton text="SKATEBOARDS"/>
        <span className={styles.titleTail}>RDS</span>
      </div>
  </div>
  )
}

export default OverlayHero