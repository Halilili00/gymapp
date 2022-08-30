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
import React, { useState } from "react";
import Exercise from "../components/Exercise";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/actions/postActions";

const Form = () => {
  const [exercises, setExercises] = useState({
    exercise: "",
    reps: "",
    weight: 0,
  });
  const [post, setPost] = useState({
    public: true,
    title: "",
    creator: "",
    description: "",
    category: "",
    exercises: [],
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
    setExercises({exercise: "", reps: "", weight: 0 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(post))
    alert("saved" + JSON.stringify(post));
  };

  return (
    <Paper>
      <form onSubmit={handleSubmit} style={{ margin: "10px"}}>
        <Typography variant="h3" style={{display:"flex", justifyContent:"center"}}>Create workout</Typography>
        <FormGroup>
          <FormControlLabel control={<Switch checked={post.public} onChange={() => setPost({...post, public: !post.public})}/>} label='Public' labelPlacement="start"/>
        </FormGroup>
        <TextField
          value={post.title}
          name="title"
          type="text"
          fullWidth
          label="Title"
          onChange={handleChange}
        />
        <TextField
          value={post.creator}
          name="creator"
          type="text"
          fullWidth
          label="Creator"
          onChange={handleChange}
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
        <FormControl style={{ margin: "10px 0 10px 0" }} fullWidth>
          <FormLabel>Category</FormLabel>
          <RadioGroup
            row
            name="category"
            value={post.category}
            onChange={handleChange}
          >
            <FormControlLabel value="Full body" control={<Radio />} label="Full body" />
            <FormControlLabel value="Chest" control={<Radio />} label="Chest" />
            <FormControlLabel value="Back" control={<Radio />} label="Back" />
            <FormControlLabel value="Arms" control={<Radio />} label="Arms" />
            <FormControlLabel value="Legs" control={<Radio />} label="Legs" />
          </RadioGroup>
        </FormControl>
        <Paper style={{ border: "5px double red", margin: "5px 0 10px 0" }}>
          {post.exercises.length>0 ? <Exercise exercises={post.exercises}/> : null}
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
          style={{marginBottom: "10px"}}
          onClick={() => console.log(post)}
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
