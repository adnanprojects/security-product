import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../src/logo.png';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

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
            {!isLoggedIn ? (
              <>
                <li><Link className='link' to="/">Home</Link></li>
                <li><Link className='link' to="/about">About</Link></li>
                <li><Link className='link' to="/contact">Contact</Link></li>
                <li><Link className='link' to="/register">Register</Link></li>
                <li><Link className='link' to="/login">Login</Link></li>
              </>
            ) : (
              <li><button className='link logout-btn' onClick={handleLogout}>Logout</button></li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;