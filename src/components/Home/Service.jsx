import React from "react";
import { motion } from "framer-motion";
import "./Service.css";

const services = [
  {
    title: "Commercial Cleaning",
    description: "Professional cleaning solutions for offices and businesses that prioritize hygiene and productivity.",
    image: `${process.env.PUBLIC_URL}/service1.jpg`,
    icon: "🏢",
    features: ["Office cleaning", "Window washing", "Floor maintenance"]
  },
  {
    title: "Residential Cleaning",
    description: "Spotless homes with our thorough cleaning methods tailored to your living space.",
    image: `${process.env.PUBLIC_URL}/service2.jpg`,
    icon: "🏡",
    features: ["Room cleaning", "Kitchen deep clean", "Bathroom sanitation"]
  },
  {
    title: "Deep Cleaning",
    description: "Intensive cleaning for every corner of your space with eco-friendly products.",
    image: `${process.env.PUBLIC_URL}/service3.jpg`,
    icon: "✨",
    features: ["Grout cleaning", "Appliance cleaning", "Baseboard detailing"]
  },
];

const Service = () => {
  return (
    <section className="service-section">
      <div className="service-container">
        <div className="section-header">
          <motion.span 
            className="section-label"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.span>
          
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Premium <span className="highlight">Cleaning</span> Solutions
          </motion.h2>
          
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Experience the difference with our professional cleaning services tailored to your needs
          </motion.p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 100,
                damping: 15,
                delay: index * 0.1
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="service-img-container"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div 
                  className="service-img"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="service-icon">{service.icon}</div>
                <div className="service-overlay"></div>
              </motion.div>
              
              <div className="service-content">
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <motion.button 
                  className="service-btn"
                  whileHover={{ 
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 20px rgba(33, 150, 243, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Explore Service</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;