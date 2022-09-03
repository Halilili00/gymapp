import React from "react";
import { Card, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Exercise from "../components/Exercise";
import moment from 'moment';

const ExerciseDetail = () => {
  const post = useSelector((state) => state.postsReducer.post);
  console.log(post);

  return (
    <Paper style={{ padding: "20px", borderRadius: "15px", marginTop: "10px"}} elevation={6}>
      <Card style={{ display: "flex", width: "100%" }}>
        <div style={{ borderRadius: "20px", margin: "10px", flex: 1, minWidth: "50%"}}>
          <Typography variant="h3">{post.title}</Typography>
          <Typography variant="body1">{post.description}</Typography>
          {post.exercises?.length>0 ? <Exercise exercises={post.exercises}/> : null}
          <Typography variant="h6">Created by: {post.creator}</Typography>
          <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <img
            style={{
              borderRadius: "20px",
              objectFit: "cover",
              width: "100%",
              maxHeight: "600px",
            }}
            src={
              post.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt={post.title}
          />
        </div>
      </Card>
    </Paper>
  );
};

export default ExerciseDetail;
