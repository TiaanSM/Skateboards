import { Link } from 'react-router-dom';
import './Navbar.module.css'

const Navbar = () => {

  // navbar logo, shopping bag icon with amount indicator, 'flavours' link, menu button.

  // z- index, fixed position.

  return (
    <nav className="nav">
      <a href="/">Logo</a>
      <div>
        <div>
          <span>Bag</span>
          <span>0</span>
        </div>
        <span>Flavours link</span>
        <span>Menu button</span>
      </div>
      <Link to="/header">Home</Link>
      <Link to="/footer">Footer</Link>
    </nav>
  )
}


export default Navbar