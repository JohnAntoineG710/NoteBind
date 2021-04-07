import React, { useState } from "react";

const CreateArea = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const changeNote = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          props.onAdd(note);
          setNote({
            title: "",
            content: "",
          });
          e.preventDefault();
        }}
      >
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={changeNote}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={changeNote}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
