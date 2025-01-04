import React, { useContext, useEffect, useState } from 'react'
import "./styles.scss"
import axios from 'axios'
import { UserContext } from '../../context/useContext'
import { server } from '../../main'
import Swal from 'sweetalert2'
import { RxCross1 } from 'react-icons/rx'

const ShowMembers = () => {
    const { user } = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const [members, setMembers] = useState([])
    const [openunders, setOpenUnders] = useState(false)
    const [undermembers, setUnderMembers] = useState([])
    const getYourMembers = async () => {
        try {
            const res = await axios.get(`${server}/user/get-under-clients/${user.userId}`, { withCredentials: true })
            setMembers(res.data.finduser)
        } catch (error) {
            Swal.fire({
                title: "error",
                timer: 1000,
                icon: "error"
            })
        }
    }
    const getInsideMembers = async (m) => {
        try {
            setOpenUnders(!openunders)
            const res = await axios.get(`${server}/user/get-under-clients/${m}`, { withCredentials: true })
            setUnderMembers(res.data.finduser)
        } catch (error) {
            Swal.fire({
                title: "error",
                timer: 1000,
                icon: "error"
            })
        }
    }
    useEffect(() => {
        getYourMembers()
    }, [])
    return (
        <div className='showmembers'>
            <h1>Showing your Joinees - {members.length}</h1>
            <div className="joinman-cards">
                {
                    members.length === 0 ? <h4>No Members to show</h4> :
                        members.map((ms) => (
                            <div className="join-mem">
                                <h3>UserName : {ms.username}</h3>
                                <h3>Email : {ms.email}</h3>
                                <h3>Mobile :{ms.mobile}</h3>
                                <h4>Members under him - <button onClick={() => getInsideMembers(ms.userId)}>View</button></h4>


                            </div>
                        ))


                }

            </div>
            {
                openunders ? <div className="user-under-sec">
                    <RxCross1 className='cross' onClick={() => setOpenUnders(!openunders)} />
                    <p>Total - {undermembers.length}</p>
                    {
                        undermembers.length === 0 ? <p>No Members are joined</p> : undermembers.map((u) => (
                            <div className="userUnders">
                                <span>userId - {u.userId}</span>
                                <span>username - {u.username}</span>
                            </div>
                        ))
                    }


                </div> : null
            }

        </div>
    )
}

export default ShowMembers
