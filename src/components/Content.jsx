import React, { useState, useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";
import SideBar from "./SideBar";
import NotesContainer from "./NotesContainer";

const Content = (props) => {
  const [list, setList] = useState([...props.sampleNotes]);
  const [folders, setFolders] = useState([...props.sampleFolders]);
  const [activeFolder, setActiveFolder] = useState(0);
  const newElementID = useRef();

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
    if (props.randomDataToggle) {
      setFolders([...props.randomFolders]);
      setList([...props.randomNotes]);
    } else if (props.randomDataToggle === false) {
      setFolders([...props.sampleFolders]);
      setList([...props.sampleNotes]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.randomDataToggle]);

  useEffect(() => {
    const folderIDs = [];
    folders.map((folder) => folderIDs.push(folder.id));
    if (folders.length === 0) {
      setFolders([{ id: 1, name: "unidentified" }]);
      setActiveFolder(1);
    } else if (folderIDs.indexOf(activeFolder) === -1) {
      newElementID.current = { id: folders[0].id, type: "folder" };
      setActiveFolder(folders[0].id);
    }
    localStorage.setItem("folders", JSON.stringify(folders));
  }, [folders, activeFolder]);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const addItem = (note) => {
    const key = list[list.length - 1].key + 1;
    const newNote = { ...note, key: key };
    setList([...list, newNote]);
    newElementID.current = { id: key, type: "note" };
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
    newElementID.current = { id: newID, type: "folder" };
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

  const resetNewElement = () => {
    newElementID.current = null;
  };

  return (
    <Grid
      item
      container
      style={{
        flex: 1,
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
        newFolder={
          newElementID.current && newElementID.current.type === "folder"
            ? newElementID.current.id
            : null
        }
        resetNewFolder={resetNewElement}
      />
      <NotesContainer
        m={2}
        list={list}
        activeFolder={activeFolder}
        delItem={delItem}
        addItem={addItem}
        editItem={editItem}
        newNote={
          newElementID.current && newElementID.current.type === "note"
            ? newElementID.current.id
            : null
        }
        resetNewNote={resetNewElement}
      />
    </Grid>
  );
};

export default Content;
