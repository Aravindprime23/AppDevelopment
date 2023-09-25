import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/terms">Terms and Conditions</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/feedback">Feedback</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/faq">FAQs</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Grocery Shop</p>
      </div>
    </footer>
  );
};

export default Footer;
