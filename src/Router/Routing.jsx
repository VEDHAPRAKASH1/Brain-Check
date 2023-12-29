import React from 'react'
import { Routes,Route } from 'react-router'
import Login from '../Page/Login/Login'
import SignUp from '../Page/SignUp/SignUp'
const Routing = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
    </Routes>
  )
}

export default Routing