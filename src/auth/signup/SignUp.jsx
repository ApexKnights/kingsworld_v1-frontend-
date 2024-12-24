import React from 'react'
import "./styles.scss"
import signupimg from "../../assets/signup.jpg"
import { Link } from 'react-router-dom'

const SignUp = () => {
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

                    <form className='sign-up-form'>
                        <input type="text" placeholder='Enter Your Name' />
                        <input type="number" placeholder='Phone Number (Whatsapp Number)' />
                        <input type="email" placeholder='Enter Your Email' />
                        <input type="text" placeholder='Enter Your Address' />
                        <input type="text" placeholder='Enter Your Adhaar Number' />
                        <input type="text" placeholder='Enter Your Pan Number' />
                        <button>Join Now</button>
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
