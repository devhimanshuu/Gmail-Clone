import { Paper, List, ListItem } from "@mui/material";
import React from "react";
import star from "../images/starIcon.png";
function Middle() {
  return (
    <div style={{ marginLeft: "4.3vw", width: "75vw" }}>
      <Paper elevation={0} style={{ border: "1px solid lightgrey" }}>
        <List>
          <ListItem>
            <img
              src={star}
              style={{ width: "1.4vw", height: "1.4vw" }}
              alt=""
            />
            <span>
              hhh
              <span>hghjg</span>
            </span>
          </ListItem>
        </List>
      </Paper>
    </div>
  );
}

export default Middle;
