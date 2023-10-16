// Privacy.js
import React from 'react';
import '../assets/css/Privacy.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Privacy() {
  return (
    <>
    <Navbar />
    <div className="privacy-container">
    <div className="privacy-content">
      <h1>Privacy Policy for Grocery Shop</h1>
      <p>Effective Date: 25-9-2023</p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to Grocery Shop, developed as part of a college project. This Privacy Policy is designed to inform you about the collection, use, and protection of your personal information while using our website.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li><strong>Personal Information:</strong> When you register or place an order, we may collect information such as your name, email address, and contact details.</li>
        <li><strong>Usage Information:</strong> We may gather data about your interactions with the website, including your IP address, browser type, and operating system.</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use your information for the following purposes:</p>
      <ul>
        <li>To provide and improve our services.</li>
        <li>To process and fulfill orders.</li>
        <li>To communicate with you about your orders and inquiries.</li>
        <li>To personalize your experience on our website.</li>
        <li>To analyze website usage and make improvements.</li>
      </ul>

      
    </div>
    </div>
    <Footer />
    </>
  );
}

export default Privacy;
