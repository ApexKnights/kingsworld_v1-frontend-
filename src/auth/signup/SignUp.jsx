import React, { useState } from 'react'
import "./styles.scss"
import signupimg from "../../assets/signup.jpg"
import { Link } from 'react-router-dom'
import axios from "axios"
import { server } from '../../main'
import Swal from 'sweetalert2'

const SignUp = () => {
    const [loading, setLoading] = useState(false)
    const [username, setUserName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [adhaar, setAdhaar] = useState('')
    const [pan, setPan] = useState('')


    const submitRequest = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const res = await axios.post(`${server}/request/user-request`, {
                username, mobile, email, address,
                adhaar, pan
            }, { withCredentials: true })
            await Swal.fire({
                title: "Request Sent",
                text: "Thank You, We will review and get to you soon...",
                timer: 2000,
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
        <div className='signup'>
            <div className="signupbox">
                <div className="left">
                    <div className="signup-head">
                        <Link to={"/"} className='link-to-home'>
                            KingsWorld
                        </Link>
                        <h3>Join Us Now</h3>
                        <p>After submitting the form we will join contactyou for your Id And Password</p>
                    </div>

                    <form className='sign-up-form' onSubmit={submitRequest}>
                        <input
                            type="text"
                            placeholder='Enter Your Name'
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder='Phone Number (Whatsapp Number)'
                            onChange={(e) => setMobile(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder='Enter Your Email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder='Enter Your Address'
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder='Enter Your Adhaar Number'
                            onChange={(e) => setAdhaar(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder='Enter Your Pan Number'
                            onChange={(e) => setPan(e.target.value)}
                        />
                        {
                            loading ? <h4 style={{ color: "#a294f9" }}>Loading...</h4> : <button>Join Now</button>
                        }

                    </form>
                    <p>Already Signed Up? <Link to={"/login"}>Login Now</Link></p>
                </div>
                <div className="right">
                    <img src={signupimg} alt="" />
                </div>
            </div>

        </div>
    )
}

export default SignUp
