import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import CreateArea from "../components/CreateArea";
import Note from "../components/Note";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/api/notes")
      .then(response => {
        console.log("Fetched Notes:", response.data); // Debugging
        setNotes(response.data);
      })
      .catch(error => console.error("Error fetching notes:", error));
  }, []);

  function addNote(newNote) {
    axios.post("http://localhost:5001/api/notes", newNote)
      .then(response => {
        setNotes(prevNotes => [...prevNotes, response.data]);  
      })
      .catch(error => console.error("Error adding note:", error));
  }

  function deleteNote(id) {
    axios.delete(`http://localhost:5001/api/notes/${id}`)
      .then(() => {
        setNotes(prevNotes => prevNotes.filter(note => note._id !== id));
      })
      .catch(error => console.error("Error deleting note:", error));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note) => (
        <Note
          key={note._id}
          id={note._id}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
}

export default App;
