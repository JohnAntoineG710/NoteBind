import React, { useState, useEffect, useRef } from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import FolderDialog from "./FolderDialog";
import { useTranslation } from "react-i18next";

const Folder = (props) => {
  const [open, setOpen] = useState(false);
  const newFolder = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    if (newFolder.current) {
      newFolder.current.scrollIntoView({ behavior: "smooth" });
      props.resetNewFolder();
    }
  }, [props, newFolder]);

  const resetState = () => {
    setOpen(false);
  };

  return (
    <div ref={props.newFolder ? newFolder : null}>
      <ListItemButton
        selected={props.active === props.id}
        onClick={() => {
          props.selectFolder(props.id);
        }}
        className="folder-item"
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
            size="large">
            <BorderColorRoundedIcon />
          </IconButton>
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              props.deleteFolder(props.id);
            }}
            size="large">
            <DeleteForeverRoundedIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItemButton>
      {open && (
        <FolderDialog
          open={open}
          folderID={props.id}
          folderName={props.name}
          onReset={resetState}
          onAction={props.editFolder}
          label={t('content.sideBar.folderDialog.action.edit')}
        />
      )}
    </div>
  );
};

export default Folder;
