import { Link } from 'react-router-dom';

const Navbar = () => {

  // navbar logo, shopping bag icon with amount indicator, 'flavours' link, menu button.

  // z- index, fixed position.

  return (
    <nav className="nav">
      <h1>Navbar</h1>  
      <Link to="/header">Home</Link>
      <Link to="/footer">Footer</Link>
    </nav>
  )
}


export default Navbar