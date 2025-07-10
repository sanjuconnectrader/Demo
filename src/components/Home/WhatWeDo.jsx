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
    <section className="whatWeDo">
      <div className="whatWeDo__backgroundPattern" aria-hidden="true"></div>
      
      <div className="whatWeDo__container">
        <div className="whatWeDo__content">
          <header className="whatWeDo__header">
            <span className="whatWeDo__subtitle">What We Do</span>
            <h2 className="whatWeDo__title">
              Premium <span className="whatWeDo__titleHighlight">Cleaning</span> Solutions
            </h2>
            <div className="whatWeDo__divider"></div>
          </header>

          <p className="whatWeDo__description">
            We deliver a hassle-free cleaning experience with trusted professionals, flexible scheduling, and a commitment to spotless results every time.
          </p>

          <ul className="whatWeDo__featuresList">
            {features.map((feature, index) => (
              <li key={index} className="whatWeDo__featureItem">
                <FaCheckCircle className="whatWeDo__featureIcon" />
                <span className="whatWeDo__featureText">{feature}</span>
              </li>
            ))}
          </ul>

          <button className="whatWeDo__ctaButton">
            <span className="whatWeDo__ctaText">Schedule Your Cleaning</span>
            <svg className="whatWeDo__ctaIcon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="whatWeDo__imageWrapper">
          <img 
            src={imgSrc} 
            alt="Professional cleaning service" 
            className="whatWeDo__image"
            loading="lazy"
            decoding="async"
            width="600"
            height="500"
          />
          <div className="whatWeDo__imageOverlay"></div>
          <div className="whatWeDo__imageShine"></div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;