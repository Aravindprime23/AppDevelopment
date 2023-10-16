import React from 'react';
import '../assets/css/FAQ.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function FAQ() {
  return (
    <>
    <Navbar />
    <div className="faq-container">
      <div className="faq-content">
        <h1>Frequently Asked Questions</h1>
        <ul className="faq-list">
          <li>
            <h2>How do I place an order?</h2>
            <p>To place an order, simply log in to your account, browse our selection of groceries, and add items to your cart. When you’re ready, proceed to checkout and choose your delivery address and payment method. Confirm your order, and we’ll take care of the rest!</p>
          </li>
          <li>
            <h2>What are the delivery charges?</h2>
            <p>We offer free delivery on orders over $50. For orders below $50, there is a $5 delivery fee.</p>
          </li>
          <li>
            <h2>How long does delivery take?</h2>
            <p>We strive to deliver your groceries as quickly as possible. Typically, you can expect your order to be delivered within 1-2 business days.</p>
          </li>
          <li>
            <h2>What payment methods do you accept?</h2>
            <p>We accept major credit cards, including Visa, MasterCard, and American Express. We also offer convenient online payment options.</p>
          </li>
          <li>
            <h2>Can I return items I'm not satisfied with?</h2>
            <p>Yes, you can return items within 30 days of purchase if you're not satisfied. Please refer to our return policy for more details.</p>
          </li>
          <li>
            <h2>How can I contact customer support?</h2>
            <p>You can reach our customer support team through our contact page or by calling our toll-free customer support hotline at [Phone Number].</p>
          </li>
          
        </ul>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default FAQ;
