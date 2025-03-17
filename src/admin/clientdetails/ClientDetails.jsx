import React, { useEffect, useState } from 'react'
import "./styles.scss"
import axios from 'axios';
import { server } from '../../main';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import NetworkTree from '../../components/networktree/NetworkTree';
import personshow from "../../assets/person-show-kw.png"
import { RiEmotionNormalFill } from "react-icons/ri";
import { MdOutlineStar } from "react-icons/md";
import AdsStatus from '../../components/AdsStatus/adstatus';


const ClientDetails = () => {
    const userId = useParams().clientid;
    const [theuser, setTheUser] = useState({})
    const [allnetworks, setAllNetWorks] = useState(null)
    const [allnetworkmoney, setAllNetWorkMoney] = useState(null)
    const [rewards, setRewards] = useState({ pos: "" })
    const [loading, setLoading] = useState(false)
    const getrequestedUser = async () => {
        try {

            const res = await axios.get(`${server}/user/get-user/${userId}`, { withCredentials: true });
            setTheUser(res.data.getoneuser)
        } catch (error) {
            console.log(error)
            await Swal.fire({
                title: "Something Went Wrong",
                icon: "error",
                timer: 1200,
            })
        }
    }
    const userNetWork = async () => {
        try {
            const res = await axios.get(`${server}/user/user-network/${userId}`, { withCredentials: true })
            setAllNetWorks(res.data)
        } catch (error) {

        }
    }
    const userNetWorkMoney = async () => {
        try {
            const res = await axios.get(`${server}/user/user-total-money/${userId}`, { withCredentials: true })

            setAllNetWorkMoney(res.data)
        } catch (error) {

        }
    }

    const settingRewards = () => {
        if (allnetworkmoney?.A < 250000 && allnetworkmoney?.A < 250000) {
            setRewards((prevRewards) => ({ ...prevRewards, pos: "Beginner", ico: RiEmotionNormalFill }));
        } else if (allnetworkmoney?.A >= 250000 && allnetworkmoney?.B < 250000) {
            setRewards((prevRewards) => ({ ...prevRewards, pos: "Star", ico: MdOutlineStar }));
        }


    }

    useEffect(() => {
        setLoading(true)
        getrequestedUser()
        userNetWork();
        userNetWorkMoney();
        setLoading(false)

    }, [])
    useEffect(() => {
        settingRewards()
    }, [allnetworkmoney])
    return (
        <>
            {
                loading === true ? <h3>Loading details....</h3> :
                    <div className='clientdetails'>
                        <div className="head">
                            <img src={personshow} alt="" />
                            <h1>{theuser?.username}</h1>
                            <div className="position">
                                {rewards.ico ? <rewards.ico className="ico"></rewards.ico> : null}
                                <p>{rewards?.pos}</p>

                            </div>
                        </div>


                        <div className="user-details">
                            <div className="detail1">
                                <h4>UserId -{theuser?.userId}</h4>
                                <h4>Adhaar - {theuser?.adhaar}</h4>
                            </div>
                            <div className="detail1">
                                <h4>Pan - {theuser?.pan}</h4>
                                <h4>Email - {theuser?.email}</h4>
                            </div>
                            <div className="detail1">
                                <h4>Mobile-  {theuser?.mobile}</h4>
                                <h4>Ad Wallet- ₹ {theuser?.wallet}</h4>
                            </div>
                            <h4>Main Wallet- ₹ {theuser?.wallet2}</h4>
                        </div>




                        <div style={{ width: "95%", overflow: "scroll" }} className="network-tree">
                            <h1>Nominees and total money generated</h1>
                            <div className="total-business">
                                <p> Amount Genareted (Group A) - <b>₹ {allnetworkmoney?.A}</b> </p>
                                <p>Amount Genareted (Group B) - <b> ₹ {allnetworkmoney?.B}</b></p>
                                <p>Amount Genareted TOTAL  - <b> ₹{allnetworkmoney?.total}</b> </p>
                            </div>
                            {allnetworks ? <NetworkTree user={allnetworks} /> : <p>Loading...</p>}
                        </div>
                        <AdsStatus userId={userId} />
                    </div>
            }

        </>
    )
}

export default ClientDetails
