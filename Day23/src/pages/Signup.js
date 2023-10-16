import React, { useState } from 'react';
import '../assets/css/Signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

function Signup() {
  const [firstName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !email || !password || !confirmpassword) {
      console.log('Please fill in all fields.');
      return;
    }

    if (password !== confirmpassword) {
      console.log('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/v1/auth/user/register", {
        firstName,
        email,
        password,
      }, {
        headers: {"Content-Type": "application/json"},
      });

      if (response.status === 200) {
        console.log('New Register added');
        nav('/Login');
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const routeLogin = () => {
    nav('/Login');
  };

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            placeholder="your name"
            value={firstName}
            onChange={(e) => setName(e.target.value)}
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="xyz@gmail.com"
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
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="confirm password"
            required
          />
        </div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
        <p>
          Already have an account?{' '}
          <span className="login-link" onClick={routeLogin}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default Signup;
