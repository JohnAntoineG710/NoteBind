import React, { useState, useEffect, useRef } from "react";
import { styled } from '@mui/material/styles';
import NoteDialog from "./NoteDialog";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
const PREFIX = 'Note';

const classes = {
  root: `${PREFIX}-root`,
  title: `${PREFIX}-title`,
  pos: `${PREFIX}-pos`
};

const Root = styled('div')({
  [`& .${classes.root}`]: {
    padding: 0,
  },
  [`& .${classes.title}`]: {
    fontSize: 14,
  },
  [`& .${classes.pos}`]: {
    marginBottom: 12,
  },
});

const Note = (props) => {
  const [open, setOpen] = useState(false);
  const newNote = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    if (newNote.current) {
      newNote.current.scrollIntoView({ behavior: "smooth" });
      props.resetNewNote();
    }
  }, [props, newNote]);

  const resetState = () => {
    setOpen(false);
  };



  return (
    <Root ref={props.newNote ? newNote : null}>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {t('content.note.headerTag')}
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
            {t('content.note.button.edit')}
          </Button>
          <Button
            size="small"
            onClick={() => {
              props.onDelete(props.noteID);
            }}
          >
            {t('content.note.button.delete')}
          </Button>
        </CardActions>
      </Card>
      {open && (
        <NoteDialog
          open={open}
          noteID={props.noteID}
          title={props.title}
          content={props.content}
          activeFolder={props.noteFolder}
          onAction={props.onEdit}
          onReset={resetState}
          action="edit"
        />
      )}
    </Root>
  );
};

export default Note;
