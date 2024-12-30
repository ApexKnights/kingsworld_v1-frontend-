import React, { useEffect, useState } from 'react'
import "./styles.scss"
import axios from 'axios'
import { server } from '../../main'
import Swal from 'sweetalert2'

const ViewAds = () => {
    const [today_ad, setToday_Ad] = useState([])
    const [all_ad, setAll_Ad] = useState([])
    const [loading, setLoading] = useState(false)


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
    const adAll = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`${server}/ads/get-all-ads`, { withCredentials: true });
            setAll_Ad(res.data.response)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteAd = async (id) => {
        try {
            const res = await axios.delete(`${server}/ads/delete-ad/${id}`, { withCredentials: true });
            await Swal.fire({
                title: res.data.response,
                timer: 1500,
                icon: 'success'
            })
        } catch (error) {
            await Swal.fire({
                title: "Something went wrong",
                timer: 1500,
                icon: 'error'
            })
        }
    }
    useEffect(() => {
        adToday();
        adAll()
    }, [])

    return (
        <div className='view-ads'>
            <h2>View Ads</h2>
            <div className="ad-today">
                <h2>View Today's Ads</h2>
                {
                    loading ? <h3>Loading Ads ....</h3> : <div className="today-ads">
                        {
                            today_ad.length === 0 ? <h3>Sorry No Ads To show</h3> :
                                today_ad?.map(ad => (
                                    <div className="ad-box" key={ad._id}>
                                        <div className="img-box">
                                            <span>Date - {ad.createdAt.slice(0, 10)}</span>
                                            <img src={ad.img} alt="" />
                                        </div>
                                        <div className="content">
                                            <h3>Title - {ad.title}</h3>
                                            <button onClick={() => deleteAd(ad._id)}>Delete Ad</button>
                                        </div>
                                    </div>
                                ))
                        }

                    </div>
                }

            </div>
            <div className="all-ads">
                <h2>View All Ads</h2>
                {
                    loading ? <h3>Loading Ads ....</h3> :
                        <div className="ads">
                            {
                                all_ad.length === 0 ? <h3>Sorry No Ads To show</h3> :
                                    all_ad?.map(a => (
                                        <div className="ad-box">
                                            <div className="img-box">
                                                <span>Date - {a.createdAt.slice(0, 10)}</span>
                                                <img src={a.img} alt="" />
                                            </div>
                                            <div className="content">
                                                <h3>Title - {a.title}</h3>
                                                <button onClick={() => deleteAd(a._id)}>Delete Ad</button>
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

export default ViewAds
