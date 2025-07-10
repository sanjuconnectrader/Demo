import React from "react";
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
          <span className="section-label">Our Services</span>
          <h2 className="section-title">
            Premium <span className="highlight">Cleaning</span> Solutions
          </h2>
          <p className="section-subtitle">
            Experience the difference with our professional cleaning services tailored to your needs
          </p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-img-container">
                <div 
                  className="service-img"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="service-icon">{service.icon}</div>
                <div className="service-overlay"></div>
              </div>
              
              <div className="service-content">
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="service-btn">
                  <span>Explore Service</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
