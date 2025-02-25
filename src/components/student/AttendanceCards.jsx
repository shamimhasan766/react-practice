import AbsentStudents from "./AbsentStudents";
import AllStudents from "./AllStudents";
import PresentStudents from "./PresentStudents";

const AttendanceCards = (props) => {
    const { students, setStudents , setEditMode, setEditableStudent, setStudentName } = props;

    const changeStudentStatus = (student) => {
        const updatedStudents = students.map((s) => {
            if(s.id === student.id) {
                return {...student, isPresent: !student.isPresent};
            }
            return s;
        });
        setStudents(updatedStudents);
    }
    return (
        <div style={{ display: "flex", gap: "20px", width: "80%", justifyContent: "center" }}>
            
            {/* All Students */}
            <AllStudents
                students={students}
                setEditMode={setEditMode}
                setEditableStudent={setEditableStudent}
                setStudentName={setStudentName}
                setStudents={setStudents}
            />

            {/* Present Students */}
            <PresentStudents
                students={students}
                changeStudentStatus={changeStudentStatus}
            />

            {/* Absent Students */}
            <AbsentStudents
                students={students}
                changeStudentStatus={changeStudentStatus}
            />

        </div>
    );
}

export default AttendanceCards;