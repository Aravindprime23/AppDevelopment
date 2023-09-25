import React from 'react';
import '../assets/css/Terms.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Terms() {
  return (
    <div>
    <Navbar />
    <div className="terms-container">
      <div className="terms-content">
        <h1>Terms and Conditions for Grocery Shop</h1>
        <p>Effective Date: 25-9-2023</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By using our website and services, you agree to comply with and be
          bound by the following terms and conditions. If you do not agree to
          these terms, please do not use our services.
        </p>

        <h2>2. Registration and Account</h2>
        <p>
          To use certain features of our website, you may be required to create
          an account. You are responsible for maintaining the confidentiality of
          your account information and for all activities that occur under your
          account.
        </p>

        <h2>3. Ordering and Payment</h2>
        <p>
          You can place orders for groceries through our website. Prices, fees,
          and payment methods are detailed on the checkout page. We reserve the
          right to modify prices and fees at our discretion.
        </p>

        <h2>4. Delivery and Returns</h2>
        <p>
          We will deliver groceries to the address you provide during checkout.
          Please review our delivery policy and return policy for more details.
        </p>

        {/* ... and so on for the rest of the content */}
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Terms;
