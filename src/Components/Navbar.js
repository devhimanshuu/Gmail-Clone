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
import { Avatar, Grid } from "@mui/material";
import lens from "../images/searchIcon.png";
import { auth } from "../Firebase/setup";
export default function Navbarr() {
  return (
    <Grid container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          elevation={0}
          position="static"
          sx={{
            backgroundColor: "#F9F9F9",
            minHeight: "5vw",
            minWidth: "100vw",
            paddingTop: "7px",
            paddingRight: "30px",
          }}
        >
          <Toolbar variant="dense">
            <Grid item xs={2}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: "0.8vw", color: "#3C3C3C" }}
                >
                  <MenuIcon sx={{ width: "2vw" }} />
                </IconButton>
                <img src={Gmail} style={{ width: "2.3vw" }} />
                <Typography
                  sx={{
                    color: "#3C3C3C",
                    marginLeft: "1vw",
                    fontSize: "1.8vw",
                  }}
                  variant="h6"
                  component="div"
                >
                  Gmail
                </Typography>
              </div>
            </Grid>
            <Grid item xs={9}>
              <div
                style={{
                  marginLeft: "3vw",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "40px",
                  backgroundColor: "#E4EFFA",
                  width: "55vw",
                  height: "3.7vw",
                }}
              >
                <img
                  src={lens}
                  style={{
                    width: "1.3vw",
                    height: "1.3vw",
                    alignItems: "center",
                    marginLeft: "15px",
                  }}
                  alt="lens_icon"
                />
                <input
                  placeholder="Search mail"
                  style={{
                    marginLeft: "3vw",
                    height: "3vw",
                    width: "45vw",
                    backgroundColor: "#E4EFFA",
                    border: "none",
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={1}>
              <Avatar
                sx={{ marginLeft: "7.5vw", width: "3vw", height: "3vw" }}
                src={auth.currentUser?.photoURL}
              />
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </Grid>
  );
}
