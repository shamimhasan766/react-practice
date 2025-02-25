const AbsentStudents = (props) => {
    const { students, changeStudentStatus } = props;
    return (
        <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.2)", width: "30%", textAlign: "center" }}>
            <h3 style={{ color: "#dc3545", marginBottom: "15px" }}>Absent Students</h3>
            {students.filter((student) => student.isPresent === false).map((student) => (
                <div key={student.id} style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
                    <div style={{ backgroundColor: "#f8d7da", padding: "10px", borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #721c24" }}>
                        <span>{student.name}</span>
                        <button onClick={() => changeStudentStatus(student)} style={{ backgroundColor: "#ffc107", color: "#fff", padding: "5px 10px", border: "none", borderRadius: "5px", cursor: "pointer" }}>Undo</button>
                    </div>
                </div>
            ))}
            
        </div>
    );
}

export default AbsentStudents;