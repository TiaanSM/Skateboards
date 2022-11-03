import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <h1>Navbar</h1>
      <Link to="/header">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}


export default Navbar