import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../Function/UserFunctions'

const Login = () => {

  const [formData,setFormData] = useState({
    email : '',
    password : ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(await loginUser(formData))
    {
      navigate('/');
    }
    else
    {
      alert("Wrong");
    }
  }

  return (
    <div className='login-content'>
        <form onSubmit={handleSubmit} className='login-form'>
          <h2 className='login-h2'>Login</h2>
          <input type="email" placeholder='Email' onChange={handleChange} name='email' className='login-input'/>
          <input type="password" placeholder='Password' onChange={handleChange} name='password' className='login-input'/>
          <button type="submit" className='login-button'>Login</button>
          <span>Not having an account <Link to='/signUp' className="login-text">Sign up</Link></span>
        </form>
    </div>
  )
}

export default Login