import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ClientDashboard from './mdashboard/ClientDashboard'
import ClientHeader from '../components/clientHeader/ClientHeader'
import Profile from './profile/Profile'

const ClientPages = () => {
    return (
        <div>
            <ClientHeader />
            <Routes>
                <Route path='/' element={<ClientDashboard />} />
                <Route path='*' element={<ClientDashboard />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </div>
    )
}

export default ClientPages
