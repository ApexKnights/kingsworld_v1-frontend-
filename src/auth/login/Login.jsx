import React from 'react'
import "./styles.scss"
import { Link } from 'react-router-dom'
import loginimg from "../../assets/serv-img1.jpg"

const Login = () => {
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

                    <form className='sign-up-form'>
                        <input type="text" placeholder='Enter Your UserName' />
                        <input type="text" placeholder='Enter Your Password' />
                        <button>Login</button>
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
