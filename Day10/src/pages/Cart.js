import React, { useEffect } from 'react';
import '../assets/css/Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectCart, removeItem, clearCart, addItem } from '../redux/cartSlice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Cart() {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      parsedCart.items.forEach((item) => {
        dispatch(addItem(item));
      });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
    <Navbar/>
    <div className='cart-page'>
      <h1>Shopping Cart</h1>
      {cart.items.map((item) => (
        <div key={item.id} className='cart-item'>
          <div className='cart-item-info'>
            <span>{item.name}</span>
            <span>₹{item.price.toFixed(2)}</span>
          </div>
          <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
        </div>
      ))}
      {cart.items.length === 0 && <p>Nothing in the cart</p>}
      <div className='cart-total'>
        <span>Total:</span>
        <span>₹{cart.total.toFixed(2)}</span>
      </div>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
    <Footer/>
    </div>
  );
}

export default Cart;