import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/home/Home'
import Login from './auth/login/Login'
import SignUp from './auth/signup/SignUp'

const App = () => {
  return (
    <div className='app'>
      <div className="client">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
