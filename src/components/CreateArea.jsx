import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import NoteDialog from "./NoteDialog";

const CreateArea = (props) => {
  const [open, setOpen] = useState(false);

  const resetState = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        onClick={() => {
          setOpen(true);
        }}
      >
        <AddIcon color="primary" />
      </IconButton>
      {open && (
        <NoteDialog
          activeFolder={props.activeFolder}
          onAction={props.onAdd}
          onReset={resetState}
          actionLabel="Add Note"
        />
      )}
    </div>
  );
};

export default CreateArea;
