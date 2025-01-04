import React, { useEffect, useState } from 'react'
import "./styles.scss"
import ClientTable from '../../components/Tables/ClientTable'
import axios from 'axios'
import { server } from '../../main'

const Clients = () => {
    const [allusers, setAllUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const tablehead = [
        {
            id: 1,
            headers: "Name "
        },
        {
            id: 2,
            headers: "UserId"
        },
        {
            id: 3,
            headers: "email"
        },
        {
            id: 4,
            headers: "Mobile"
        },
        {
            id: 5,
            headers: "Adhaar | Pan"
        },
        {
            id: 6,
            headers: "Ads Wallet"
        },
        {
            id: 6,
            headers: "Wallet"
        },
        {
            id: 6,
            headers: "under"
        },
        {
            id: 7,
            headers: "Action"
        }
    ]
    const getAllUsers = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`${server}/user/get-users`, { withCredentials: true })
            setAllUsers(res.data.response)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllUsers()
    }, [])
    return (
        <div className='client-table'>
            {
                loading ? <h2 style={{ textAlign: "center", paddingTop: "20px", color: "#a294f9" }}>Loading Clients ....</h2> : <ClientTable tablehead={tablehead} tabledata={allusers} />
            }

        </div>
    )
}

export default Clients
