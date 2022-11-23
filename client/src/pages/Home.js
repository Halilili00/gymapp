import React, { useEffect, useState } from "react";
import { Box, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Exercises from "../components/Exercises";
import { getAllPosts, getPosts } from "../redux/actions/postActions";

const Home = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const location = useLocation();
  const [sort, setSort] = useState("no")

  useEffect(() => {
    if(user){
      dispatch(getAllPosts(user.result._id,sort))
    } else {
      dispatch(getPosts(sort));
    }
  }, [dispatch, location, sort]);

  return (
    <Box>
      <Exercises sort={sort} setSort={setSort}/>
      {user && (
        <Fab variant="extended" style={{position: "sticky", bottom: 50, left: 1450, fontSize: 20}} href="/form">
          <AddIcon fontSize="90px"/> Add new post
        </Fab>
      )}
    </Box>
  );
};

export default Home;
