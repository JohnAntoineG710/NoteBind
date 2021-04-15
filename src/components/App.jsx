import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Container,
  Grid,
} from "@material-ui/core";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import SideBar from "./SideBar";
import sampleNotes from "../notes";
import sampleFolders from "../folders";

const App = () => {
  const [list, setList] = useState([...sampleNotes]);
  const [folders, setFolders] = useState([...sampleFolders]);
  const [activeFolder, setActiveFolder] = useState(0);

  useEffect(() => {
    let listStorage = JSON.parse(localStorage.getItem("list"));
    let foldersStorage = JSON.parse(localStorage.getItem("folders"));
    if (listStorage || foldersStorage) {
      if (!listStorage) {
        listStorage = [];
      }
      if (!foldersStorage) {
        foldersStorage = [];
      }
      setFolders(foldersStorage);
      setList(listStorage);
    }
  }, []);

  useEffect(() => {
    const folderIDs = [];
    folders.map((folder) => folderIDs.push(folder.id));
    if (folders.length === 0) {
      setFolders([{ id: 1, name: "unidentified" }]);
      setActiveFolder(1);
    } else if (folderIDs.indexOf(activeFolder) === -1) {
      setActiveFolder(folders[0].id);
    }
    localStorage.setItem("folders", JSON.stringify(folders));
  }, [folders, activeFolder]);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const addItem = (note) => {
    const newNote = { ...note, key: list[list.length - 1].key + 1 };
    setList([...list, newNote]);
  };

  const delItem = (itemID) => {
    setList(
      list.filter((item) => {
        return item.key !== itemID;
      })
    );
  };

  const editItem = (note) => {
    setList((oldList) => {
      const removeFromList = oldList.filter((item) => {
        return item.key !== note.key;
      });
      const newList = [...removeFromList, note];
      newList.sort((a, b) => a.key - b.key);
      return [...newList];
    });
  };

  const selectFolder = (id) => {
    setActiveFolder(id);
  };

  const addFolder = (folder) => {
    const newID = folders[folders.length - 1].id + 1;
    setFolders((currFolders) => {
      return [...currFolders, { id: newID, name: folder.name }];
    });
    setActiveFolder(newID);
  };

  const editFolder = (folder) => {
    setFolders((oldFolders) => {
      const foldersAfterDel = oldFolders.filter((item) => {
        return item.id !== folder.id;
      });
      const newFolders = [...foldersAfterDel, folder];
      newFolders.sort((a, b) => a.id - b.id);
      return [...newFolders];
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
              <SideBar
                folders={folders}
                active={activeFolder}
                selectFolder={selectFolder}
                editFolder={editFolder}
                deleteFolder={deleteFolder}
                addFolder={addFolder}
              />
            </Grid>
            <Grid item className="notesBody">
              {list
                .filter((note) => note.folderID === activeFolder)
                .map((note) => (
                  <Note
                    key={note.key}
                    noteID={note.key}
                    noteFolder={note.folderID}
                    title={note.title}
                    content={note.content}
                    onDelete={delItem}
                    onEdit={editItem}
                  />
                ))}
              <CreateArea onAdd={addItem} activeFolder={activeFolder} />
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
