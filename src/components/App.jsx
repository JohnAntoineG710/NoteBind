import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Container,
  Grid,
} from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import CreateFolder from "./CreateFolder";
import SideBar from "./SideBar";
import notes from "../notes";
import defaultFolders from "../folders";

const App = () => {
  const [list, setList] = useState([...notes]);
  const [folders, setFolders] = useState([...defaultFolders]);
  const [activeFolder, setActiveFolder] = useState(folders[0].id);

  const addItem = (note) => {
    const newNote = { ...note, key: list[list.length - 1].key + 1 };
    setList([...list, newNote]);
  };

  const delItem = (itemID) => {
    setList(
      list.filter((item, index) => {
        return index !== itemID;
      })
    );
  };

  const selectFolder = (id) => {
    setActiveFolder(id);
    console.log(list);
  };

  const addFolder = (name) => {
    setFolders((currFolders) => {
      const newID = currFolders[currFolders.length - 1].id + 1;

      return [...currFolders, { id: newID, name: name }];
    });
  };

  const deleteFolder = (id) => {
    setList((oldList) => {
      return oldList.filter((note) => {
        return note.folderID !== id;
      });
    });
    setFolders((oldFolders) => {
      return oldFolders.filter((folder) => {
        return folder.id !== id;
      });
    });
  };

  return (
    <div className="viewport">
      <CssBaseline />
      {/* <Header /> */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">NoteBind!</Typography>
        </Toolbar>
      </AppBar>
      <Container component="main">
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
          className="main-grid"
        >
          <div className="appBody">
            <Grid item>
              <CreateFolder addFolder={addFolder} />
              <SideBar
                folders={folders}
                active={activeFolder}
                selectFolder={selectFolder}
                deleteFolder={deleteFolder}
              />
            </Grid>
            <Grid item className="notesBody">
              <CreateArea onAdd={addItem} activeFolder={activeFolder} />
              {list
                .filter((note) => note.folderID === activeFolder)
                .map((note) => (
                  <Note
                    key={note.key}
                    noteID={note.key}
                    title={note.title}
                    body={note.content}
                    onDelete={delItem}
                  />
                ))}
            </Grid>
          </div>
          <Grid item>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
