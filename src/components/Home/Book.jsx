import React from "react";
import { motion } from "framer-motion";
import "./Book.css";

const Book = () => {
  const backgroundImage = `${process.env.PUBLIC_URL}/book-now-bg.jpg`;

  return (
    <section 
      className="book-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="book-overlay" />
      
      <div className="book-container">
        <div className="book-content">
          <motion.h2 
            className="book-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            A Cleaning Service That <span className="highlight">Truly Cares</span> About You!
          </motion.h2>
          
          <motion.p 
            className="book-description"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            At USA Cleaning Services, we work hard to ensure that we deliver the best 
            cleaning service possible. With our professional and friendly team you can 
            spend less time cleaning and more time enjoying your spotless space.
          </motion.p>
          
          <motion.button 
            className="book-btn"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ 
              transform: "translateY(-3px)",
              boxShadow: "0 10px 20px rgba(255, 255, 255, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Book Now
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Book;