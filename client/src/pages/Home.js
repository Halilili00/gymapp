import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Exercises from "../components/Exercises";
import { getPosts } from "../redux/actions/postActions";

const Home = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const location = useLocation();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, location]);

  return (
    <Box>
      <Exercises />
      {user && (
        <Button
          sx={{
            right: { xl: "5%", lg: 10, xs: 7 },
            bottom: { sm: 80, xs: 20 },
          }}
          style={{
            position: "fixed",
            color: "red",
            fontSize: 25,
            backgroundColor: "black",
          }}
          href="/form"
        >
          Add new post
        </Button>
      )}
    </Box>
  );
};

export default Home;
