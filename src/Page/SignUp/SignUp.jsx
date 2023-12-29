import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='signUp-content'>
        <form action="" className='signUp-form'>
          <h2 className='signUp-h2'>Sign Up</h2>
          <input type="text" placeholder='Username' className='signUp-input'/>
          <input type="email" placeholder='Email' className='signUp-input'/>
          <input type="password" placeholder='Password' className='signUp-input'/>
          <button type="submit" className='signUp-button'>Sign Up</button>
          <span>Already having an account <Link to='/login' className="signUp-text">Login</Link></span>
        </form>
    </div>
  )
}

export default SignUp