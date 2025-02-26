import StudentForm from "./student/StudentForm";
import AttendanceCards from "./student/AttendanceCards";

const Student = () =>{
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "#f4f4f4", padding: "20px", width: "100%" }}>
            
            {/* Input Field and Add Button */}
           <StudentForm />

            {/* Attendance Cards */}
            <AttendanceCards />
        </div>
    )
    
}

export default Student;