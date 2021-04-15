import React, { useState } from "react";
import NoteDialog from "./NoteDialog";

const Note = (props) => {
  const [open, setOpen] = useState(false);

  const resetState = () => {
    setOpen(false);
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.onDelete(props.noteID);
        }}
      >
        DELETE
      </button>
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        EDIT
      </button>
      {open && (
        <NoteDialog
          noteID={props.noteID}
          title={props.title}
          content={props.content}
          activeFolder={props.noteFolder}
          onAction={props.onEdit}
          onReset={resetState}
          actionLabel="Edit Note"
        />
      )}
    </div>
  );
};

export default Note;
