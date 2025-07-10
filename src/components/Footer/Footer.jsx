import React from "react";
import "./Footer.css";
import { 
  FaAngleDoubleRight, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaPinterestP
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Gradient CTA Section */}
     

      {/* Main Footer Content */}
      <div className="footer__main">
        <div className="footer__main-container">
          {/* Brand Column */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo-link">
              <img 
                src="" 
                alt=" Cleaning service" 
                className="footer__logo-img" 
                width="180"
                height="50"
              />
            </Link>
            <p className="footer__brand-description">
              Premium carpet cleaning services with eco-friendly solutions for residential and commercial properties in San Diego since 2012.
            </p>
            
            <div className="footer__socials">
              <h4 className="footer__socials-title">Connect With Us</h4>
              <div className="footer__social-links">
                <a href="https://facebook.com" className="footer__social-link" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="https://instagram.com" className="footer__social-link" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com" className="footer__social-link" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="https://linkedin.com" className="footer__social-link" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="https://pinterest.com" className="footer__social-link" aria-label="Pinterest">
                  <FaPinterestP />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="footer__navigation">
            {/* Services Column */}
            <div className="footer__nav-column">
              <h3 className="footer__column-title">Our Services</h3>
              <nav className="footer__nav">
                <Link to="/residential" className="footer__nav-link">
                  Residential Cleaning
                </Link>
                <Link to="/commercial" className="footer__nav-link">
                  Commercial Cleaning
                </Link>
             
                <Link to="/deep-cleaning" className="footer__nav-link">
                  Deep Cleaning
                </Link>
               
               
              </nav>
            </div>

            {/* Company Column */}
            <div className="footer__nav-column">
              <h3 className="footer__column-title">Company</h3>
              <nav className="footer__nav">
                <Link to="/about" className="footer__nav-link">
                  About Us
                </Link>
                <Link to="/team" className="footer__nav-link">
                  Our Team
                </Link>
                <Link to="/testimonials" className="footer__nav-link">
                  Testimonials
                </Link>
                <Link to="/blog" className="footer__nav-link">
                  Blog
                </Link>
               
                <Link to="/locations" className="footer__nav-link">
                  Service Areas
                </Link>
              </nav>
            </div>

            {/* Support Column */}
            <div className="footer__nav-column">
              <h3 className="footer__column-title">Support</h3>
              <nav className="footer__nav">
                <Link to="/faq" className="footer__nav-link">
                  FAQ
                </Link>
                <Link to="/contact" className="footer__nav-link">
                  Contact Us
                </Link>
                <Link to="/pricing" className="footer__nav-link">
                  Pricing
                </Link>
                <Link to="/booking" className="footer__nav-link">
                  Booking
                </Link>
                <Link to="/guarantee" className="footer__nav-link">
                  Our Guarantee
                </Link>
              </nav>
            </div>

            {/* Contact Column */}
       
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <p className="footer__copyright">
            &copy; {currentYear} Greenworks Carpet Cleaning. All rights reserved.
          </p>
          <div className="footer__legal-links">
            <Link to="/privacy" className="footer__legal-link">
              Privacy Policy
            </Link>
            <Link to="/terms" className="footer__legal-link">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="footer__legal-link">
              Sitemap
            </Link>
            <Link to="/accessibility" className="footer__legal-link">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;