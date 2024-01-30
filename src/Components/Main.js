import React from "react";
import { Grid } from "@mui/material";
import Navbarr from "./Navbar";
import Leftpanel from "./Leftpanel";
import Middle from "./Middle";
export default function Main() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Navbarr />
        </Grid>
        <Grid item xs={2}>
          <Leftpanel />
        </Grid>
        <Grid item xs={1}>
          <Middle />
        </Grid>
      </Grid>
    </div>
  );
}
