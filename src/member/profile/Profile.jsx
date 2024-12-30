import React, { useContext, useState } from 'react'
import "./styles.scss"
import { UserContext } from '../../context/useContext'
import axios from 'axios'
import { server } from '../../main'
import Swal from 'sweetalert2'

const Profile = () => {
    const { user } = useContext(UserContext)
    const [password, setPassword] = useState('')
    const updateuserPass = async () => {
        try {
            const res = await axios.put(`${server}/user/edit-password/${user.userId}`, { password }, { withCredentials: true })
            await Swal.fire({
                title: res.data.message,
                timer: 1500,
                icon: "success"
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='profile'>
            <h2>Your Profile</h2>
            <div className="prof">
                <span>Name - {user.username}</span>
                <span>UserId -{user.userId}</span>
                <span>Email - {user.email}</span>
                <span>Mobile - {user.mobile}</span>
                <div className="update-pass">
                    <input type="password" placeholder='Enter Your New Password' onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={updateuserPass}>Update Password</button>
                </div>
            </div>

        </div>
    )
}

export default Profile
