import { Link } from "react-router-dom";


const NetworkTree = ({ user }) => {
    if (!user) return null;
    return (
        <div style={{ marginLeft: "20px", borderLeft: "2px solid gray", paddingLeft: "10px" }}>
            <h4 style={{ padding: "10px", margin: "10px 0px", background: "#5a0dac", borderRadius: "20px", color: "#fff" }}>{user.username} (Wallet: ₹{user.wallet2})</h4>
            <div style={{ display: "flex", gap: "20px" }}>
                {/* Group A */}
                {
                    user.A.length !== 0 ? <div style={{ border: "1px solid blue", padding: "10px", }}>
                        <h4>Group A</h4>
                        {user.A?.map((child) => (
                            <NetworkTree key={child.userId} user={child} />
                        ))}
                    </div> : null
                }


                {/* Group B */}
                {
                    user.B.length !== 0 ? <div style={{ border: "1px solid red", padding: "10px" }}>
                        <h4>Group B</h4>
                        {user.B?.map((child) => (
                            <NetworkTree key={child.userId} user={child} />
                        ))}
                    </div> : null
                }

            </div>
        </div>
    );
};

export default NetworkTree;