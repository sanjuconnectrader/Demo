import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./ClientTestimonial.css";

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

const ClientTestimonials = () => {
  return (
    <section className="clientTestimonials">
      <div className="clientTestimonials__backgroundPattern" aria-hidden="true"></div>
      
      <div className="clientTestimonials__container">
        <div className="clientTestimonials__header">
          <span className="clientTestimonials__subtitle">Client Feedback</span>
          <h2 className="clientTestimonials__title">Trusted by Homeowners & Businesses</h2>
          <div className="clientTestimonials__divider"></div>
          <p className="clientTestimonials__description">
            Don't just take our word for it - hear what our satisfied clients have to say about their experience with our services.
          </p>
        </div>

        <div className="clientTestimonials__sliderWrapper">
          <Swiper
            modules={[Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              el: '.clientTestimonials__pagination',
              type: 'bullets'
            }}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false
            }}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                effect: "slide"
              },
              1200: {
                slidesPerView: 3,
                effect: "slide",
                spaceBetween: 30
              }
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="clientTestimonials__card">
                  <div className="clientTestimonials__rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`clientTestimonials__star ${i < testimonial.stars ? 'clientTestimonials__star--filled' : ''}`} 
                      />
                    ))}
                  </div>
                  <FaQuoteLeft className="clientTestimonials__quoteIcon" />
                  <p className="clientTestimonials__text">{testimonial.text}</p>
                  <div className="clientTestimonials__author">
                    <h4 className="clientTestimonials__authorName">{testimonial.name}</h4>
                    <div className="clientTestimonials__authorDetails">
                      <span className="clientTestimonials__authorRole">{testimonial.role}</span>
                      <span className="clientTestimonials__authorLocation">{testimonial.location}</span>
                    </div>
                  </div>
                  <div className="clientTestimonials__cardHover"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="clientTestimonials__pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;