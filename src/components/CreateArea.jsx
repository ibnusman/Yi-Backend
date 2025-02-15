import React, { useState } from "react";

function CreateArea({ onAdd }) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({ ...prevNote, [name]: value }));
  }

  function submitNote(event) {
    event.preventDefault();
    if (note.title || note.content) {
      onAdd(note);  // Send note to backend
      setNote({ title: "", content: "" }); // Reset form
    }
  }

  return (
    <form>
      <input
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
      />
      <textarea
        name="content"
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
        rows="3"
      />
      <button onClick={submitNote}>Add</button>
    </form>
  );
}

export default CreateArea;
