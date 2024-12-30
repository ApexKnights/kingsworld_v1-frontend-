import React, { useContext, useEffect, useState } from 'react'
import "./styles.scss"
import crown from "../../assets/crown.jpg"
import { UserContext } from '../../context/useContext'
import axios from 'axios'
import { server } from '../../main'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const ClientDashboard = () => {
    const { user } = useContext(UserContext)
    const [today_ad, setToday_Ad] = useState([])
    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(false)


    const adToday = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`${server}/ads/created-today`, { withCredentials: true });
            setToday_Ad(res.data.ads)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const approveAd = async (id) => {
        try {
            setLoading2(true)
            const res = await axios.put(`${server}/ads/approve-ad/${id}/${user.userId}`, { withCredentials: true })
            await Swal.fire({
                title: res.data.response,
                icon: "success",
                timer: 1800,
            })
            window.location.reload()
            setLoading2(false)
        } catch (error) {
            console.log(error)
            await Swal.fire({
                title: "Something Went Wrong",
                icon: "error",
                timer: 1800,
            })
        }
    }

    useEffect(() => {
        adToday();

    }, [])
    return (
        <div className='client-dashboard'>
            <div className="hero">

                <img src={crown} alt="" />

                <div className="heads">
                    <h1>Hii, {user?.username}</h1>
                    <h3>Welcome to Kings World</h3>
                </div>
                <h2>Wallet Money - <span> {user?.wallet} /-</span></h2>
                <span>Welcome to your dashboard, Wallet balance id provided on the top right of your dashboard, scroll below to earn wallet money through Ads</span>
                <span className='coming-soon'>Nominee and investment features are coming soon</span>
            </div>
            <div className="view-ads">
                <div className="ad-head">
                    <h2>Your Daily Ads Shown here</h2>
                    <span>View Your Ads daily and click on the approve button to earn the wallet money</span>
                </div>
                {
                    loading ? <h3>Loading ....</h3> : <div className="all-ads">
                        {
                            today_ad?.filter(e => !e.approvedby.includes(user.userId)).length === 0 ? <h1>No Ads To Show</h1> :
                                today_ad?.filter(e => !e.approvedby.includes(user.userId)).map((ad) => (
                                    <div className="ad-box" key={ad._id}>
                                        <div className="upper">
                                            <img src={ad.img} alt="" />
                                        </div>
                                        <div className="lower">
                                            <h3>{ad.title}</h3>
                                            <span>Earn Rs {ad.price}/- wallet money from this ad, Approve now</span>
                                            {
                                                loading2 ? <h4>Approving, please wait ....</h4> : <button onClick={() => approveAd(ad._id)}>Approve</button>
                                            }


                                        </div>

                                    </div>
                                ))
                        }


                    </div>
                }

            </div>
        </div>
    )
}

export default ClientDashboard
