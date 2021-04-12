import React, { useState } from "react";

const CreateFolder = (props) => {
  const [newFolder, setNewFolder] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;
    setNewFolder(text);
  };

  const addFolder = (e) => {
    props.addFolder(newFolder);
    setNewFolder("");
    e.preventDefault();
  };

  return (
    <div className="create-folder">
      <input
        name="createFolder"
        type="text"
        value={newFolder}
        onChange={handleChange}
      />
      <button onClick={addFolder}>Add Folder</button>
    </div>
  );
};

export default CreateFolder;
