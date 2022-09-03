import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import PostCard from "./PostCard";

const Exercises = () => {
  const posts = useSelector((state) => state.postsReducer.posts);

  console.log(posts);
  return (
    <Grid container alignItems="stretch" style={{display:"flex", alignItems:"center"}} spacing={3}>
        {posts.map((post) => (
          <Grid item key={post._id} xs={12} sm={4}>
            <PostCard post={post} />
          </Grid>
        ))}
    </Grid>
  );
};

export default Exercises;
