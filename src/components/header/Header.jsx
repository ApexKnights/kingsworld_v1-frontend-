import React, { useState } from 'react'
import "./styles.scss"
import kwlogo from "../../assets/kingsworldlogo.png"
import { Link } from 'react-router-dom'
import { IoMenuOutline } from "react-icons/io5";
import Menu from './Menu';


const Header = () => {
    const [ham, setHam] = useState(false)
    return (
        <div className='header'>
            <img src={kwlogo} alt="" className='logo' />
            <div className="links">
                <Link onClick={() => scrollTo(0, 0)} className='link'>Home</Link>
                <Link onClick={() => scrollTo(0, 0)} className='link'>About Us</Link>
                <Link onClick={() => scrollTo(0, 0)} className='link'>Contact</Link>
                <Link onClick={() => scrollTo(0, 0)} className='link'>Our Services</Link>
                <Link onClick={() => scrollTo(0, 0)} className='link join-butt' to={"/signup"}>Join As Member</Link>
            </div>
            <IoMenuOutline className='menu' onClick={() => setHam(true)} />
            {
                ham ? <Menu setHam={setHam} /> : null
            }

        </div>
    )
}

export default Header
