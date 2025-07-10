import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import "./WhatWeDo.css";

const WhatWeDo = () => {
  const imgSrc = `${process.env.PUBLIC_URL}/what-we-do.jpg`;

  const features = [
    "Real-Time Booking and Service Updates",
    "Safe, Eco-Friendly Products for Every Room",
    "Seamless Scheduling That Fits Your Lifestyle",
    "Trained and Background-Checked Professionals",
    "100% Satisfaction Guarantee"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const buttonVariants = {
    initial: {
      background: "linear-gradient(135deg, #2196F3 0%, #42A5F5 100%)",
      boxShadow: "0 4px 15px rgba(33, 150, 243, 0.3)"
    },
    hover: {
      background: "linear-gradient(135deg, #1976D2 0%, #2196F3 100%)",
      boxShadow: "0 10px 30px rgba(33, 150, 243, 0.4)",
      scale: 1.03,
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
    <motion.section 
      className="whatwedo"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="whatwedo__bg-pattern" />
      
      <div className="whatwedo__container">
        <div className="whatwedo__content">
          <motion.div 
            className="whatwedo__header"
            variants={containerVariants}
          >
            <motion.span className="whatwedo__subtitle" variants={itemVariants}>
              What We Do
            </motion.span>
            <motion.h2 className="whatwedo__title" variants={itemVariants}>
              Premium <span className="highlight">Cleaning</span> Solutions
            </motion.h2>
            <motion.div 
              className="whatwedo__divider" 
              variants={itemVariants}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          <motion.p className="whatwedo__description" variants={itemVariants}>
            We deliver a hassle-free cleaning experience with trusted professionals, flexible scheduling, and a commitment to spotless results every time.
          </motion.p>

          <motion.ul 
            className="whatwedo__features"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.li 
                key={index}
                className="whatwedo__feature"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaCheckCircle className="whatwedo__feature-icon" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={itemVariants}>
            <motion.button 
              className="whatwedo__cta"
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              Schedule Your Cleaning
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </motion.div>
        </div>

        <motion.div 
          className="whatwedo__image-container"
          variants={imageVariants}
        >
          <motion.img 
            src={imgSrc} 
            alt="Professional cleaning service" 
            className="whatwedo__image"
            loading="lazy"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          />
          <div className="whatwedo__image-overlay" />
          <div className="whatwedo__image-highlight" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhatWeDo;