import { useEffect, useState } from "react";

const Note = () => {
    const [noteTitle, setNoteTitle] = useState("");
    const [notes , setNotes] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editableNote, setEditableNote] = useState(null);

    const getAllNotes = () => {
        fetch('http://localhost:3001/notes')
        .then(response => response.json())
        .then(data => setNotes(data));
    }

    useEffect(() => {
        getAllNotes();
    }, []);

    const changeNoteTitleHandler = (e) => {
        setNoteTitle(e.target.value);
    }

    const submitFormHandler = (e) => {
        e.preventDefault();

        if(noteTitle.trim() === "") {
            return alert('Please enter a note');
        }

        editMode ? updateNoteHandler() : createNote();
    }

    const createNote = () => {
        const newNote = {
            id: Date.now() + "",
            title: noteTitle,
        }
        fetch('http://localhost:3001/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newNote)
        })
        .then(
            () => {
                getAllNotes();
            }
        )
        // setNotes([newNote, ...notes]);
        setNoteTitle("");
    }

    const removeNoteHandler = (noteId) => {
        fetch(`http://localhost:3001/notes/${noteId}`, {
            method: 'DELETE'
        })
        .then(
            () => {
                getAllNotes();
            }
        )
        // setNotes(notes.filter(note => note.id !== noteId));
    } 

    const editNoteHandler = (note) => {
        setEditMode(true);
        setEditableNote(note);
        setNoteTitle(note.title);
    }
    const updateNoteHandler = () => {
        const {id , ...rest} = editableNote;
        const updatedNote = {...rest, title: noteTitle};
        fetch(`http://localhost:3001/notes/${editableNote.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedNote)
        })
        .then(
            () => {
                getAllNotes();
            }
        )
        // const updatedNotes = notes.map((note) => {
        //     if(note.id === editableNote.id) {
        //         return {...note, title: noteTitle};
        //     }
        //     return note;
        // });
        // setNotes(updatedNotes);
        setNoteTitle("");
        setEditMode(false);
        setEditableNote(null);
    }

    return (
        <div style={{  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "#f4f4f4", padding: "20px",width: "100%"}}>
            {/* Input Field and Add Button */}
            <form onSubmit={submitFormHandler}>
                <div style={{display: "flex",gap: "10px", marginBottom: "20px", padding: "10px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.2)", width: "400px"}}>
                    <input type="text" placeholder="Enter a note..." style={{padding: "8px", borderRadius: "5px", border: "1px solid #ccc", outline: "none", flex: "1"}} value={noteTitle} onChange={changeNoteTitleHandler}/>
                    <button type="submit" style={{ backgroundColor: "#007bff",color: "#fff", padding: "8px 12px", border: "none", borderRadius: "5px", cursor: "pointer"}}>
                        {editMode ? "Update" : "Add Note" }
                    </button>
                </div>
            </form>

            {/* Notes Container Card */}
            <div style={{backgroundColor: "#fff", padding: "20px", borderRadius: "10px",boxShadow: "0 4px 10px rgba(0,0,0,0.2)", width: "60%"}}>
                <h3 style={{ marginBottom: "15px", textAlign: "center", color: "#333" }}>Your Notes</h3>

                {/* Display Notes */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {notes.map((note) => (
                        <div key={note.id} style={{ backgroundColor: "#f8f9fa",padding: "15px", borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "center", width: "95%", border: "1px solid #ddd" }}>
                            <span>{note.title}</span>
                            <div>
                                <button onClick={() => editNoteHandler(note)} style={{ backgroundColor: "#ffc107", color: "#fff", padding: "5px 10px", border: "none", borderRadius: "5px", cursor: "pointer", marginRight: "5px"}}>
                                    Edit
                                </button>
                                <button onClick={() => removeNoteHandler(note.id)} style={{backgroundColor: "#dc3545", color: "#fff", padding: "5px 10px", border: "none", borderRadius: "5px", cursor: "pointer"}}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Note;