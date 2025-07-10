import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./WhatWeDo.css";

const WhatWeDo = () => {
  const imgSrc = `${process.env.PUBLIC_URL}/what-we-do(1).webp`;

  const features = [
    "Real-Time Booking and Service Updates",
    "Safe, Eco-Friendly Products for Every Room",
    "Seamless Scheduling That Fits Your Lifestyle",
    "Trained and Background-Checked Professionals",
    "100% Satisfaction Guarantee"
  ];

  return (
    <section className="whatwedo">
      <div className="whatwedo__bg-pattern" />
      
      <div className="whatwedo__container">
        <div className="whatwedo__content">
          <div className="whatwedo__header">
            <span className="whatwedo__subtitle">What We Do</span>
            <h2 className="whatwedo__title">
              Premium <span className="highlight">Cleaning</span> Solutions
            </h2>
            <div className="whatwedo__divider" />
          </div>

          <p className="whatwedo__description">
            We deliver a hassle-free cleaning experience with trusted professionals, flexible scheduling, and a commitment to spotless results every time.
          </p>

          <ul className="whatwedo__features">
            {features.map((feature, index) => (
              <li key={index} className="whatwedo__feature">
                <FaCheckCircle className="whatwedo__feature-icon" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div>
            <button className="whatwedo__cta">
              Schedule Your Cleaning
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="whatwedo__image-container">
          <img 
            src={imgSrc} 
            alt="Professional cleaning service" 
            className="whatwedo__image"
            loading="lazy"
            decoding="async"
          />
          <div className="whatwedo__image-overlay" />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
