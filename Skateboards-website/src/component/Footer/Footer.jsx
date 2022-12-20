import styles from '../Footer/Footer.module.css';
import Input from './Input';

const Footer = () => {

  // Todo:
  // inputs have correct type, underline on active, notify when not filled, etc..
  // links underline on hover
  // buttons work 
  // email work.
  // links work
  // responsive
 
  return (
    <footer className={styles.footer}>
      <h3 className={styles.title}>HAVE A QUESTION? THEN THERE IS AN ANSWER!</h3>

      <form className={styles.form}>

        <Input for="input-1" type="text" label="Subject of address" />

      <div className={styles.inputDetails}>
        <span className={styles.inputBorder}>
          <label for="input-2">Your name</label>
          <input type="text" className={styles.input} />
        </span>

        <span className={styles.inputBorder}>
          <label for="input-3">Phone</label>
          <input type="text" className={styles.input} />
        </span>

        <span className={styles.inputBorder}>
          <label for="input-4">Email</label>
          <input type="text" className={styles.input} />
        </span>
      </div>
        <span className={styles.inputBorder}>
          <label for="input-5">Message</label>
          <input type="email" name="" className={styles.input} />
        </span>

        <button type="submit" value="" className={styles.submit}>Send</button>
      </form>

      <span className={styles.footerLinks}>
        <p className={styles.footerTag}> &copy; SK8BOARDS / ARR</p>
        <a href="/" className={styles.footerTag}>Public offer</a>

        <span className={styles.footerSocialLinks}>
          <a href="/" className={styles.socialLink}>Facebook</a>
          <a href="/" className={styles.socialLink}>Instagram</a>
          <a href="/" className={styles.socialLink}>Telegram</a>
        </span>

        <a href="/" className={styles.footerTag}>Made by Tiaan McLeod</a>
      </span>
    </footer>
  )
}

export default Footer

/*
<span className={styles.inputBorder}>
          <label for="input-1">Subject of address</label>
          <input type="text" className={styles.input} />
        </span>
*/