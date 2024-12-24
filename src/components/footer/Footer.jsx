import React from 'react'
import "./styles.scss"
import { Link } from 'react-router-dom'
import kwlogo from "../../assets/kingsworldlogo.png"

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className="sec1">
                    <img src={kwlogo} alt="" className='logo' />
                    <p className='about-footer-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas odit debitis minus nisi aliquid delectus porro consequuntur quod dolore perferendis.</p>
                </div>
                <div className="sec2">
                    <Link className='links'>Home</Link>
                    <Link className='links'>About</Link>
                    <Link className='links'>Contact</Link>
                    <Link className='links'>JoinUs</Link>
                </div>
                <div className="sec3">
                    <h2>Contact Details</h2>
                    <p>Phone- 9732979279</p>
                    <p>email- gmail@gmail.com</p>
                </div>
            </div>
            <div className="reserved-rights">
                <p>All Rights Reserved @ KingsWorld | 2024</p>
            </div>
        </>
    )
}

export default Footer
