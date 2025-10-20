import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../logo.png' 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo on the left */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        {/* Links on the right */}
        <div className="navbar-links">
          
          <ul className='navlink'>
          <li><Link className='link' to="/">Home</Link></li>
          <li><Link className='link' to="/about">About</Link></li>
          <li><Link className='link' to="/contact">Contact</Link></li>
          <li><Link className='link' to="/register">Register</Link></li>
          <li><Link className='link' to="/login">Login</Link></li>
        </ul>
              
        </div>
      </div>
    </nav>
  );
};

export default Navbar;