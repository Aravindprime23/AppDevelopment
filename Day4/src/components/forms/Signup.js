import React from 'react'
import { useState } from 'react'
import './Signup.css';
import { useNavigate } from 'react-router-dom';
function Signup() {

    const [name,setName] = useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [confirmpassword,setConfirmPassword]= useState("");


    const handleSubmit= (e)=> {
        e.preventDefault();

    }
    
    const nav = useNavigate();
    const routeLogin = () => {
      nav('/Login');
    };
    
    const routehome = () => {
      nav('/home');
    };


  return (
    <div className="signup-container">
    <form onSubmit={handleSubmit} className="signup-form">
    <h2>Sign Up</h2>
    <div className="form-group">
    <label htmlFor="name">Your Name:</label>
    <input type='text' placeholder='your name' value={name} onChange={(e)=>setName(e.target.value)} name='name' required/>
    </div>
    <div className="form-group">
    <label htmlFor="email">Email:</label>
    <input type='email' placeholder='xyz@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)} name='email' required/>
    </div>
    <div className="form-group"> 
    <label htmlFor="password">Password:</label>
    <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} name='password' required/>
    </div>
    <div className="form-group">
    <label htmlFor="confirm-password">Confirm Password:</label>
    <input type='password' placeholder='Confirm password' value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)} name='confirm passsword' required/>
    </div>
    <button type='submit' onClick={routehome}>submit</button>
    <p>
    Already have an account?{' '}
    <span className="login-link" onClick={routeLogin}>
      Login
    </span>
  </p>
    </form>
    </div>
  )
}

export default Signup