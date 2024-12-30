import React, { useState } from 'react'
import "./styles.scss"
import axios from 'axios'
import { server } from '../../main'
import Swal from 'sweetalert2'

const CreateAds = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [expire, setExpire] = useState('')
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleAdSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            let img = ""
            if (file) {
                const data = new FormData();
                const filename = Date.now() + file.name;
                data.append('img', filename)
                data.append('file', file)
                // post.photo = filename

                try {
                    const imgupload = await axios.post(`${server}/upload`, data, { withCredentials: true })
                    console.log(imgupload.data.message.url)
                    img = imgupload.data.message.url;
                } catch (error) {
                    console.log("Image cannot be uploaded, due to some error")
                    console.log(error)
                }
            }
            const res = await axios.post(`${server}/ads/post-ads`, { title, img, price, expire }, { withCredentials: true })
            await Swal.fire({
                title: "Successfull",
                text: res.data.response,
                timer: 1500,
                icon: "success",
            })
            setLoading(false)

        } catch (error) {
            Swal.fire({
                title: "Problem",
                text: "Something Went Wrong",
                timer: 1500,
                icon: "error"
            })
            setLoading(false)
            console.log(error)
        }
    }
    return (
        <div className='create-ads'>
            <h1>Provide Ads for Today</h1>
            <form className="form" onSubmit={handleAdSubmit}>
                <input type="text" placeholder='Add Title of Ads' onChange={(e) => setTitle(e.target.value)} />
                <input type="number" placeholder='Add Price ' value={20} onChange={(e) => setPrice(e.target.value)} />
                <label>Add an expiry date -</label>
                <input type="date" onChange={(e) => setExpire(e.target.value)} />
                <div className="image">
                    <label>Add Advertisement image :-</label>
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                </div>
                {
                    loading ? <h3 style={{ color: "#a294f9" }}>Uploading, please Wait .....</h3> : <button>Add Advetise</button>
                }

            </form>
        </div>
    )
}

export default CreateAds
