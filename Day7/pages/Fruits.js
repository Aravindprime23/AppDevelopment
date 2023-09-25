import React from 'react';
import '../assets/css/Category.css'
import br from '../assets/img/apple.jpg'
import Strawberry from '../assets/img/Strawberry.jpg'
import orange from '../assets/img/orange.jpg'
import mango from '../assets/img/mango.jpg'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice'; // Import the addItem action
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Fruits() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // Dispatch the addItem action with the product details
    dispatch(addItem(product));
  };

  return (
    <div>
    <Navbar />
    <div className='category-page'>
      <h1>Fruits</h1>
      <div className='product-container'>
        {/* Product 1 */}
        <div className='product'>
          <img src={br} alt='Product 1' />
          <div className='product-info'>
            <span className='product-symbol'>Apple = </span>
            <span className='product-price'>₹100</span>
            <span className='liked-product-symbol'>   </span>
            <button onClick={() => handleAddToCart({ id: 1, name: 'Apple', price: 100 })}>
              Add
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className='product'>
          <img src={Strawberry} alt='Product 2' />
          <div className='product-info'>
            <span className='product-symbol'>Strawberry = </span>
            <span className='product-price'>₹310</span>
            <span className='liked-product-symbol'>   </span>
            <button onClick={() => handleAddToCart({ id: 2, name: 'Strawberry', price: 310 })}>
              Add
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className='product'>
          <img src={mango} alt='Product 3' />
          <div className='product-info'>
            <span className='product-symbol'>Mango = </span>
            <span className='product-price'>₹160</span>
            <span className='liked-product-symbol'>   </span>
            <button onClick={() => handleAddToCart({ id: 3, name: 'Mango', price: 160 })}>
              Add
            </button>
          </div>
        </div>

        {/* Product 4 (Orange) */}
        <div className='product'>
          <img src={orange} alt='Orange' />
          <div className='product-info'>
            <span className='product-symbol'>orange = </span>
            <span className='product-price'>₹100</span>
            <span className='liked-product-symbol'>   </span>
            <button onClick={() => handleAddToCart({ id: 4, name: 'Orange', price: 2.99 })}>
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

export default Fruits;