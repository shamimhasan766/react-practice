const BioData = (props) =>{
    return (
        <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", textAlign: "center", maxWidth: "350px", width: "100%", marginTop: "50px" }}>
        
        {/* Profile Picture */}
        <img 
          src={props.img} 
          alt="Profile"
          style={{ width: "100px", height: "100px", borderRadius: "50%", border: "3px solid #007bff", objectFit: "cover" }}
        />

        {/* Name & Profession */}
        <h1 style={{ fontSize: "22px", marginTop: "10px" }}>{props.name}</h1>
        <p style={{ color: "#555", marginTop: "5px" }}>{props.designation}</p>

        {/* Education */}
        <p style={{ color: "#555", marginTop: "5px" }}>{props.education}</p>

        {/* Address */}
        <p style={{ color: "#555", marginTop: "5px" }}>{props.location}</p>

        {/* Social Media Links */}
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "15px" }}>
            {props?.socialLinks?.map((socialLink) => (
                <a 
                key={socialLink.platform} 
                href={socialLink.link} 
                style={{ color: socialLink.color, textDecoration: "none", fontSize: "18px" }}
                >
                {socialLink.platform}
                </a>
            ))}
        </div>

      </div>
    );
}

export default BioData