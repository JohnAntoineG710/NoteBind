import React, { useState } from "react";

const CreateArea = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const changeNote = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value, folderID: props.activeFolder });
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
        {expand && (
          <input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={changeNote}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={expand ? 3 : 1}
          value={note.content}
          onClick={() => {
            setExpand(true);
          }}
          onChange={changeNote}
        />
        {expand && <button>Add</button>}
      </form>
    </div>
  );
};

export default CreateArea;
