import React, { useState } from 'react'
import "./styles.scss"
import { Link } from 'react-router-dom'
import loginimg from "../../assets/serv-img1.jpg"
import axios from 'axios'
import { server } from '../../main'
import Swal from 'sweetalert2'

const Login = () => {
    const [loading, setLoading] = useState(false)
    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const res = await axios.post(`${server}/auth/login`, { userId, password }, { withCredentials: true });
            await Swal.fire({
                title: res.data.message,
                timer: 1500,
                icon: 'success'
            })
            setLoading(false)
            window.location.reload()
        } catch (error) {
            await Swal.fire({
                title: 'Something Went Wrong',
                timer: 1500,
                icon: 'error'
            })
        }
    }
    return (
        <div className='login'>
            <div className="loginbox">
                <div className="left">
                    <div className="signup-head">
                        <Link to={"/"} className='link-to-home'>
                            KingsWorld
                        </Link>
                        <h3>Hii, Member, lets Sign In</h3>
                        <p>Enter Your Member Id and Password to login</p>
                    </div>

                    <form className='sign-up-form' onSubmit={handleLogin}>
                        <input type="text" placeholder='Enter Your UserName' onChange={(e) => setUserId(e.target.value)} />
                        <input type="password" placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} />
                        {
                            loading ? <h4 style={{ color: "#a294f9" }}>Loading...</h4> : <button>Login</button>
                        }

                    </form>
                    <p>Not A Member? <Link to={"/signup"}>Sign Up Now</Link></p>
                </div>
                <div className="right">
                    <img src={loginimg} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Login
