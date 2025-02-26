import { useContext } from "react";
import { StudentCtx } from "../../contexts/StudentCtx";

const StudentForm = () => {
    const {studentName , editMode , changeNameHandler, submitHandler } = useContext(StudentCtx);
   
    return (
        <form onSubmit={submitHandler}>
            <div style={{ display: "flex", gap: "10px", marginBottom: "20px", padding: "10px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.2)", width: "400px" }}>
                <input type="text" placeholder="Enter Student Name..." style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc", outline: "none", flex: "1" }} value={studentName} onChange={changeNameHandler} />
                <button type="submit" style={{ backgroundColor: "#007bff", color: "#fff", padding: "8px 12px", border: "none", borderRadius: "5px", cursor: "pointer" }}>{editMode ? 'Update Student' : 'Add Student'}</button>
            </div>
        </form>  
    );
}

export default StudentForm;