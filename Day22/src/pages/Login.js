import React, { useState } from 'react';
import '../assets/css/Login.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    
    if (!email || !password) {
      
      console.log('Please fill in both email and password fields.');
      return;
    }

    else
    {
      try 
      {
        const response = await axios.post("http://localhost:8080/api/v1/auth/user/authenticate", {
          email,
          password,
        }, {
          headers: {"Content-Type": "application/json"},
        });
        const token=response.data.token;
        console.log(token);
        localStorage.setItem("auth",token);
        if(token)
        {
          dispatch(login(email))
          nav('/home');

        }
      }
      catch (error) {
        alert("invalid login");
        console.error("Error during login:", error);
      }
    }
    
  };

  const routeSignup = () => {
    nav('/Signup');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="MrBeast@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            required
          />
        </div>
        <button type="submit">Login</button>
        <p>
          Don't have an account?{' '}
          <span className="signup-link" onClick={routeSignup}>
            Signup
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
