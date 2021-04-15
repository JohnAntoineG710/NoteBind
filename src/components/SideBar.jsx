import React from "react";
import Folder from "./Folder";
import CreateFolder from "./CreateFolder";

const SideBar = (props) => {
  return (
    <div className="container">
      <ul>
        {props.folders.map((folder) => (
          <Folder
            key={folder.id}
            id={folder.id}
            name={folder.name}
            active={props.active}
            selectFolder={props.selectFolder}
            deleteFolder={props.deleteFolder}
            editFolder={props.editFolder}
          />
        ))}
      </ul>
      <CreateFolder addFolder={props.addFolder} />
    </div>
  );
};

export default SideBar;
