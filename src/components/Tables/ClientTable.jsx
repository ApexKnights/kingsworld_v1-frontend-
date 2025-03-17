import React, { useEffect, useState } from 'react'
import "./styles.scss"
import { Link } from "react-router-dom"
import { server } from '../../main'
import Swal from 'sweetalert2'
import axios from 'axios'

const ClientTable = ({ tablehead, tabledata, deleteButt, editButt, headfont, statusPaid }) => {
    const [currentpage, setCurrentPage] = useState(1)
    const [clientname, setClientName] = useState('')
    const [tablerecords, setTableRecords] = useState([...tabledata])
    const [entries, setEntries] = useState(5)
    const [entry, setEntry] = useState(0)
    const recordsPerPage = entries;
    const lastIndex = currentpage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = tabledata.slice(firstIndex, lastIndex)
    const npage = Math.ceil(tabledata.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)
    const [addmoney, setAddMoney] = useState('')
    const [addmoney2, setAddMoney2] = useState('')
    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(false)

    const getData = () => {
        if (clientname.length === 0) {
            setTableRecords([...tabledata])
        } else {
            const filterData = tablerecords.filter(f => f.username.toLowerCase().includes(clientname.toLowerCase()))
            setTableRecords([...filterData])
        }


    }

    const prevPage = () => {
        if (currentpage !== firstIndex) {
            setCurrentPage(currentpage - 1)
        }

    }
    const changeCPage = (id) => {
        setCurrentPage(id)
    }
    const nextPage = () => {
        if (currentpage !== lastIndex) {
            setCurrentPage(currentpage + 1)
        }
    }
    const handleEntries = () => {
        if (entry <= 0) {
            setEntries(5)
        } else {
            setEntries(entry)
        }
    }

    const updateUserWallet = async (userId) => {
        try {
            setLoading(true)
            const res = await axios.put(`${server}/user/ad-money/${userId}`, { addmoney }, { withCredentials: true });
            await Swal.fire({
                title: res.data.response,
                icon: "success",
                timer: 1200,
            })
            setLoading(false)
            window.location.reload()
        } catch (error) {
            console.log(error)
            await Swal.fire({
                title: "Something Went Wrong",
                icon: "error",
                timer: 1200,
            })
        }
    }
    const deleteUserWallet = async (userId) => {
        try {
            setLoading(true)
            const res = await axios.put(`${server}/user/remove-ad-money/${userId}`, { addmoney }, { withCredentials: true });
            await Swal.fire({
                title: res.data.response,
                icon: "success",
                timer: 1200,
            })
            setLoading(false)
            window.location.reload()
        } catch (error) {
            console.log(error)
            await Swal.fire({
                title: "Something Went Wrong",
                icon: "error",
                timer: 1200,
            })
        }
    }
    const updateUserWallet2 = async (userId) => {
        try {
            setLoading2(true)
            const res = await axios.put(`${server}/user/ad-money-main/${userId}`, { addmoney2 }, { withCredentials: true });
            await Swal.fire({
                title: res.data.response,
                icon: "success",
                timer: 1200,
            })
            setLoading2(false)
            window.location.reload()
        } catch (error) {
            console.log(error)
            await Swal.fire({
                title: "Something Went Wrong",
                icon: "error",
                timer: 1200,
            })
        }
    }
    const deleteUserWallet2 = async (userId) => {
        try {
            setLoading2(true)
            const res = await axios.put(`${server}/user/remove-ad-money-main/${userId}`, { addmoney2 }, { withCredentials: true });
            await Swal.fire({
                title: res.data.response,
                icon: "success",
                timer: 1200,
            })
            setLoading2(false)
            window.location.reload()
        } catch (error) {
            console.log(error)
            await Swal.fire({
                title: "Something Went Wrong",
                icon: "error",
                timer: 1200,
            })
        }
    }
    const deleteUser = async (userId) => {
        try {

            const res = await axios.delete(`${server}/user/delete-user/${userId}`, { withCredentials: true });
            await Swal.fire({
                title: res.data.response,
                icon: "success",
                timer: 1200,
            })

            window.location.reload()
        } catch (error) {
            console.log(error)
            await Swal.fire({
                title: "Something Went Wrong",
                icon: "error",
                timer: 1200,
            })
        }
    }
    useEffect(() => {
        setTableRecords([...tabledata])
    }, [tabledata, clientname, addmoney])
    return (
        <>
            <div className="up-table">
                <div className="search">
                    <input onChange={(e) => setClientName(e.target.value)} type="text" placeholder='Search Clients' />
                    <button onClick={getData}>Search</button>
                </div>
                <div className="entries">
                    <input type="number" placeholder='Entries - 5' onChange={(e) => setEntry(e.target.value)} />
                    <button onClick={handleEntries}>Enter</button>
                </div>
            </div>
            <table className='table'>
                <tr>
                    {
                        tablehead.map((th) => (
                            <th style={{ fontSize: headfont }} key={th.id}>{th.headers}</th>
                        ))
                    }

                </tr>
                {
                    tablerecords?.map((td) => (
                        <tr key={td._id} >
                            <td>{td.username}</td>
                            <td>{td.userId}</td>
                            <td>{td.email}</td>
                            <td>{td.mobile}</td>
                            <td>
                                <p><b>Adhaar</b> -{td.adhaar}</p>
                                <p><b>Pan</b> -{td.pan}</p>
                            </td>
                            <td>
                                <p>INR {td.wallet}</p>
                                {
                                    loading ? <span><b>Updating Wallet ....</b></span> : <div className="update">
                                        <p>Update Wallet -
                                            <input type="number" placeholder='Enter Money' onChange={(e) => setAddMoney(e.target.value)} />
                                            <button onClick={() => updateUserWallet(td.userId)}>Update</button>
                                            <button className='del' onClick={() => deleteUserWallet(td.userId)}>Delete</button>
                                        </p>
                                    </div>
                                }

                            </td>
                            <td>
                                <p>INR {td.wallet2}</p>
                                {
                                    loading2 ? <span><b>Updating Wallet ....</b></span> : <div className="update">
                                        <p>Update Wallet -
                                            <input type="number" placeholder='Enter Money' onChange={(e) => setAddMoney2(e.target.value)} />
                                            <button onClick={() => updateUserWallet2(td.userId)}>Update</button>
                                            <button className='del' onClick={() => deleteUserWallet2(td.userId)}>Delete</button>
                                        </p>
                                    </div>
                                }
                            </td>
                            <td>{td.under}</td>
                            <td>
                                <Link style={{ padding: "4px 8px", background: "black", color: "white", textDecoration: "none" }} to={`/clientdetails/${td.userId}`} >Details</Link>
                            </td>
                            <td>
                                <button className='del-butt' onClick={() => deleteUser(td.userId)}>Delete User</button>
                            </td>
                        </tr>
                    )).slice(firstIndex, lastIndex)
                }

            </table>

            <div className="pagination">
                <div className="prev">
                    <span onClick={prevPage}>Previous</span>
                </div>
                {
                    numbers.map((n, i) => (
                        <span key={i} className={`page-item ${currentpage === n ? 'active' : ''}`} onClick={() => changeCPage(n)}>
                            {n}
                        </span>
                    ))
                }
                <div className="next">
                    <span onClick={nextPage}>Next</span>
                </div>
            </div>
        </>
    )
}

export default ClientTable
