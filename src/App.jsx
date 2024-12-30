import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/home/Home'
import Login from './auth/login/Login'
import SignUp from './auth/signup/SignUp'
import ClientDashboard from './member/mdashboard/ClientDashboard'
import ClientPages from './member/ClientPages'
import AdminPages from './admin/AdminPages'
import { UserContext } from './context/useContext'

const App = () => {
  const { user } = useContext(UserContext)

  return (
    <div className='app'>
      {
        user ?
          <div className="logged">
            {
              user?.type === "client" ? <ClientPages /> : <AdminPages />
            }
          </div>
          : <div className="client">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='*' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
            </Routes>
          </div>
      }

    </div>
  )
}

export default App
