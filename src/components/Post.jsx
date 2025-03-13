import { useEffect, useState } from "react";
const Post = () => {
    
    const [posts, setPosts] = useState([]);
    

    useEffect(() => {
        fetch(`http://localhost:3001/posts`)
        .then(response => response.json())
        .then(data => setPosts(data));
    }, []);

    

    

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", padding: "20px" }}>
            {posts.map(post => (
                <div key={post.id} style={{ width: "300px", padding: "15px", border: "1px solid #ddd", borderRadius: "10px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)", textAlign: "center" }}>
                    <img src={post.image} alt={post.title} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} />
                    <h3 style={{ margin: "10px 0", color: "#333" }}>{post.title}</h3>
                    <p style={{ color: "#666", fontSize: "14px" }}>{post.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Post