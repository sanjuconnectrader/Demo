import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);

    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isMobile ? 'mobile-view' : ''}`}>
      <div className="navbar__container">
        {/* Logo */}
        <a
          href="/"
          className="navbar__logo"
          onClick={() => setActiveLink('Home')}
        >
          <img
            src="./logoo.webp"
            alt="Company Logo"
            className="navbar__logo-img"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="navbar__desktop">
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className={`navbar__link ${activeLink === link.name ? 'active' : ''}`}
                  onClick={() => setActiveLink(link.name)}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span className="navbar__link-text">
                    {link.name}
                  </span>
                  {(activeLink === link.name || hoveredLink === link.name) && (
                    <div className="navbar__link-underline" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <button className="btn btn--primary">
            Request an Estimate
            <span className="btn__icon--right">
              <FaArrowRight />
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar__toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        <div className={`navbar__mobile-overlay ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} />
        <div className={`navbar__mobile-menu ${menuOpen ? 'open' : ''}`}>
          <div className="navbar__mobile-content">
            <ul className="navbar__mobile-links">
              {navLinks.map((link, i) => (
                <li key={link.name} style={{ transitionDelay: `${i * 0.1}s` }}>
                  <a
                    href={link.path}
                    className={`navbar__mobile-link ${activeLink === link.name ? 'active' : ''}`}
                    onClick={() => {
                      setActiveLink(link.name);
                      setMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <button className="btn btn--primary navbar__mobile-btn">
              Request an Estimate
              <FaArrowRight className="btn__icon--right" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;