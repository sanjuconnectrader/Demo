import React from 'react';
import './Header.css';

const Header = () => {
  const bgImage = `${process.env.PUBLIC_URL}/header-banner.jpg`; // Replace with your image

  return (
    <header
      className="hero-header"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-subtitle">
          Welcome to CleanUSA
        </p>
        <h1 className="hero-title">
          Bring Sparkle Back to Your Space
        </h1>
        <p className="hero-desc">
          Experience top-tier home cleaning that transforms your space into a spotless sanctuary. 
          Our expert team uses eco-friendly products and attention to detail to leave every corner fresh, bright, and welcoming.
        </p>
        <button className="hero-btn">
          Explore Services
          <span className="btn-arrow">→</span>
        </button>
      </div>
    </header>
  );
};

export default Header;