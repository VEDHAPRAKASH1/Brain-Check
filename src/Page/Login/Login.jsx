import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login-content'>
        <form action="" className='login-form'>
          <h2 className='login-h2'>Login</h2>
          <input type="email" placeholder='Email' className='login-input'/>
          <input type="password" placeholder='Password' className='login-input'/>
          <button type="submit" className='login-button'>Login</button>
          <span>Not having an account <Link to='/signUp' className="login-text">Sign up</Link></span>
        </form>
    </div>
  )
}

export default Login