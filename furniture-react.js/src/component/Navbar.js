import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <h1>Navbar</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}


export default Navbar