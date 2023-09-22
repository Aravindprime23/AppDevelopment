import React, { useState } from 'react';
import '../assets/css/Signup.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting

    // Perform your form validation here
    if (!name || !email || !password || !confirmpassword) {
      // Handle validation error, e.g., show an error message
      console.log('Please fill in all fields.');
      return;
    }

    if (password !== confirmpassword) {
      // Handle password mismatch error
      console.log('Passwords do not match.');
      return;
    }

    // If validation passes, navigate to the login page
    nav('/Login');
  };

  const routeLogin = () => {
    nav('/Login');
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            placeholder="your name"
            value={name}
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
        <button type="submit">Submit</button>
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
