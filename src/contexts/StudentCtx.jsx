import React, { createContext , useState } from "react";

export const StudentCtx = createContext();

const StudentProvider = (props) => {
    const {children} = props;
    const [studentName, setStudentName] = useState('');
    const [students , setStudents] = useState([]);
    const [editMode , setEditMode] = useState(false);
    const [editableStudent, setEditableStudent] = useState(null);

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

    const changeStudentStatus = (student) => {
        const updatedStudents = students.map((s) => {
            if(s.id === student.id) {
                return {...student, isPresent: !student.isPresent};
            }
            return s;
        });
        setStudents(updatedStudents);
    }
    const editHandler = (student) => {
        setEditMode(true);
        setEditableStudent(student);
        setStudentName(student.name);
    }

    const presentHandler = (student) => {
        if(student.isPresent !== undefined) {
            return alert(`This student is already marked as ${student.isPresent ? 'Present' : 'Absent'} `);
        }

        const updatedStudents = students.map((s) => {
            if(s.id === student.id) {
                return {...student, isPresent: true};
            }
            return s;
        });
        setStudents(updatedStudents);
    }

    const removeHandler = (student) => {
        const updatedStudents = students.filter((s) => s.id !== student.id);
        setStudents(updatedStudents);
    }

    const absentHandler = (student) => {
        if(student.isPresent !== undefined) {
            return alert(`This student is already marked as ${student.isPresent ? 'Present' : 'Absent'} `);
        }
        const updatedStudents = students.map((s) => {
            if(s.id === student.id) {
                return {...student, isPresent: false};
            }
            return s;
        });
        setStudents(updatedStudents);
    }

    const ctxValue = { studentName,  students,  editMode , submitHandler, changeNameHandler , changeStudentStatus , removeHandler , absentHandler , presentHandler, editHandler };

    return (
        <React.StrictMode>
            <StudentCtx.Provider value={ctxValue} >
                {children}
            </StudentCtx.Provider>
        </React.StrictMode>
    )
}

export default StudentProvider;