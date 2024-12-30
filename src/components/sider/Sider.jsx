import React, { useState } from 'react'
import "./styles.scss"
import { Link } from 'react-router-dom'
import { MdSpaceDashboard } from "react-icons/md";
import { MdPermMedia } from "react-icons/md";
import { MdRememberMe } from "react-icons/md";
import { AiTwotoneFileAdd } from "react-icons/ai";
import { FaPersonCircleExclamation } from "react-icons/fa6";
import axios from 'axios';
import { server } from '../../main';
import Swal from 'sweetalert2';
import MenuSider from './MenuSider';
import { RxHamburgerMenu } from "react-icons/rx";



const Sider = () => {
    const [menu, setMenu] = useState(false)
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
        <>
            <RxHamburgerMenu onClick={() => setMenu(true)} className='ham-ico' />
            {menu ? <MenuSider setHam={setMenu} /> : null}
            <div className='admin-sider'>
                <div className="links">
                    <h2>Kings World</h2>
                    <div className="link-box">
                        <MdSpaceDashboard className='link-ico' />
                        <Link className='link' to={"/"}>DashBoard</Link>
                    </div>
                    <div className="link-box">
                        <AiTwotoneFileAdd className='link-ico' />
                        <Link className='link' to={"/addads"}>Add Ads.</Link>
                    </div>
                    <div className="link-box">
                        <MdRememberMe className='link-ico' />
                        <Link className='link' to={"/clients"}>Clients</Link>
                    </div>
                    <div className="link-box">
                        <FaPersonCircleExclamation className='link-ico' />
                        <Link className='link' to={'/requests'}>Requests</Link>
                    </div>
                    <div className="link-box">
                        <MdPermMedia className='link-ico' />
                        <Link className='link' to={'/viewads'}>View Ads</Link>
                    </div>

                </div>
                <button onClick={handleLogout}>LogOut</button>
            </div >
        </>
    )
}

export default Sider