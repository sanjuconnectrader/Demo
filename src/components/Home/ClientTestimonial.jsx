import React from "react";
import "./ClientTestimonial.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    stars: 5,
    text: "The team transformed my carpets completely. They look brand new and the pet odors are completely gone. Their eco-friendly approach was important to us as pet owners. Highly recommend their services!",
    name: "Joseph Alex",
    role: "Homeowner",
    location: "San Diego, CA"
  },
  {
    stars: 5,
    text: "Consistently excellent service for our apartment complex. The hardwood floor cleaning has saved us thousands in refinishing costs. Their team is always professional and punctual.",
    name: "Sarah Alexander",
    role: "Property Manager",
    location: "La Jolla, CA"
  },
  {
    stars: 4,
    text: "Our office tile floors had years of buildup. After their cleaning, the grout looks like it was just installed. Professional and efficient service with great attention to detail.",
    name: "Emily John",
    role: "Business Owner",
    location: "Downtown San Diego"
  },
  {
    stars: 5,
    text: "After trying several cleaning companies, Greenworks stands out for their thoroughness and customer service. Our carpets have never looked better. Worth every penny!",
    name: "Michael Chen",
    role: "Residential Client",
    location: "Carlsbad, CA"
  }
];

const ClientTestimonial = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="section-subtitle">Client Feedback</span>
          <h2 className="section-title">Trusted by Homeowners & Businesses</h2>
          <div className="divider"></div>
          <p className="section-description">
            Don't just take our word for it - hear what our satisfied clients have to say about their experience with our services.
          </p>
        </div>

        <div className="testimonials-slider">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false
            }}
            breakpoints={{
              768: {
                slidesPerView: 2
              },
              1200: {
                slidesPerView: 3
              }
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card">
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < testimonial.stars ? "star filled" : "star"} 
                      />
                    ))}
                  </div>
                  <FaQuoteLeft className="quote-icon" />
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <div className="author-details">
                      <span className="author-role">{testimonial.role}</span>
                      <span className="author-location">{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonial;