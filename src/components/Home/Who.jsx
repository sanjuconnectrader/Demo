import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./Who.css";

const accordionItems = [
  {
    title: "Experienced & friendly maids",
    content:
      "Our maids are thoroughly trained and background-checked to ensure consistent service, professionalism, and friendliness every time they visit your home.",
  },
  {
    title: "Trusted green cleaning practices",
    content:
      "We utilize eco-certified products and modern green technology to minimize environmental impact while maximizing cleanliness and safety.",
  },
  {
    title: "Satisfaction guaranteed",
    content:
      "We stand behind our work with a 100% satisfaction guarantee. If you're not happy, we'll make it right.",
  },
];

const Who = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const imgSrc = `${process.env.PUBLIC_URL}/who-we-are.jpg`;

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="who-section">
      <div className="who-container">
        {/* Left: Text + Accordion */}
        <motion.div 
          className="who-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="who-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Transform Your Space Into a <span className="highlight">Sanctuary</span>
          </motion.h2>
          
          <motion.p 
            className="who-description"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We strive to create a fair, low-stress, and empowering workplace for
            our technicians while championing sustainability by reducing carbon
            emissions through advanced green technology and eco-friendly practice.
          </motion.p>

          <div className="who-accordion">
            {accordionItems.map((item, index) => (
              <div
                className={`accordion-item ${activeIndex === index ? "active" : ""}`}
                key={index}
                onClick={() => toggleAccordion(index)}
              >
                <div className="accordion-header">
                  <span>{item.title}</span>
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      className="accordion-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {item.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <motion.button 
            className="who-btn"
            whileHover={{ 
              transform: "translateY(-3px)",
              boxShadow: "0 10px 20px rgba(33, 150, 243, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Learn more
          </motion.button>
        </motion.div>

        {/* Right: Image */}
        <motion.div 
          className="who-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="image-wrapper">
            <img src={imgSrc} alt="Professional cleaning team" />
            <div className="image-overlay"></div>
            <div className="image-highlight"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Who;