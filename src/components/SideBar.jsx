import React from "react";

const SideBar = (props) => (
  <div className="container">
    {props.folders.map((folder) => (
      <li
        key={folder.id}
        onClick={() => {
          props.selectFolder(folder.id);
        }}
        className={props.active === folder.id ? "active" : null}
      >
        {folder.name}
        <button
          onClick={() => {
            props.deleteFolder(folder.id);
          }}
        >
          X
        </button>
      </li>
    ))}
  </div>
);

export default SideBar;
