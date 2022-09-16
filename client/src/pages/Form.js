import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import FileBase from "react-file-base64";

import React, { useEffect, useState } from "react";
import ExerciseTable from "../components/toolbox/ExerciseTable";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../redux/actions/postActions";
import { useParams } from "react-router-dom";

const Form = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const postToUpdate = useSelector((state) => state.postsReducer.post);
  const param = useParams();
  const [exercises, setExercises] = useState({
    exercise: "",
    reps: "",
    weight: 0,
  });
  const [post, setPost] = useState({
    public: true,
    title: "",
    creator: user?.result.name,
    description: "",
    category: "",
    exercises: [],
    selectedFile: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, type, value } = e.target;
    if (name === "exercise" || name === "reps" || name === "weight") {
      setExercises({
        ...exercises,
        [name]: type === "number" ? parseFloat(value, 10) : value,
      });
    }
    const changedPost = {
      ...post,
      [name]: value,
    };
    setPost(changedPost);
    console.log(post);
  };

  const handleExercise = () => {
    const newExercises = [...post.exercises];
    newExercises.push(exercises);
    setPost({ ...post, exercises: newExercises });
    setExercises({ exercise: "", reps: "", weight: 0 });
  };

  const cleareForm = () => {
    setPost({
      public: true,
      title: "",
      creator: user?.result.name,
      description: "",
      category: "",
      exercises: [],
      selectedFile: "",
    });
  };

  useEffect(() => {
    if(param.id && postToUpdate._id){
      setPost(postToUpdate)
    }
  },[postToUpdate, param.id])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(param.id){
      dispatch(updatePost(post._id, post))
      alert("Post is updated!");
    }
    else {
      dispatch(createPost(post));
      alert("Post is saved")
      cleareForm()
    }
  };

  const renderLogin = () => {
    return (
      <Paper style={{ padding: "50px", marginTop: "20px" }}>
        <Typography variant="h3" align="center">
          Please Sign In to create new post
        </Typography>
      </Paper>
    );
  };

  const renderForm = () => {
    return (
      <Paper>
        <form onSubmit={handleSubmit} style={{ margin: "10px" }}>
          <Typography
            variant="h3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Create workout
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={post.public}
                  onChange={() => setPost({ ...post, public: !post.public })}
                />
              }
              label="Public"
              labelPlacement="start"
            />
          </FormGroup>
          <Typography variant="h6">Creator: {user.result.name}</Typography>
          <TextField
            value={post.title}
            name="title"
            type="text"
            fullWidth
            label="Title"
            onChange={handleChange}
            required
          />
          <TextField
            value={post.description}
            name="description"
            type="text"
            fullWidth
            label="Description"
            multiline
            rows={3}
            onChange={handleChange}
          />
          <FileBase
            type="img"
            multiple={false}
            onDone={({ base64 }) => setPost({ ...post, selectedFile: base64 })}
          />
          <FormControl style={{ margin: "10px 0 10px 0" }} fullWidth>
            <FormLabel>Category</FormLabel>
            <RadioGroup
              row
              name="category"
              value={post.category}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Full body"
                required
                control={<Radio required/>}
                label="Full body"
              />
              <FormControlLabel
                value="Chest"
                control={<Radio />}
                label="Chest"
              />
              <FormControlLabel value="Back" control={<Radio />} label="Back" />
              <FormControlLabel value="Arms" control={<Radio />} label="Arms" />
              <FormControlLabel value="Legs" control={<Radio />} label="Legs" />
            </RadioGroup>
          </FormControl>
          <Paper style={{ border: "5px double red", margin: "5px 0 10px 0" }}>
            {post?.exercises.length > 0 ? (
              <ExerciseTable exercises={post.exercises} />
            ) : null}
            <TextField
              value={exercises.exercise}
              name="exercise"
              type="text"
              fullWidth
              label="Exercise"
              onChange={handleChange}
            />
            <TextField
              value={exercises.reps}
              name="reps"
              type="text"
              fullWidth
              label="Reps"
              onChange={handleChange}
            />
            <TextField
              value={exercises.weight}
              name="weight"
              type="number"
              fullWidth
              label="Weight (kg)"
              onChange={handleChange}
            />
            <Button variant="contained" fullWidth onClick={handleExercise}>
              Add exercise
            </Button>
          </Paper>
          <Button
            variant="contained"
            color="success"
            size="large"
            fullWidth
            type="submit"
            style={{ marginBottom: "10px" }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    );
  };

  return <div>{user ? renderForm() : renderLogin()}</div>;
};

export default Form;
