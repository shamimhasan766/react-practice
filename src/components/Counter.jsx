import { useState } from "react";

const Counter = () => {
    
    const [counter, setCounter] = useState(10);
    const increaseHandler = () => {
        setCounter(counter + 1)
    }

    const decreaseHandler = () => {
        setCounter(counter - 1)
    }
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f4f4f4", }}>
        <div style={{ background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", textAlign: "center", minWidth: "250px", }}>
            <h2 style={{ marginBottom: "15px", color: "#333" }}>Counter</h2>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <button onClick={decreaseHandler} style={{ background: "#ff4d4d", color: "#fff", border: "none", padding: "10px 15px", fontSize: "16px", borderRadius: "5px", cursor: "pointer",marginRight: "10px",}}>
                -
            </button>
            <input type="number" style={{ width: "60px", textAlign: "center", fontSize: "16px", padding: "5px", border: "1px solid #ccc", borderRadius: "5px",}} value={counter}/>
            <button onClick={increaseHandler} style={{ background: "#4CAF50", color: "#fff", border: "none", padding: "10px 15px", fontSize: "16px", borderRadius: "5px", cursor: "pointer", marginLeft: "10px",}}>
                +
            </button>
            </div>
        </div>
        </div>
    )
}

export default Counter;