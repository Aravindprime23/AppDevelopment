import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/Contact.css'; 
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const handleIconClick = (e) => {
    const website = e.currentTarget.getAttribute('data-website');
    if (website) {
      window.open(website, '_blank');
    }
  };

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
useEffect(() => {
    const icons = document.querySelectorAll('.link-icon');
    icons.forEach((icon) => {
      icon.addEventListener('click', handleIconClick);
    });

    return () => {
      icons.forEach((icon) => {
        icon.removeEventListener('click', handleIconClick);
      });
    };
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error('Please fill in all fields.');
      return;
    }


    toast.success('Thank you for your message!');

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <div className="contact-content">
          <h1>Contact Us</h1>
          <p>If you have any questions or inquiries, please feel free to contact us using the information below:</p>

          <div className="contact-details">
            <div className="contact-section">
              <h2>Social</h2>
              
              <span>
      <i class='bx bxl-facebook link-icon' data-website="https://www.facebook.com"></i>
      <i class='bx bxl-instagram link-icon' data-website="https://www.instagram.com"></i>
      <i class='bx bxl-twitter link-icon' data-website="https://twitter.com"></i>
      <i class='bx bxl-github link-icon' data-website="https://github.com"></i>
    </span>
            </div>

            <div className="contact-section">
              <h2>Email</h2>
              <p>Email: Groceryshop@gmail.com</p>
            </div>

            <div className="contact-section">
              <h2>Phone</h2>
              <p>Phone: +91 942 238 9574</p>
            </div>
          </div>

          <div className="form-box">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2 className="opinion-heading">Send Your Opinion</h2>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message"className='bigbox' name="message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>

        </div>
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
