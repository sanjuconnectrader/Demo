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
    <section className="who-section">
      <div className="who-container">
        {/* Left: Text + Accordion */}
        <div className="who-left">
          <h2 className="who-title">
            Transform Your Space Into a <span className="highlight">Sanctuary</span>
          </h2>
          
          <p className="who-description">
            We strive to create a fair, low-stress, and empowering workplace for
            our technicians while championing sustainability by reducing carbon
            emissions through advanced green technology and eco-friendly practice.
          </p>

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
                
                {activeIndex === index && (
                  <div className="accordion-content">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button className="who-btn">
            Learn more
          </button>
        </div>

        {/* Right: Image */}
        <div className="who-right">
          <div className="image-wrapper">
            <img 
              src={imgSrc} 
              alt="Professional cleaning team" 
              loading="lazy"
              decoding="async"
            />
            <div className="image-overlay"></div>
            <div className="image-highlight"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who;