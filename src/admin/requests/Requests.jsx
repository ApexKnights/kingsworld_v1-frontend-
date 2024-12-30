import React, { useEffect, useState } from 'react'
import "./styles.scss"
import axios from 'axios'
import { server } from '../../main'
import Swal from 'sweetalert2'

const Requests = () => {
    const [requests, setRequests] = useState([])
    const [loading, setLoading] = useState(false)
    const [userId, setUserId] = useState('')
    const getAllRequests = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`${server}/request/get-requests`, { withCredentials: true });
            setRequests(res.data.response)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    const approveClient = async (req) => {
        try {
            const res = await axios.post(`${server}/auth/register`, {
                username: req.username,
                email: req.email,
                mobile: req.mobile,
                adhaar: req.adhaar,
                pan: req.pan
            }, { withCredentials: true });

            await Swal.fire({
                title: res.data.response,
                icon: 'success',
                timer: 1500
            })
            setUserId(res.data.userId)
        } catch (error) {
            Swal.fire({
                title: "Something went wrong",
                icon: 'error',
                timer: 1500
            })
        }
    }

    const deleteRequest = async (id) => {
        try {
            const res = await axios.delete(`${server}/request/delete/${id}`, { withCredentials: true });
            await Swal.fire({
                title: res.data.response,
                timer: 1200,
                icon: "success"
            })
            window.location.reload()
        } catch (error) {
            Swal.fire({
                title: "Something went wrong",
                icon: 'error',
                timer: 1500
            })
        }
    }
    useEffect(() => {
        getAllRequests()
    }, [userId])
    return (
        <div className='requests'>
            <h2>Requests for memberships</h2>
            <div className="search-today">
                <label>Filter according Dates: </label>
                <input type="Date" />
            </div>
            <div className="request-box">
                {
                    requests.length === 0 ? <h2>Sorry No requests to show</h2> :
                        requests?.map(req => (
                            <div className="box" key={req._id} style={req.status === "approved" ? { background: "green", color: "white" } : null}>
                                <h4>Date - {req.createdAt.slice(0, 10)}</h4>
                                <span>UserName - {req.username}</span>
                                <span>Mobile - {req.mobile}</span>
                                <span>Email - {req.email}</span>
                                <span>Adhaar -{req.adhaar}</span>
                                <span>Pan -{req.pan}</span>
                                <div className="butt">
                                    <button onClick={() => approveClient(req)} disabled={req.status === "approved" ? true : false}>Approve Request</button>
                                    <button onClick={() => deleteRequest(req._id)}>Delete Requset</button>
                                </div>
                                {
                                    userId.length !== 0 ? <div className="userid">
                                        <h2>UserId & Password :- {userId}</h2>
                                    </div> : null
                                }

                            </div>
                        ))
                }

            </div>
        </div>
    )
}

export default Requests
