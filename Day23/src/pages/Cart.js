import React, { useEffect,useState } from 'react';
import '../assets/css/Cart.css';
import {  useDispatch } from 'react-redux';
import { removeItem, clearCart} from '../redux/cartSlice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch cart items from the Spring Boot API when the component mounts
    axios.get('http://localhost:8081/api/cart')
      .then(response => {
        setCartItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
      });
  }, []);

  const handleRemoveItem = (itemId) => {
    // Remove the item from the database by making a DELETE request
    axios.delete(`http://localhost:8081/api/cart/${itemId}`)
      .then(response => {
        // If the deletion was successful, remove the item from the local state
        setCartItems(cartItems.filter(item => item.id !== itemId));
        // Also dispatch the removeItem action to update Redux state
        dispatch(removeItem(itemId));
      })
      .catch(error => {
        console.error('Error deleting item:', error);
      });
  };

  const handleClearCart = () => {
    // Clear all items from the database by making a DELETE request
    axios.delete('http://localhost:8081/api/cart/clear')
      .then(response => {
        // If the deletion was successful, clear the local state
        setCartItems([]);
        // Also dispatch the clearCart action to update Redux state
        dispatch(clearCart());
      })
      .catch(error => {
        console.error('Error clearing cart:', error);
      });
  };

  return (
    <div>
    <Navbar/>
    <div className='cart-page'>
      <h1>Shopping Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className='cart-item'>
          <div className='cart-item-info'>
            <span>{item.name}</span>
            <span>₹{item.price.toFixed(2)}</span>
          </div>
          <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
        </div>
      ))}
      {cartItems.length === 0 && <p>Nothing in the cart</p>}
      <div className='cart-total'>
        <span>Total:</span>
        <span>₹{cartItems.reduce((total,item)=>total+item.price,0).toFixed(2)}</span>
      </div>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
    <Footer/>
    </div>
  );
}

export default Cart;