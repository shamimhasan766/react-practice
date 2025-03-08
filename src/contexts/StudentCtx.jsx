import React, { createContext , useReducer } from "react";

export const StudentCtx = createContext();

const initState = {
    studentName: '',
    students: [],
    editMode: false,
    editableStudent: null,

};
const studentReducer = (state = initState, action) => {
    switch(action.type) {
        case 'change_name' : {
            return {
                ...state,
                studentName: action.payload
            }
        }
        case 'create_student' : {
            const newStudent = {
                id: Date.now() + '',
                name: state.studentName,
                isPresent: undefined
            }
            return {
                ...state,
                students: [newStudent, ...state.students],
                studentName: ''
            }
        }
        case 'edit_student' : {
            return {
                ...state,
                editMode: true,
                editableStudent: action.payload,
                studentName: action.payload.name
            }
        }
        case 'update_student' : {
            return {
                ...state,
                students: state.students.map((student) => {
                    if(student.id === state.editableStudent.id) {
                        return {...student, name: state.studentName};
                    }
                    return student;
                }),
                editMode: false,
                editableStudent: null,
                studentName: ''
            }
        }
        case 'remove_student' : {
            return {
                ...state,
                students: state.students.filter((s) => s.id !== action.payload)
            }
        }
        case 'change_is_present' : {
            return {
                ...state,
                students: state.students.map((s) => {
                    if(s.id === action.payload.id) {
                        return {...s, isPresent: action.payload.isPresent};
                    }
                    return s;
                })
            }
        }
        default : return state
    }
}

const StudentProvider = (props) => {
    const {children} = props;

    const [studentState, dispatch] = useReducer(studentReducer, initState);


    const submitHandler = (e) => {
        e.preventDefault();
        if(studentState.studentName.trim() === '') {
            return alert('Please enter a student name');
        }

        studentState.editMode ? dispatch({type: 'update_student'}) : dispatch({type: 'create_student'});
    }

    

    const changeNameHandler = (e) => {
        dispatch({type: 'change_name', payload: e.target.value});
    }

   
   

    const presentHandler = (student) => {
        if(student.isPresent !== undefined) {
            return alert(`This student is already marked as ${student.isPresent ? 'Present' : 'Absent'} `);
        }

        dispatch({type: 'change_is_present', payload: {id: student.id, isPresent: true}});
    }

 

    const absentHandler = (student) => {
        if(student.isPresent !== undefined) {
            return alert(`This student is already marked as ${student.isPresent ? 'Present' : 'Absent'} `);
        }

        dispatch({type: 'change_is_present', payload: {id: student.id, isPresent: false}});
    }

    const changeStudentStatus = (student) => {
        dispatch({type: 'change_is_present', payload: {id: student.id, isPresent: !student.isPresent}});
    }

    const ctxValue = { studentState, dispatch , submitHandler, changeNameHandler , changeStudentStatus  , absentHandler , presentHandler };

    return (
        <React.StrictMode>
            <StudentCtx.Provider value={ctxValue} >
                {children}
            </StudentCtx.Provider>
        </React.StrictMode>
    )
}

export default StudentProvider;