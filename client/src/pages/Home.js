import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Exercises from "../components/Exercises";
import { getPosts } from "../redux/actions/postActions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])
  return (
    <Box>
      <Exercises />
      <Button style={{position: "fixed", right: 25, bottom: 80, color: "red" , fontSize: 25, backgroundColor: "black"}} href="/form">Add new post</Button>
    </Box>
  );
};

export default Home;
