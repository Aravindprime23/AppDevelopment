import React from "react";
import Navbar from "../components/Navbar";
//import Header from "../components/Header";
import Footer from "../components/Footer";
import br from '../assets/img/apple.jpg';
import ml from '../assets/img/milk.jpg'
import vege from '../assets/img/vegetables.jpg'
import "../assets/css/Home.css"

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />

      

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product-card">
            <img
              src={br}
              alt="Fresh Apples"
              className="product-image"
            />
            <h3>Fresh Apples</h3>
            <p>Price: ₹100</p>
          </div>
          <div className="product-card">
            <img
              src={ml}
              alt="Milk"
              className="product-image"
            />
            <h3>Milk</h3>
            <p>Price: ₹60</p>
          </div>
          <div className="product-card">
            <img
              src={vege}
              alt="Vegetables"
              className="product-image"
            />
            <h3>Vegetables</h3>
            <p>Price: ₹310</p>
          </div>
          {/* Add more product cards as needed */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
