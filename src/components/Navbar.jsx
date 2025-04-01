import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Close menu after scrolling
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        castillano.dev
      </div>
      <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
        <button onClick={() => scrollToSection('home')}>HOME</button>
        <button onClick={() => scrollToSection('about')}>ABOUT</button>
        <button onClick={() => scrollToSection('skills')}>SKILLS</button>
        <button onClick={() => scrollToSection('projects')}>PROJECTS</button>
        <button onClick={() => scrollToSection('contact')}>CONTACT</button>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
}

export default Navbar;