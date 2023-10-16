// AboutUs.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../assets/css/AboutUs.css'

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Navbar />
      <div className="about-us-content">
        <h2>About Us</h2>
        <p>
          Welcome to Grocery Shop, your one-stop destination for fresh and
          quality groceries. At Grocery Shop, we are committed to providing you
          with a convenient and hassle-free shopping experience. Our mission is
          to deliver the finest selection of fruits, vegetables, pantry staples,
          and household essentials right to your doorstep.
        </p>
        <p>
          With a passion for quality and customer satisfaction, we work closely
          with local farmers and suppliers to ensure that you receive the
          freshest produce and products available. Our team is dedicated to
          maintaining the highest standards of hygiene and safety, so you can
          trust us to provide you with wholesome, delicious, and nutritious
          items for your everyday needs.
        </p>
        <p>
          We understand the importance of saving you time and effort, which is
          why we offer a user-friendly online platform where you can browse,
          order, and have your groceries delivered to your home. Whether you're
          looking for everyday essentials or special ingredients for your
          favorite recipes, Grocery Shop has you covered.
        </p>
        <p>
          Thank you for choosing Grocery Shop as your preferred grocery partner.
          We look forward to serving you and making your grocery shopping a
          delightful experience.
        </p>
        
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
