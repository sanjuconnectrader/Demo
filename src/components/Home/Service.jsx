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

const Services = () => {
  return (
    <section className="services">
      <div className="services__container">
        <div className="services__header">
          <span className="services__label">Our Services</span>
          <h2 className="services__title">
            Premium <span className="services__titleHighlight">Cleaning</span> Solutions
          </h2>
          <p className="services__subtitle">
            Experience the difference with our professional cleaning services tailored to your needs
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <div key={index} className="services__card">
              <div className="services__imageContainer">
                <div 
                  className="services__image"
                  style={{ backgroundImage: `url(${service.image})` }}
                  aria-hidden="true"
                />
                <div className="services__icon">{service.icon}</div>
                <div className="services__imageOverlay"></div>
                <div className="services__imageShine"></div>
              </div>
              
              <div className="services__content">
                <h3 className="services__cardTitle">{service.title}</h3>
                <p className="services__cardDescription">{service.description}</p>
                
                <ul className="services__features">
                  {service.features.map((feature, i) => (
                    <li key={i} className="services__featureItem">
                      <svg className="services__featureIcon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="services__featureText">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="services__button">
                  <span className="services__buttonText">Explore Service</span>
                  <svg className="services__buttonIcon" viewBox="0 0 24 24" aria-hidden="true">
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

export default Services;