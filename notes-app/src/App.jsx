import { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [state, setState] = useState({
    title: "",
    note: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      ...state,
      id: Math.random() * 10,
    };
    setNotes([...notes, newNote]);
    setState({
      title: "",
      note: "",
    }); // Reset the form fields
  };

  const deleteHandler = (id) => {
    const leftNote = notes.filter((note) => note.id !== id);
    setNotes(leftNote);
  };

  return (
    <div className='App'>
      <h1 className='title'>React Notes App</h1>
      <div className="create-note">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="title"
            name="title"
            className='title-input'
            onChange={handleChange}
            value={state.title}
          />
          <textarea
            name="note"
            cols={30}
            rows={10}
            placeholder="note"
            className='note-input'
            onChange={handleChange}
            value={state.note}
          ></textarea>
          <button type="submit" className='add-button'>Add note</button>
        </form>
      </div>
      <div className="note-container">
        {notes.length > 0 ? (
          notes.map((note) => (
            <div className="note" key={note.id}>
              <button className="delete-note" onClick={() => deleteHandler(note.id)}>x</button>
              <h1 className='card-title'>{note.title}</h1>
              <p>{note.note}</p>
            </div>
          ))
        ) : (
          <p className='no-note'>No notes available</p>
        )}
      </div>
    </div>
  );
}

export default App;
