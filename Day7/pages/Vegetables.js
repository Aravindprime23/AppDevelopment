import React from 'react';
import '../assets/css/Category.css'; 
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice'; // Import the addItem action
import Broccoli from '../assets/img/Broccoli.jpg';
import carrot from '../assets/img/carrot.jpg';
import spinach from '../assets/img/Spinach.jpg';
import cucumber from '../assets/img/cucumber.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Vegetables() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // Dispatch the addItem action with the product details
    dispatch(addItem(product));
  };

  return (
    <div>
    <Navbar />
    <div className='category-page'>
      <h1>Vegetables</h1>
      <div className='product-container'>
        {/* Product 1 */}
        <div className='product'>
          <img src={Broccoli} alt='Product 1' />
          <div className='product-info'>
            <span className='product-symbol'>Broccoli = </span>
            <span className='product-price'>₹80</span>
            <span className='liked-product-symbol'>     </span>
            <button onClick={() => handleAddToCart({ id: 5, name: 'Broccoli', price: 80 })}>
              Add
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className='product'>
          <img src={carrot} alt='Product 2' />
          <div className='product-info'>
            <span className='product-symbol'>Carrot = </span>
            <span className='product-price'>₹70</span>
            <span className='liked-product-symbol'>   </span>
            <button onClick={() => handleAddToCart({ id: 6, name: 'Carrot', price: 70 })}>
              Add
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className='product'>
          <img src={spinach} alt='Product 3' />
          <div className='product-info'>
            <span className='product-symbol'>Spinach = </span>
            <span className='product-price'>₹50</span>
            <span className='liked-product-symbol'>   </span>
            <button onClick={() => handleAddToCart({ id: 7, name: 'Spinach', price: 50 })}>
              Add
            </button>
          </div>
        </div>

        {/* Product 4 */}
        <div className='product'>
          <img src={cucumber} alt='Product 4' />
          <div className='product-info'>
            <span className='product-symbol'>Cucumber = </span>
            <span className='product-price'>₹160</span>
            <span className='liked-product-symbol'>  </span>
            <button onClick={() => handleAddToCart({ id: 8, name: 'Cucumber', price: 160 })}>
              Add
            </button>
          </div>
        </div>
      </div>
    
    </div>
    <Footer />
    </div>
  );
}

export default Vegetables;