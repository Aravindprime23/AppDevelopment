// Dashboard.js

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import apple from '../assets/img/apple.jpg'
import Broccolli from '../assets/img/Broccoli.jpg'
import butter from '../assets/img/butter.jpg'
import carrot from '../assets/img/carrot.jpg'
import cheese from '../assets/img/cheese.jpg'
import cucumber from '../assets/img/cucumber.jpg'
import feastables from '../assets/img/feastables.jpeg'
import mango from '../assets/img/mango.jpg'
import milk from '../assets/img/milk.jpg'
import orange from '../assets/img/orange.jpg'
import primedrink from '../assets/img/primedrink.png'
import spinach from '../assets/img/Spinach.jpg'
import strawbery from '../assets/img/Strawberry.jpg'
import yogurt from '../assets/img/yogurt.jpg'



import "../assets/css/Dashboard.css"; // Import a separate CSS file for your dashboard styles

const Dashboard = () => {
  return (
    <div>
    <Navbar />
    <div className="dashboard-container">
     
      <section className="featured-products">
        <h2 className="dashboard-section-title">Dashboard of all Products</h2>

        <div className="dashboard-product-list">
          {/* Product Cards with different class names */}
          <div className="dashboard-product-card">
            <Link to="/fruits">
              <img src={apple} alt="Fresh Apples" className="dashboard-product-image" />
              <h3>Fresh Apples</h3>
              <p>Price: ₹100</p>
            </Link>
          </div>
          <div className="dashboard-product-card">
            <Link to="/vegetables">
              <img src={Broccolli} alt="Broccolli" className="dashboard-product-image" />
              <h3>Broccolli</h3>
              <p>Price: ₹80</p>
            </Link>
          </div>
          <div className="dashboard-product-card">
            <Link to="/dairy">
              <img src={butter} alt="butter" className="dashboard-product-image" />
              <h3>Butter</h3>
              <p>Price: ₹54</p>
            </Link>
          </div>
          <div className="dashboard-product-card">
            <Link to="/vegetables">
              <img src={carrot} alt="carrot" className="dashboard-product-image" />
              <h3>Carrot</h3>
              <p>Price: ₹70</p>
            </Link>
          </div>
          <div className="dashboard-product-card">
            <Link to="/dairy">
              <img src={cheese} alt="cheese" className="dashboard-product-image" />
              <h3>Cheese</h3>
              <p>Price: ₹510</p>
            </Link>
          </div>
          <div className="dashboard-product-card">
            <Link to="/vegetables">
              <img src={cucumber} alt="cucumber" className="dashboard-product-image" />
              <h3>Cucumber</h3>
              <p>Price: ₹160</p>
            </Link>
          </div>
          <div className="dashboard-product-card">
            <Link to="/dairy">
              <img src={feastables} alt="feastables" className="dashboard-product-image" />
              <h3>Feastables</h3>
              <p>Price: ₹1200</p>
            </Link>
          </div>
          <div className="dashboard-product-card">
            <Link to="/fruits">
              <img src={mango} alt="mango" className="dashboard-product-image" />
              <h3>Mango</h3>
              <p>Price: ₹160</p>
            </Link>
          </div>
          <div className="dashboard-product-card">
            <Link to="/dairy">
              <img src={milk} alt="milk" className="dashboard-product-image" />
              <h3>Milk</h3>
              <p>Price: ₹60</p>
            </Link>
          </div>
          <div className="dashboard-product-card">
            <Link to="/fruits">
              <img src={orange} alt="orange" className="dashboard-product-image" />
              <h3>Orange</h3>
              <p>Price: ₹100</p>
            </Link>
          </div>
          <div className="dashboard-product-card">
            <Link to="/dairy">
              <img src={primedrink} alt="primedrink" className="dashboard-product-image" />
              <h3>Primedrink</h3>
              <p>Price: ₹1700</p>
            </Link>
          </div>
          <div className="dashboard-product-card">
            <Link to="/vegetables">
              <img src={spinach} alt="spinach" className="dashboard-product-image" />
              <h3>Spinach</h3>
              <p>Price: ₹50</p>
            </Link>
          </div>
          <div className="dashboard-product-card">
            <Link to="/fruits">
              <img src={strawbery} alt="strawbery" className="dashboard-product-image" />
              <h3>Strawbery</h3>
              <p>Price: ₹310</p>
            </Link>
          </div>
          <div className="dashboard-product-card">
            <Link to="/dairy">
              <img src={yogurt} alt="yogurt" className="dashboard-product-image" />
              <h3>Yogurt</h3>
              <p>Price: ₹55</p>
            </Link>
          </div>
          
          {/* Add more product cards with different class names */}
        </div>

        {/* Repeat the structure for other sections (fruits, vegetables, dairy, exclusives) */}
        {/* Add CSS classes for each section and product list */}
        
      </section>

      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
