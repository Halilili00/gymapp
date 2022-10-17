import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import PostCard from "./PostCard";
import Loading from "./toolbox/Loading";

const Exercises = () => {
  const posts = useSelector((state) => state.postsReducer.posts);
  const user = JSON.parse(localStorage.getItem("profile"));
  const showPost = posts.filter(post => post.public || post.creatorId === user?.result._id)//poista

  console.log(posts);
  console.log(showPost);
  return (
    <Grid
      container
      alignItems="stretch"
      style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
      spacing={3}
    >
      {(!showPost.length ? Array.from(new Array(3)) : showPost).map((post, index) =>
            <Grid item key={index} xs={12} sm={4}>
              {post ? <PostCard post={post} /> : <Loading/>}
            </Grid>
      )}
    </Grid>
  );
};

export default Exercises;
