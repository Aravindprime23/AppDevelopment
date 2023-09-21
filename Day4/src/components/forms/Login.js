import React from 'react'
import './Login.css';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Login() {
 
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
    }
    const nav=useNavigate()
    const routeSignup=()=>{
      nav('/Signup')
    }
    
    const routehome=()=>{
      nav('/home')
    }


  return (
    <div className="login-container">
    <form onSubmit={handleSubmit} className="login-form">
    <h2>Login</h2>
    <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type='email' placeholder='xyz@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)} name='email' required/>
    </div>
    <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type='password' placeholder='*******' value={password} onChange={(e)=>setPassword(e.target.value)} name='password' required/>
    </div>
        <button type='submit' onClick={routehome}>Login</button>
        <p>
          Don't have an account?{' '}
          <span className="signup-link" onClick={routeSignup}>
            Signup
          </span>
        </p>
    </form>
    </div>
  )

  }
export default Login