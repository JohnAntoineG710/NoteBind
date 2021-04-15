import React, { useState } from "react";
import FolderDialog from "./FolderDialog";

const Folder = (props) => {
  const [open, setOpen] = useState(false);

  const resetState = () => {
    setOpen(false);
  };

  return (
    <>
      <li
        onClick={() => {
          props.selectFolder(props.id);
        }}
        className={props.active === props.id ? "active" : null}
      >
        {props.name}
        <button
          onClick={(e) => {
            e.stopPropagation();
            props.deleteFolder(props.id);
          }}
        >
          X
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
        >
          E
        </button>
      </li>
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
