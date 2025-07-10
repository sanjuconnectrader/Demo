import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Header.css';

const Header = () => {
  const bgImage = `${process.env.PUBLIC_URL}/header-banner.jpg`; // Replace with your image
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const buttonVariants = {
    hover: {
      background: "#ffffff",
      color: "#000000",
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)",
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <header
      className="hero-header"
      style={{ backgroundImage: `url(${bgImage})` }}
      ref={ref}
    >
      <div className="hero-overlay" />
      <motion.div 
        className="hero-content"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.p className="hero-subtitle" variants={itemVariants}>
          Welcome to CleanUSA
        </motion.p>
        <motion.h1 className="hero-title" variants={itemVariants}>
          Bring Sparkle Back to Your Space
        </motion.h1>
        <motion.p className="hero-desc" variants={itemVariants}>
          Experience top-tier home cleaning that transforms your space into a spotless sanctuary. 
          Our expert team uses eco-friendly products and attention to detail to leave every corner fresh, bright, and welcoming.
        </motion.p>
        <motion.button 
          className="hero-btn"
          variants={itemVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Explore Services
          <span className="btn-arrow">→</span>
        </motion.button>
      </motion.div>
    </header>
  );
};

export default Header;