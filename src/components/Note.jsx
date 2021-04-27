import React, { useState, useEffect, useRef } from "react";
import NoteDialog from "./NoteDialog";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: 0,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Note = (props) => {
  const [open, setOpen] = useState(false);
  const newNote = useRef();

  useEffect(() => {
    if (newNote.current) {
      newNote.current.scrollIntoView({ behavior: "smooth" });
      props.resetNewNote();
    }
  }, [props, newNote]);

  const resetState = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div ref={props.newNote ? newNote : null}>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Note
          </Typography>
          <Typography className={classes.pos} variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" component="p">
            {props.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              setOpen(true);
            }}
          >
            EDIT
          </Button>
          <Button
            size="small"
            onClick={() => {
              props.onDelete(props.noteID);
            }}
          >
            DELETE
          </Button>
        </CardActions>
      </Card>
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
