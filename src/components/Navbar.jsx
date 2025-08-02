import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import './Logo.css';
import Logo from './Logo';

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleShowUpdates = () => {
    navigate('/updates');
    window.scrollTo({ top: 500, behavior: 'smooth' });
    setMenuOpen(false); // Close mobile menu after click
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div className="button-bar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <Logo />
            {/* <h2 style={{ color: 'white' }}>LOGO</h2> Placeholder logo text */}
          </Link>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>

        <div className={`nav-buttons ${menuOpen ? 'open' : ''}`}>
          <Link to="/#team" onClick={() => setMenuOpen(false)}>Home</Link>
          {/* <Link to="/gallery#scroll" onClick={() => setMenuOpen(false)}>Gallery</Link> */}
          <Link 
            to="https://docs.google.com/forms/d/e/1FAIpQLSfupbs5PK-pm7peJRzxmEBVlUkRKy0yJEZHe2zbn6mFHmJi7Q/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register
          </Link>
          <Link to="/updates" onClick={handleShowUpdates}>Updates</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
