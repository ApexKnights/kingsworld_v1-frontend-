import React, { useEffect, useState } from "react";
import { server } from "../../main";
import "./styles.scss"

const AdsStatus = ({ userId }) => {
    const [adsData, setAdsData] = useState({ approved: [], notApproved: [] });
    const [approvelength, setApproveLength] = useState(4)
    const [notapprovelength, setNotApproveLength] = useState(4)

    useEffect(() => {
        fetch(`${server}/ads/status/${userId}`)
            .then((res) => res.json())
            .then((data) => setAdsData(data))
            .catch((err) => console.error("Error fetching ads:", err));
    }, [userId, approvelength]);

    return (
        <>
            {
                adsData.approved && adsData.notApproved === 0 ? <p>Loading.....</p> : <div className="ads-status">
                    <h2>Ads Status for User {userId}</h2>

                    {/* Approved Ads */}
                    <h3>✅ Approved Ads</h3>
                    <div className="approved">
                        {adsData.approved.length === 0 ? (
                            <p>No approved ads</p>
                        ) : (
                            <ul>
                                {adsData?.approved?.map((ad) => (
                                    <li key={ad._id}>
                                        <p style={{ padding: 5, background: "#fff", color: "#000" }}>{ad?.createdAt.slice(0, 10)}</p>
                                        <h4>{ad.title}</h4>
                                        <p>Price: ${ad.price}</p>
                                        <img src={ad.img} alt={ad.title} width="100" />
                                        <p>Expires on: {ad.expire}</p>
                                        <p>Approved on: {ad.approvalDate}</p>
                                    </li>
                                )).slice(0, approvelength)}
                            </ul>

                        )}
                        {
                            approvelength === adsData.approved.length ? null : <button onClick={() => setApproveLength(approvelength + 4)}>Show More</button>
                        }

                    </div>

                    {/* Not Approved Ads */}
                    <h3>❌ Not Approved Ads</h3>
                    <div className="approved">
                        {adsData.notApproved.length === 0 ? (
                            <p>All ads approved</p>
                        ) : (
                            <ul>
                                {adsData.notApproved.map((ad) => (
                                    <li key={ad._id}>
                                        <h4>{ad.title}</h4>
                                        <p>Price: ${ad.price}</p>
                                        <img src={ad.img} alt={ad.title} width="100" />
                                        <p>Expires on: {ad.expire}</p>
                                    </li>
                                )).slice(0, notapprovelength)}
                            </ul>
                        )}
                        {
                            notapprovelength === adsData.approved.length ? null : <button onClick={() => setNotApproveLength(notapprovelength + 4)}>Show More</button>
                        }
                    </div>
                </div>
            }

        </>
    );
};

export default AdsStatus;
