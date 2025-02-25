const StudentForm = (props) => {
    const {studentName , editMode , setStudents, students, setStudentName, editableStudent, setEditMode, setEditableStudent } = props;
   
    const submitHandler = (e) => {
        e.preventDefault();
        if(studentName.trim() === '') {
            return alert('Please enter a student name');
        }

        editMode ? updateHandler() : createHandler();
    }

    const createHandler = () => {
        const newStudent = {
            id: Date.now() + '',
            name: studentName,
            isPresent: undefined
        }

        setStudents([newStudent, ...students]);
        setStudentName('');
    }

    const updateHandler = () => {
        const updatedStudents = students.map((student) => {
            if(student.id === editableStudent.id) {
                return {...student, name: studentName};
            }
            return student;
        });
        setStudents(updatedStudents);
        setStudentName('');
        setEditMode(false);
        setEditableStudent(null);
    }

    const changeNameHandler = (e) => {
        setStudentName(e.target.value);
    }

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