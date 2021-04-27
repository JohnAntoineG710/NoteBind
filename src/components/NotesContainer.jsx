import React, { useState, useEffect } from "react";
import { Grid, Box } from "@material-ui/core";
import Masonry from "react-masonry-css";
import Note from "./Note";
import CreateArea from "./CreateArea";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

const breakpoints = {
  default: 4,
  960: 2,
  1280: 3,
};

const NotesContainer = (props) => {
  const [folderNotes, setFolderNotes] = useState([]);

  useEffect(() => {
    setFolderNotes(
      props.list.filter((note) => note.folderID === props.activeFolder)
    );
  }, [props]);

  return (
    <Grid
      item
      xs={9}
      lg={10}
      style={{ position: "relative", maxHeight: "100%", overflow: "auto" }}
    >
      {folderNotes.length !== 0 && (
        <Box
          style={{
            maxHeight: "100%",
            overflow: "hidden",
          }}
        >
          <SimpleBar style={{ height: "93vh" }}>
            <Masonry
              breakpointCols={breakpoints}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {folderNotes.map((note) => {
                return (
                  <Note
                    key={note.key}
                    noteID={note.key}
                    noteFolder={note.folderID}
                    title={note.title}
                    content={note.content}
                    onDelete={props.delItem}
                    onEdit={props.editItem}
                    m={props.m}
                    newNote={props.newNote === note.key && true}
                    resetNewNote={props.resetNewNote}
                  />
                );
              })}
            </Masonry>
          </SimpleBar>
        </Box>
      )}
      <CreateArea
        onAdd={props.addItem}
        activeFolder={props.activeFolder}
        count={folderNotes.length}
      />
    </Grid>
  );
};

export default NotesContainer;
