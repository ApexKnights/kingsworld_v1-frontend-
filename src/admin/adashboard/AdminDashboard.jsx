import React, { useEffect, useState } from 'react'
import "./styles.scss"
import axios from 'axios';
import { server } from '../../main';

const AdminDashboard = () => {
    const [today_ad, setToday_Ad] = useState([])
    const [all_ad, setAll_Ad] = useState([])
    const [allusers, setAllUsers] = useState([])
    const [requests, setRequests] = useState([])
    const adToday = async () => {
        try {
            const res = await axios.get(`${server}/ads/created-today`, { withCredentials: true });
            setToday_Ad(res.data.ads)
        } catch (error) {
            console.log(error)
        }
    }
    const adAll = async () => {
        try {
            const res = await axios.get(`${server}/ads/get-all-ads`, { withCredentials: true });
            setAll_Ad(res.data.response)
        } catch (error) {
            console.log(error)
        }
    }

    const getAllUsers = async () => {
        try {

            const res = await axios.get(`${server}/user/get-users`, { withCredentials: true })
            setAllUsers(res.data.response)
        } catch (error) {
            console.log(error)
        }
    }

    const getAllRequests = async () => {
        try {

            const res = await axios.get(`${server}/request/get-requests`, { withCredentials: true });
            setRequests(res.data.response)

        } catch (error) {
            console.log(error)
        }
    }

    const filtered_requests = requests.filter(e => e.status === "pending")

    useEffect(() => {
        adAll();
        adToday();
        getAllUsers();
        getAllRequests()
    }, [])

    return (
        <div className='admin-dashboard'>
            <div className="boxes">
                <div className="box">
                    <h2>No. Of Ads</h2>
                    <span>{all_ad.length}</span>
                </div>
                <div className="box">
                    <h2>No. Of Clients</h2>
                    <span>{allusers.length}</span>
                </div>
                <div className="box">
                    <h2>No. Of Ads Today</h2>
                    <span>{today_ad.length}</span>
                </div>
                <div className="box">
                    <h2>No. Of Request Pending</h2>
                    <span>{filtered_requests.length}</span>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
