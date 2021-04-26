import React, { useState } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import BorderColorRoundedIcon from "@material-ui/icons/BorderColorRounded";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import FolderDialog from "./FolderDialog";

const Folder = (props) => {
  const [open, setOpen] = useState(false);

  const resetState = () => {
    setOpen(false);
  };

  return (
    <>
      <ListItem
        button
        selected={props.active === props.id}
        onClick={() => {
          props.selectFolder(props.id);
        }}
        divider
      >
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary={props.name} />
        <ListItemSecondaryAction className="folder-item-action">
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
            }}
          >
            <BorderColorRoundedIcon />
          </IconButton>
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              props.deleteFolder(props.id);
            }}
          >
            <DeleteForeverRoundedIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      {open && (
        <FolderDialog
          folderID={props.id}
          folderName={props.name}
          onReset={resetState}
          onAction={props.editFolder}
          label="Edit Folder"
        />
      )}
    </>
  );
};

export default Folder;
