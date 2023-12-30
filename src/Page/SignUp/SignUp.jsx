import React, { useState } from 'react'
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
import { signUpUser } from '../../Function/UserFunctions';

const SignUp = () => {

  const [formData,setFormData] = useState({
    username : '',
    email : '',
    password : ''
  });

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(await signUpUser(formData))
    {
      navigate('/login');
    }
    else
    {
      alert("No");
    }
  }

  return (
    <div className='signUp-content'>
        <form onSubmit={handleSubmit} className='signUp-form'>
          <h2 className='signUp-h2'>Sign Up</h2>
          <input type="text" placeholder='Username' className='signUp-input' name='username' onChange={handleChange}/>
          <input type="email" placeholder='Email' className='signUp-input' name='email' onChange={handleChange}/>
          <input type="password" placeholder='Password' className='signUp-input' name='password' onChange={handleChange}/>
          <button type="submit" className='signUp-button'>Sign Up</button>
          <span>Already having an account <Link to='/login' className="signUp-text">Login</Link></span>
        </form>
    </div>
  )
}

export default SignUp