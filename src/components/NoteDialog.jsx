import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const NoteDialog = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (props.noteID) {
      setNote({
        key: props.noteID,
        title: props.title,
        content: props.content,
      });
    }
  }, [props]);

  useEffect(() => {
    return () => {
      props.onReset();
    };
  }, [open, props]);

  const changeNote = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value, folderID: props.activeFolder });
  };

  const handleClose = () => {
    setNote({
      title: "",
      content: "",
    });
    setOpen(false);
  };

  const handleAction = () => {
    props.onAction(note);
    handleClose();
  };

  const inputProps = {
    type: "text",
    autoComplete: "off",
    onChange: changeNote,
  };

  return (
    <Dialog
      open={open}
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
