import React from 'react'
import { Routes,Route } from 'react-router'
import Login from '../Page/Login/Login'
import SignUp from '../Page/SignUp/SignUp'
import Question from '../Page/Question/Question'
const Routing = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Question />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signUp' element={<SignUp />} />
    </Routes>
  )
}

export default Routing