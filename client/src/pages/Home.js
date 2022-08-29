import { Box, Button } from "@mui/material";
import React from "react";
import Exercises from "../components/Exercises";

const Home = () => {
  return (
    <Box>
      <Exercises />
      <Button style={{position: "fixed", right: 25, bottom: 80, color: "red" , fontSize: 25, backgroundColor: "black"}} href="/form">Add new post</Button>
    </Box>
  );
};

export default Home;
