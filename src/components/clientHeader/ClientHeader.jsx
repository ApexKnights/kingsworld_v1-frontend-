import React, { useContext } from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
import logo from "../../assets/kingsworldlogo.png"
import { UserContext } from '../../context/useContext'
import axios from 'axios'
import { server } from '../../main'
import Swal from 'sweetalert2'

const ClientHeader = () => {
    const handleLogout = async () => {
        try {
            const res = await axios.get(`${server}/auth/logout`, { withCredentials: true });
            await Swal.fire({
                title: res.data.message,
                icon: "success",
                timer: 2000
            })
            window.location.reload()
        } catch (error) {
            await Swal.fire({
                title: "Something Went Wrong",
                icon: "error",
                timer: 2000
            })
        }
    }
    return (
        <div className='client-header'>
            <Link to={"/"}>
                <img src={logo} alt="" />
            </Link>
            <div className="right-view">
                <Link to={"/profile"} className="link">Profile</Link>
                <Link to={"/showmembers"} className="link">Members</Link>
                <Link to={"/joinmember"} className="link">Join</Link>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default ClientHeader
