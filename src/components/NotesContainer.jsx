import React from "react";
import { Box, Grid } from "@material-ui/core";
import Note from "./Note";
import CreateArea from "./CreateArea";

const NotesContainer = (props) => (
  <Grid item xs={9} style={{ maxHeight: "100%", overflow: "auto" }}>
    <Box m={props.m} style={{ overflow: "auto" }}>
      <Grid container style={{ maxHeight: "100%", overflow: "auto" }}>
        {props.list
          .filter((note) => note.folderID === props.activeFolder)
          .map((note) => (
            <Grid item xs={3} key={note.key}>
              <Note
                key={note.key}
                noteID={note.key}
                noteFolder={note.folderID}
                title={note.title}
                content={note.content}
                onDelete={props.delItem}
                onEdit={props.editItem}
                m={props.m}
              />
            </Grid>
          ))}
        <Grid item xs={1}>
          <CreateArea onAdd={props.addItem} activeFolder={props.activeFolder} />
        </Grid>
      </Grid>
    </Box>
  </Grid>
);

export default NotesContainer;
