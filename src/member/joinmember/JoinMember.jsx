import React, { useContext, useState } from 'react'
import "./styles.scss"
import { UserContext } from '../../context/useContext'
import axios from 'axios'
import { server } from '../../main'
import Swal from 'sweetalert2'

const JoinMember = () => {
    const [loading, setLoading] = useState(false)
    const [username, setUserName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [adhaar, setAdhaar] = useState('')
    const [pan, setPan] = useState('')
    const { user } = useContext(UserContext)

    const submitRequest = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const res = await axios.post(`${server}/auth/register-join/${user.userId}`, {
                username, mobile, email, address,
                adhaar, pan
            }, { withCredentials: true })
            await Swal.fire({
                title: "Request Sent",
                text: res.data.response,
                icon: 'success'
            })
            setLoading(false)
        } catch (error) {
            Swal.fire({
                title: "Request Not Sent",
                text: "Something gone wrong try again later",
                timer: 2000,
                icon: 'error'
            })
        }
    }
    return (
        <div className='joinmember'>
            <h2>Joini A  Member</h2>
            <form onSubmit={submitRequest}>
                <input
                    type="text"
                    placeholder='Enter Client Name'
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder='Enter Client NUmber (Whatsapp)'
                    onChange={(e) => setMobile(e.target.value)}
                />
                <input
                    type="email"
                    placeholder='Enter Client Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Enter Client Address'
                    onChange={(e) => setAddress(e.target.value)}
                />
                <input
                    type="number"
                    placeholder='Enter Client Adhaar'
                    onChange={(e) => setAdhaar(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Enter Client pan'
                    onChange={(e) => setPan(e.target.value)}
                />
                {
                    loading ? <h4>Joining ......</h4> : <button>Join Client</button>
                }

            </form>
        </div>
    )
}

export default JoinMember
