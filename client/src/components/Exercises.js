import { Box, Grid } from "@mui/material";
import React from "react";
import Post from "./Post";

const Exercises = () => {
  return (
    <Box width="100%">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid item xs>
          <h1 style={{ borderBottom: "3px solid red" }}>Rinta</h1>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid item xs>
              <Post />
              <Post />
            </Grid>
            <Grid item xs>
              <Post />
              <Post />
            </Grid>
            <Grid item xs>
              <Post />
              <Post />
            </Grid>
            <Grid item xs>
              <Post />
              <Post />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs>
          <h1 style={{ borderBottom: "3px solid red" }}>Selkä</h1>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Exercises;
