import React from "react";
import Folder from "./Folder";
import CreateFolder from "./CreateFolder";
import { Grid, Box } from "@material-ui/core";

const SideBar = (props) => {
  return (
    <Grid item xs={3}>
      <Box m={props.m}>
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
      </Box>
    </Grid>
  );
};

export default SideBar;
