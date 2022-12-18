import styles from './Info.module.css';



const Info = () => {

  // main video on left side 
  // same fixed and scrolling effect
  // text right side sliding up
  // video no sound and hover play icon

  // intersection observer

  return (
    <section className={styles.section}>
     
      <div className={styles.textContainer}>
      <p className={styles.introduction}>
        Do you want to become our partner? We are open to cooperation, but first we always get acquainted with the location to find "our own". So no offense -           there are also cases when we are destined to grow separately.
      </p>
      </div>

    <div className={styles.mainInfo}>

      <div className={styles.questionare}>
        <h3 className={styles.questionTitle}>DEAL? THEN FILL OUT THE FORM</h3>
        <p className={styles.questionDesc}>
          Just 10 basic questions that will take 10 minutes at most.
          But these 10 minutes can be the start of our joint flight. It is not only for Musk and Bezos to conquer space.
        </p>
        <button className={styles.questionButton}>Fill out the questionnaire</button>
      </div>

      <div className={styles.videoContainer}></div>
      
      <div className={styles.outro}>
        <h3 className={styles.outroTitle}>IT REMAINS TO WAIT FOR THE LETTER</h3>
        <p className={styles.outroDesc}>
          After filling out the questionnaire, our manager will process it and send you detailed information about cooperation. This includes prices, equipment           rental conditions, and recommended retail price. After that we will be able to start. Even if the stars are not aligned and we are not on the way yet,           we will still write to you.
        </p>
      </div>
    
    </div>

    </section>
  )
}
   
export default Info;

/*
inView ? 'video-moving-container' : 'video-container';
*/