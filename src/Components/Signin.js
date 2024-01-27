/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Button } from "@mui/material";
import google from "../images/Google_2015_logo.svg.png";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../Firebase/setup";

function Signin() {
  const googleSignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
    console.log(auth);
  };
  return (
    <div
      style={{
        position: "absolute",
        left: "25%",
        padding: "150px",
      }}
    >
      <div
        style={{
          border: "1px solid grey",
          padding: "20px",
          textAlign: "center",
          borderRadius: "5px",
          minHeight: "310px",
          maxWidth: "350px",
        }}
      >
        <img src={google} style={{ height: "50px" }} />
        <h2 style={{ fontWeight: "200" }}>Create your google clone Account</h2>
        <h3 style={{ fontWeight: "200" }}>Click the signin button</h3>
        <Button onClick={googleSignin} varient="contained">
          Signin with google
        </Button>
      </div>
    </div>
  );
}

export default Signin;
