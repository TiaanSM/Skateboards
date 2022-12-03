import '../Footer/Footer.css';

const Footer = () => {

  // Todo:
  // inputs have correct type, underline on active, notify when not filled, etc..
  // links underline on hover
  // buttons work 
  // email work.
  // links work
  // responsive
 
  return (
    <footer>
      <h3 className="footer-title">HAVE A QUESTION? THEN THERE IS AN ANSWER!</h3>

      <form>
        <span className="input-border">
          <label for="input-1">Subject of address</label>
          <input type="text" id="input" />
        </span>
      <div className="input-details">
        <span className="input-border">
          <label for="input-2">Your name</label>
          <input type="text" id="input" />
        </span>

        <span className="input-border">
          <label for="input-3">Phone</label>
          <input type="text" id="input" />
        </span>

        <span className="input-border">
          <label for="input-4">Email</label>
          <input type="text" id="input" />
        </span>
      </div>
        <span className="input-border">
          <label for="input-5">Message</label>
          <input type="email" name="" id="input" />
        </span>

        <button type="submit" value="" id="submit">Send</button>
      </form>

      <span className="footer-links">
        <p className="footer-tag"> &copy; SK8BOARDS / All Rights Reserved</p>
        <a href="/" className="footer-tag">Public offer</a>

        <span className="footer-social-links">
          <a href="/" className="social-link">Facebook</a>
          <a href="/" className="social-link">Instagram</a>
          <a href="/" className="social-link">Telegram</a>
        </span>

        <a href="/" className="footer-tag">Made by Tiaan McLeod</a>
      </span>
    </footer>
  )
}

export default Footer