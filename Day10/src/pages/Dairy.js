import React from 'react';
import '../assets/css/Category.css'; 
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice'; // Import the addItem action
import milk from '../assets/img/milk.jpg';
import cheese from '../assets/img/cheese.jpg';
import yogurt from '../assets/img/yogurt.jpg';
import butter from '../assets/img/butter.jpg';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import feastables from '../assets/img/feastables.jpeg';
import primedrink from '../assets/img/primedrink.png'
function Dairy() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div>
    <Navbar />
    <div className='category-page'>
      <h1>Dairy & Specials</h1>
      <div className='product-container'>
        {/* Product 1 */}
        <div className='product'>
          <img src={milk} alt='Product 1' />
          <div className='product-info'>
            <span className='product-symbol'>Milk = </span>
            <span className='product-price'>₹60</span>
            <span className='liked-product-symbol'>   </span>
            <button onClick={() => handleAddToCart({ id: 9, name: 'Milk', price: 60 })}>
              Add
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className='product'>
          <img src={cheese} alt='Product 2' />
          <div className='product-info'>
            <span className='product-symbol'>Cheese = </span>
            <span className='product-price'>₹510</span>
            <span className='liked-product-symbol'>   </span>
            <button onClick={() => handleAddToCart({ id: 10, name: 'Cheese', price: 510 })}>
              Add
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className='product'>
          <img src={yogurt} alt='Product 3' />
          <div className='product-info'>
            <span className='product-symbol'>Yogurt = </span>
            <span className='product-price'>₹55</span>
            <span className='liked-product-symbol'>   </span>
            <button onClick={() => handleAddToCart({ id: 11, name: 'Yogurt', price: 55 })}>
              Add
            </button>
          </div>
        </div>

        {/* Product 4 */}
        <div className='product'>
          <img src={butter} alt='Product 4' />
          <div className='product-info'>
            <span className='product-symbol'>Butter = </span>
            <span className='product-price'>₹54</span>
            <span className='liked-product-symbol'>  </span>
            <button onClick={() => handleAddToCart({ id: 12, name: 'Butter', price: 54 })}>
              Add
            </button>
          </div>
        </div>
        {/* Product 4 */}
        <div className='product'>
          <img src={feastables} alt='Product 5' />
          <div className='product-info'>
            <span className='product-symbol'>feastables = </span>
            <span className='product-price'>₹1200</span>
            <span className='liked-product-symbol'>  </span>
            <button onClick={() => handleAddToCart({ id: 13, name: 'feastables', price: 1200 })}>
              Add
            </button>
          </div>
        </div>
        <div className='product'>
          <img src={primedrink} alt='Product 5' />
          <div className='product-info'>
            <span className='product-symbol'>primedrink = </span>
            <span className='product-price'>₹1700</span>
            <span className='liked-product-symbol'>  </span>
            <button onClick={() => handleAddToCart({ id: 14, name: 'primedrink', price: 1700 })}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Dairy;