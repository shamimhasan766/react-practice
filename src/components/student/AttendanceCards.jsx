import AbsentStudents from "./AbsentStudents";
import AllStudents from "./AllStudents";
import PresentStudents from "./PresentStudents";

const AttendanceCards = () => {
    return (
        <div style={{ display: "flex", gap: "20px", width: "80%", justifyContent: "center" }}>
            
            {/* All Students */}
            <AllStudents />

            {/* Present Students */}
            <PresentStudents />

            {/* Absent Students */}
            <AbsentStudents />

        </div>
    );
}

export default AttendanceCards;