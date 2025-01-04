import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ClientDashboard from './mdashboard/ClientDashboard'
import ClientHeader from '../components/clientHeader/ClientHeader'
import Profile from './profile/Profile'
import JoinMember from './joinmember/JoinMember'
import ShowMembers from './showmembers/ShowMembers'

const ClientPages = () => {
    return (
        <div>
            <ClientHeader />
            <Routes>
                <Route path='/' element={<ClientDashboard />} />
                <Route path='*' element={<ClientDashboard />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/joinmember' element={<JoinMember />} />
                <Route path='/showmembers' element={<ShowMembers />} />
            </Routes>
        </div>
    )
}

export default ClientPages
