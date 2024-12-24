import React from 'react'
import { Link } from 'react-router-dom'
import { RxCross1 } from "react-icons/rx";


const Menu = ({ setHam }) => {
    return (
        <div className="menu-links">
            <RxCross1 className='cross' onClick={() => setHam(false)} />
            <Link onClick={() => scrollTo(0, 0)} className='link'>Home</Link>
            <Link onClick={() => scrollTo(0, 0)} className='link'>About Us</Link>
            <Link onClick={() => scrollTo(0, 0)} className='link'>Contact</Link>
            <Link onClick={() => scrollTo(0, 0)} className='link'>Our Services</Link>
            <Link onClick={() => scrollTo(0, 0)} className='link join-butt' to={"/signup"}>Join As Member</Link>
        </div>
    )
}

export default Menu
