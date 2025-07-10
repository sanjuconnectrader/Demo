import React, { useState } from "react";
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
    <section className="whoWeAre">
      <div className="whoWeAre__backgroundPattern" aria-hidden="true"></div>
      
      <div className="whoWeAre__container">
        {/* Content Section */}
        <div className="whoWeAre__content">
          <h2 className="whoWeAre__title">
            Transform Your Space Into a <span className="whoWeAre__titleHighlight">Sanctuary</span>
          </h2>
          
          <p className="whoWeAre__description">
            We strive to create a fair, low-stress, and empowering workplace for
            our technicians while championing sustainability by reducing carbon
            emissions through advanced green technology and eco-friendly practice.
          </p>

          <div className="whoWeAre__accordion">
            {accordionItems.map((item, index) => (
              <div
                className={`whoWeAre__accordionItem ${activeIndex === index ? 'whoWeAre__accordionItem--active' : ''}`}
                key={index}
              >
                <button 
                  className="whoWeAre__accordionHeader"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`accordion-content-${index}`}
                >
                  <span className="whoWeAre__accordionTitle">{item.title}</span>
                  {activeIndex === index ? (
                    <FaMinus className="whoWeAre__accordionIcon" />
                  ) : (
                    <FaPlus className="whoWeAre__accordionIcon" />
                  )}
                </button>
                
                <div
                  id={`accordion-content-${index}`}
                  className="whoWeAre__accordionContent"
                  style={{
                    maxHeight: activeIndex === index ? '200px' : '0',
                    opacity: activeIndex === index ? '1' : '0'
                  }}
                >
                  <div className="whoWeAre__accordionContentInner">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="whoWeAre__ctaButton">
            <span className="whoWeAre__ctaText">Learn more</span>
            <svg className="whoWeAre__ctaIcon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Image Section */}
        <div className="whoWeAre__imageWrapper">
          <img 
            src={imgSrc} 
            alt="Professional cleaning team" 
            className="whoWeAre__image"
            loading="lazy"
            decoding="async"
            width="600"
            height="800"
          />
          <div className="whoWeAre__imageOverlay"></div>
          <div className="whoWeAre__imageHighlight"></div>
        </div>
      </div>
    </section>
  );
};

export default Who;