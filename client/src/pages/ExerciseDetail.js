import React from "react";
import { Button, Card, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Exercise from "../components/toolbox/Exercise";
import moment from 'moment';
import { deletePost } from "../redux/actions/postActions";
import { useNavigate } from "react-router-dom";

const ExerciseDetail = () => {
  const post = useSelector((state) => state.postsReducer.post);
  const user = JSON.parse(localStorage.getItem("profile"))
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(deletePost(id))
    alert("Post is deleted!")
    navigate("/");
  }

  return (
    <Paper style={{ padding: "20px", borderRadius: "15px", marginTop: "10px"}} elevation={6}>
      {user?.result?._id === post?.creatorId && (
              <div>
              <Button variant="contained" onClick={() => navigate(`/form/${post._id}`)}>Update</Button>
              <Button variant="contained" onClick={() => remove(post._id)}>Delete</Button>
            </div>
            )}
      <Card style={{ display: "flex", width: "100%" }}>
        <div style={{ borderRadius: "20px", margin: "10px", flex: 1, minWidth: "50%"}}>
          <Typography variant="h3">{post.title}</Typography>
          <Typography variant="body1">{post.description}</Typography>
          {post.exercises?.length>0 ? <Exercise exercises={post.exercises}/> : null}
          <Typography variant="h6">Created by: {post.creator}</Typography>
          <Typography variant="body1">{moment(post.createdAt).format("LLL")}</Typography>
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
