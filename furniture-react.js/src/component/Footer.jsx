import '../component/Footer.css';

const Footer = () => {

  

  return (
    <footer>
      <h3 className="footer-title">HAVE A QUESTION? THEN THERE IS AN ANSWER!</h3>

      <form>
        <span className="input-border">
          <label for="input-1">Input 1</label>
          <input type="text" id="input" />
        </span>
      <div className="input-details">
        <span className="input-border">
          <label for="input-2">Input 2</label>
          <input type="text" id="input" />
        </span>

        <span className="input-border">
          <label for="input-3">Input 3</label>
          <input type="text" id="input" />
        </span>

        <span className="input-border">
          <label for="input-4">Input 4</label>
          <input type="text" id="input" />
        </span>
      </div>
        <span className="input-border">
          <label for="input-5">Input 5</label>
          <input type="email" name="" id="input" />
        </span>

        <input type="submit" value="" id="submit" />
      </form>

      <span className="footer-links">
        <p className="footer-tag"> &copy; SKATEBOARDS / All Rights Reserved</p>
        <a href="" className="footer-tag">Public offer</a>

        <span className="footer-social-links">
          <a href="" className="social-link">Facebook</a>
          <a href="" className="social-link">Instagram</a>
          <a href="" className="social-link">Telegram</a>
        </span>

        <a href="" className="footer-tag">Made by Tiaan McLeod</a>
      </span>
    </footer>
  )
}

export default Footer