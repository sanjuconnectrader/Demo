import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const buttonVariants = {
    initial: {
      background: '#2196F3',
      boxShadow: '#2196F3'
    },
    hover: {
      background: '#2196F3',
      boxShadow: '#2196F3',
      scale: 1.03,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.2 }
    }
  };

  const arrowVariants = {
    hover: {
      x: 5,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const linkVariants = {
    hover: {
      color: '#000000',
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    },
    tap: { scale: 0.95 }
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: {
      width: '100%',
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const mobileLinkVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    })
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__container">
        {/* Logo */}
        <motion.a
          href="/"
          className="navbar__logo"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setActiveLink('Home')}
        >
          <img
            src="./companylogo.png"
            alt="Company Logo"
            className="navbar__logo-img"
          />
        </motion.a>

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
                  <motion.span
                    variants={linkVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {link.name}
                  </motion.span>
                  {(activeLink === link.name || hoveredLink === link.name) && (
                    <motion.div
                      className="navbar__link-underline"
                      initial="hidden"
                      animate="visible"
                      variants={underlineVariants}
                      layoutId={`underline-${link.name}`}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <motion.button
            className="btn btn--primary"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            Request an Estimate
            <motion.span variants={arrowVariants} whileHover="hover">
              <FaArrowRight className="btn__icon--right" />
            </motion.span>
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="navbar__toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? (
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <FaTimes />
            </motion.div>
          ) : (
            <FaBars />
          )}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                className="navbar__mobile-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleMenu}
              />
              <motion.div
                className="navbar__mobile-menu"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              >
                <div className="navbar__mobile-content">
                  <ul className="navbar__mobile-links">
                    {navLinks.map((link, i) => (
                      <motion.li
                        key={link.name}
                        custom={i}
                        variants={mobileLinkVariants}
                        initial="hidden"
                        animate="visible"
                      >
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
                      </motion.li>
                    ))}
                  </ul>

                  {/* ✅ Fixed: Button animation conflict resolved */}
                  <motion.div
                    custom={navLinks.length}
                    variants={mobileLinkVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.button
                      className="btn btn--primary navbar__mobile-btn"
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Request an Estimate
                      <FaArrowRight className="btn__icon--right" />
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
