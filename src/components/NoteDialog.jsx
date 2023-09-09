import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const NoteDialog = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [noteError, setNoteError] = useState(false);
  const [titleError, setTitleError] = useState(false);

  useEffect(() => {
    if (props.noteID) {
      setNote({
        key: props.noteID,
        title: props.title,
        content: props.content,
      });
    }
  }, [props]);

  const changeNote = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const handleClose = () => {
    setNote({
      title: "",
      content: "",
    });
    props.onReset();
  };

  const handleAction = () => {
    setTitleError(false);
    setNoteError(false);
    const filedNote = { ...note, folderID: props.activeFolder };
    if (filedNote.title === "" || filedNote.content === "") {
      if (filedNote.title === "") {
        setTitleError(true);
      }
      if (filedNote.content === "") {
        setNoteError(true);
      }
    } else {
      props.onAction(filedNote);
      handleClose();
    }
  };

  const inputProps = {
    type: "text",
    autoComplete: "off",
    onChange: changeNote,
  };

  return (
    <Dialog
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{props.actionLabel}</DialogTitle>
      <DialogContent>
        <TextField
          InputProps={{ ...inputProps, name: "title", value: note.title }}
          label="Title"
          fullWidth
          style={{ marginBottom: "24px" }}
          color="primary"
          error={titleError}
          helperText={titleError && "Please provide a title"}
        />
        <TextField
          InputProps={{
            ...inputProps,
            name: "content",
            value: note.content,
            rows: 3,
          }}
          label="Content"
          multiline
          fullWidth
          color="primary"
          error={noteError}
          helperText={noteError && "Please provide note content"}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAction} color="primary">
          {props.actionLabel}
        </Button>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NoteDialog;
