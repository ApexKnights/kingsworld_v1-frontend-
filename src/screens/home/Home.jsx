import React from 'react'
import "./styles.scss"
import AppWrapper from '../../components/AppWrapper'
import { Link } from 'react-router-dom'
import heroimg from "../../assets/heroimg.png"
import kwabout from "../../assets/kw-about.png"
import servimg1 from "../../assets/serv-img1.jpg"
import servimg2 from "../../assets/serv-img2.jpg"

const Home = () => {
    return (
        <AppWrapper>
            <div className="home">
                <div className="hero leftright">
                    <div className="left">
                        <div className="left-head">
                            <h1 className='heading1'>Invest and Grow with</h1>
                            <h1 className='heading2'>KingsWorld</h1>
                        </div>
                        <p className='tagline'>Invest with us, grow your portfolio, join people and earn performance bonus </p>
                        <Link className='hero-join-link'>Join Now</Link>
                    </div>
                    <div className="right">
                        <img src={heroimg} alt="" className='hero-img' />
                    </div>
                </div>
                <div className="about">
                    <div className="about-head">
                        <h1>About Us</h1>
                        <h3>What we do</h3>
                    </div>
                    <div className="about-details leftright">
                        <div className="left">
                            <img src={kwabout} alt="" />
                        </div>
                        <div className="right">
                            <div className="para">
                                <h2>Join Us with 10k Investment</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sit laboriosam, adipisci doloremque iusto reprehenderit nisi eius voluptas architecto quidem?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sit laboriosam, adipisci doloremque iusto reprehenderit nisi eius voluptas architecto quidem?</p>
                            </div>
                            <div className="para">
                                <h2>Join Us with 10k Investment</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sit laboriosam, adipisci doloremque iusto reprehenderit nisi eius voluptas architecto quidem?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services">
                    <div className="leftright">
                        <div className="left">
                            <div className="service-info-heads">
                                <span>InvestMent Procedure</span>
                                <h1>Invest minimum required amount</h1>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas amet totam possimus praesentium ab minus consectetur in est ducimus error. Ea quae dignissimos minima ipsum!</p>
                            <Link className='knowmore'>Know More</Link>
                        </div>
                        <div className="right serv-right1">
                            <img src={kwabout} alt="" />
                        </div>
                    </div>
                    <div className="leftright second-service">
                        <div className="left">
                            <img src={servimg1} alt="" />
                        </div>
                        <div className="right">
                            <div className="service-info-heads">
                                <span>InvestMent Procedure</span>
                                <h1>Invest minimum required amount</h1>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas amet totam possimus praesentium ab minus consectetur in est ducimus error. Ea quae dignissimos minima ipsum!</p>
                            <Link className='knowmore'>Know More</Link>
                        </div>

                    </div>
                    <div className="leftright">
                        <div className="left">
                            <div className="service-info-heads">
                                <span>InvestMent Procedure</span>
                                <h1>Invest minimum required amount</h1>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas amet totam possimus praesentium ab minus consectetur in est ducimus error. Ea quae dignissimos minima ipsum!</p>
                            <Link className='knowmore'>Know More</Link>
                        </div>
                        <div className="right serv-right1">
                            <img src={servimg2} alt="" />
                        </div>

                    </div>
                </div>
                <div className="joinus">
                    <div className="join-box">
                        <h1>Join Us Now</h1>
                        <span>Lets Invest and grow together</span>
                        <Link onClick={() => scrollTo(0, 0)} to={"/signup"} className='joinlink'>Join Now</Link>
                    </div>
                </div>
            </div>
        </AppWrapper>
    )
}

export default Home