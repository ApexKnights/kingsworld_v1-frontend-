import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import AdminDashboard from './adashboard/AdminDashboard'
import Sider from '../components/sider/Sider'
import CreateAds from './createads/CreateAds'
import Clients from './clients/Clients'
import Requests from './requests/Requests'
import ViewAds from './viewads/ViewAds'
import AdminProfile from './AdminProfile/AdminProfile'
import ClientDetails from './clientdetails/ClientDetails'

const AdminPages = () => {

    return (
        <div className='admin-page'>
            <Sider />
            <div className="body">
                <div className="admin-header">
                    <h3>Welcome, Admin</h3>
                    <div className="link-to-prof">
                        <Link className='prof-link' to={"/profile"}>
                            profile
                        </Link>
                    </div>
                </div>
                <Routes>
                    <Route path='/' element={<AdminDashboard />} />
                    <Route path='*' element={<AdminDashboard />} />
                    <Route path='/addads' element={<CreateAds />} />
                    <Route path='/clients' element={<Clients />} />
                    <Route path='/clientdetails/:clientid' element={<ClientDetails />} />
                    <Route path='/requests' element={<Requests />} />
                    <Route path='/viewads' element={<ViewAds />} />
                    <Route path='/profile' element={<AdminProfile />} />
                </Routes>
            </div>
        </div>
    )
}



export default AdminPages
