/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Gmail from "../images/gmail.png";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#F9F9F9" }}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: "3C3C3C" }}
          >
            <MenuIcon />
          </IconButton>
          <img src={Gmail} style={{ width: "2vw" }} />
          <Typography
            sx={{ color: "#3C3C3C", marginLeft: "10px" }}
            variant="h6"
            component="div"
          >
            Gmail
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
