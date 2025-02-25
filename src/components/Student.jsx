import { useState } from "react";
import StudentForm from "./student/StudentForm";
import AttendanceCards from "./student/AttendanceCards";

const Student = () =>{
    const [studentName, setStudentName] = useState('');
    const [students , setStudents] = useState([]);
    const [editMode , setEditMode] = useState(false);
    const [editableStudent, setEditableStudent] = useState(null);
       
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "#f4f4f4", padding: "20px", width: "100%" }}>
            
            {/* Input Field and Add Button */}
           <StudentForm
            studentName={studentName} 
            editMode={editMode} 
            setStudents={setStudents}
            students={students}
            setStudentName={setStudentName}
            editableStudent={editableStudent}
            setEditMode={setEditMode}
            setEditableStudent={setEditableStudent}
           />

            {/* Attendance Cards */}
            <AttendanceCards
                students={students}
                setStudents={setStudents}
                setEditMode={setEditMode}
                setEditableStudent={setEditableStudent}
                setStudentName={setStudentName}
            />
        </div>
    )
    
}

export default Student;