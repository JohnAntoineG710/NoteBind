import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import SideBar from "./SideBar";
import NotesContainer from "./NotesContainer";
import sampleNotes from "../notes";
import sampleFolders from "../folders";

const Content = (props) => {
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
    <Grid
      item
      container
      style={{
        flex: 1,
        backgroundColor: "#bbb",
        overflow: "hidden",
      }}
    >
      <SideBar
        m={5}
        folders={folders}
        active={activeFolder}
        selectFolder={selectFolder}
        editFolder={editFolder}
        deleteFolder={deleteFolder}
        addFolder={addFolder}
      />
      <NotesContainer
        m={2}
        list={list}
        activeFolder={activeFolder}
        delItem={delItem}
        addItem={addItem}
        editItem={editItem}
      />
    </Grid>
  );
};

export default Content;
