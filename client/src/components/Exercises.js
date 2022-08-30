import { Box, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

const Exercises = () => {
  const posts = useSelector((state) => state.postsReducer);

  console.log(posts);
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
            {posts.map((post) => (
              <Grid item key={post._id}>
                <Post post={post}/>
              </Grid>
            ))}
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
