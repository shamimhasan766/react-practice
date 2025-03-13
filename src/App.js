import './App.css';
import Counter from './components/Counter';
import Note from './components/Note';
import Post from './components/Post';
import Student from './components/Student';
import { BrowserRouter, Route, Routes, Link } from "react-router";

function App() {
  const navStyle = {
    backgroundColor: '#333',
    padding: '15px',
    position: 'sticky',
    top: '0',
    zIndex: '100'
  };

  const navListStyle = {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    margin: '0',
    padding: '0',
    gap: '20px'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    transition: 'background-color 0.3s'
  };

  return (
    <BrowserRouter>
      <nav style={navStyle}>
        <ul style={navListStyle}>
          <li><Link to="/" style={linkStyle}>Note</Link></li>
          <li><Link to="/counter" style={linkStyle}>Counter</Link></li>
          <li><Link to="/post" style={linkStyle}>Post</Link></li>
          <li><Link to="/student" style={linkStyle}>Student</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Note />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/post" element={<Post />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
