import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
//import IconButton from '@mui/material/IconButton';
//import LoginIcon from '@mui/icons-material/Login';
//import LogoutIcon from '@mui/icons-material/Logout';
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { logout, selectUser } from '../redux/userSlice';
import '../assets/css/Navbar.css'
function Navbar () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const email = user.email ;

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
    
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/home">Grocery Shop</Link>
      </div>
      <ul className="nav-links">
      <li>
      <Link to="/home">Home</Link>
      </li>
      <li>
      <Link to="/AboutUs">About Us</Link>
      </li>
      <li>
      <Link to="/Products">Products</Link>
      </li>
      <li>
      <div className="actions">
        {email ? (
          <>
            
             <Link to="/Shoppingcart">Cart</Link>&nbsp;&nbsp;&nbsp;
             <Link onClick={handleLogout}>Logout</Link>&nbsp;&nbsp;
             Hello, {email}            
            
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
        </li>        
      </ul>
    </nav>
  );
};

export default Navbar;
