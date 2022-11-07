import '../component/Footer.css';

const Footer = () => {

  // 5 x inputs
  // 1 submit
  // alert if not filled

  return (
    <footer>
      <h3 className="footer-title">HAVE A QUESTION? THEN THERE IS AN ANSWER!</h3>

      <form>
        <label for="input-1">Input 1</label>
        <input type="text" id="input-1" />
      </form>

      <div>
        <p> &copy; SKATEBOARDS / All Rights Reserved</p>
        <a href="">Public offer</a>

        <div>
          <a href="">Facebook</a>
          <a href="">Instagram</a>
          <a href="">Telegram</a>
        </div>

        <p>Made by Tiaan McLeod</p>
      </div>
    </footer>
  )
}

export default Footer