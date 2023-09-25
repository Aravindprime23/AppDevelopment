import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import br from '../assets/img/apple.jpg';
import ml from '../assets/img/milk.jpg'
import yogurt from '../assets/img/yogurt.jpg'
import cheese from '../assets/img/cheese.jpg'
import vege from '../assets/img/vegetables.jpg'
import carrot from '../assets/img/carrot.jpg'
import Broccoli from '../assets/img/Broccoli.jpg'
import Spinach from '../assets/img/Spinach.jpg'
import orange from '../assets/img/orange.jpg'
import Strawberry from '../assets/img/Strawberry.jpg'
import "../assets/css/Home.css"
import Slideshow from "../components/Slideshow";
import feastables from '../assets/img/feastables.jpeg'
import primedrink from '../assets/img/primedrink.png'

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Slideshow/>
      <section className="featured-products">
        <h2>Featured Products</h2>

        <div className="product-list">
          <div className="product-card">
          
          <img src={br} alt="Fresh Apples" className="product-image" />
            <h3>Fresh Apples</h3>
            <p>Price: ₹100</p>
          </div>

          <div className="product-card">
            <img src={ml} alt="Milk" className="product-image" />
            <h3>Milk</h3>
            <p>Price: ₹60</p>
          </div>
          <div className="product-card">
            <img src={vege} alt="Vegetables" className="product-image" />
            <h3>Vegetables</h3>
            <p>Price: ₹310</p>
          </div>
          <div className="product-card">
            <img src={vege} alt="Vegetables" className="product-image" />
            <h3>Vegetables</h3>
            <p>Price: ₹310</p>
          </div>
          {/* Add more product cards as needed */}
        </div>

        <h2>fruits</h2>
        <div className="product-list">
          <div className="product-card">
          <Link to="/fruits"> 
            <img src={br} alt="Fresh Apples" className="product-image" />
            <h3>Fresh Apples</h3>
            <p>Price: ₹100</p>
            </Link>
          </div>
          <div className="product-card">
          <Link to="/fruits"> 
            <img src={orange} alt="orange" className="product-image" />
            <h3>orange</h3>
            <p>Price: ₹100</p>
            </Link>
          </div>
          <div className="product-card">
          <Link to="/fruits"> 
            <img src={Strawberry} alt="Strawberry" className="product-image" />
            <h3>Strawberry</h3>
            <p>Price: ₹310</p>
            </Link>
          </div>
          {/* Add more product cards as needed */}
        </div>

        <h2>Vegetables</h2>
        <div className="product-list">
          <div className="product-card">
          <Link to="/vegetables">
            <img src={carrot} alt="carrot" className="product-image" />
            <h3>Carrot</h3>
            <p>Price: ₹120</p>
            </Link>
          </div>
          <div className="product-card">
          <Link to="/vegetables">
            <img src={Broccoli} alt="Broccoli" className="product-image" />
            <h3>Broccoli</h3>
            <p>Price: ₹160</p>
            </Link>
          </div>
          <div className="product-card">
          <Link to="/vegetables">
            <img src={Spinach} alt="Spinach" className="product-image" />
            <h3>Spinach</h3>
            <p>Price: ₹100</p>
            </Link>
          </div>
          {/* Add more product cards as needed */}
        </div>

        <h2>Dairy</h2>
        <div className="product-list">
          <div className="product-card">
           <Link to="/dairy">
            <img src={yogurt} alt="yogurt" className="product-image" />
            <h3>yogurt</h3>
            <p>Price: ₹45</p>
            </Link>
          </div>
          <div className="product-card">
            <Link to="/dairy">
            <img src={ml} alt="Milk" className="product-image" />
            <h3>Milk</h3>
            <p>Price: ₹60</p>
            </Link>
          </div>
          <div className="product-card">
          <Link to="/dairy">
            <img src={cheese} alt="cheese" className="product-image" />
            <h3>cheese</h3>
            <p>Price: ₹85</p>
            </Link>
          </div>
          {/* Add more product cards as needed */}
        </div>
        <h2>Exclusives</h2>
        <div className="product-list">
          <div className="product-card">
           <Link to="/dairy">
            <img src={feastables} alt="feastables" className="product-image" />
            <h3>feastables</h3>
            <p>Price: ₹1200</p>
            </Link>
          </div>
          <div className="product-card">
            <Link to="/dairy">
            <img src={primedrink} alt="primedrink" className="product-image" />
            <h3>primedrink</h3>
            <p>Price: ₹1300</p>
            </Link>
          </div>
          <div className="product-card">
          <Link to="/dairy">
            <img src={cheese} alt="cheese" className="product-image" />
            <h3>cheese</h3>
            <p>Price: ₹85</p>
            </Link>
          </div>
          {/* Add more product cards as needed */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
