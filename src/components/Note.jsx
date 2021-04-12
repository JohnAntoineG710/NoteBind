import React from "react";

const Note = (props) => (
  <div className="note">
    <h1>{props.title}</h1>
    <p>{props.body}</p>
    <button
      onClick={() => {
        props.onDelete(props.noteID);
      }}
    >
      DELETE
    </button>
  </div>
);

export default Note;