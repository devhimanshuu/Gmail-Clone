/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Button } from "@mui/material";
import google from "../images/Google_2015_logo.svg.png";
function Signin() {
  return (
    <div style={{ position: "absolute", top: "20%", left: "30%" }}>
      <div
        style={{
          border: "1px solid grey",
          padding: "20px",
          textAlign: "center",
          borderRadius: "5px",
          height: "310px",
        }}
      >
        <img src={google} style={{ height: "50px" }} />
        <h2 style={{ fontWeight: "200" }}>Create your google clone Account</h2>
        <h3 style={{ fontWeight: "200" }}>Click the signin button</h3>
        <Button varient="contained">Signin with google</Button>
      </div>
    </div>
  );
}

export default Signin;
