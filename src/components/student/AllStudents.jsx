import { useContext } from "react";
import { StudentCtx } from "../../contexts/StudentCtx";

const AllStudents = () => {
    const { studentState, dispatch, presentHandler, absentHandler } = useContext(StudentCtx);

   
    return (
            <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.2)", width: "30%", textAlign: "center" }}>
                <h3 style={{ color: "#333", marginBottom: "15px" }}>All Students</h3>
                {studentState.students.map((student) => (
                    <div key={student.id} style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
                        <div style={{ backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #ddd" }}>
                            <span>{student.name}</span>
                            <div>
                            <button onClick={() => dispatch({type: 'edit_student', payload: student})} style={{ backgroundColor: "#337ab7", color: "#fff", padding: "5px 10px", border: "none", borderRadius: "5px", cursor: "pointer", marginRight: "5px" }}>Edit</button>
                            <button onClick={() => dispatch({type: 'remove_student', payload: student.id})} style={{ backgroundColor: "#d9534f", color: "#fff", padding: "5px 10px", border: "none", borderRadius: "5px", cursor: "pointer", marginRight: "5px" }}>Remove</button>
                            <button onClick={() => presentHandler(student)} style={{ backgroundColor: "#28a745", color: "#fff", padding: "5px 10px", border: "none", borderRadius: "5px", cursor: "pointer", marginRight: "5px" }} >Present</button>
                            <button onClick={() => absentHandler(student)} style={{ backgroundColor: "#dc3545", color: "#fff", padding: "5px 10px", border: "none", borderRadius: "5px", cursor: "pointer" }}>Absent</button>
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
    );
}

export default AllStudents;