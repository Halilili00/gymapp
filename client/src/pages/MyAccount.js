import { Avatar, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Exercises from "../components/Exercises";
import { getUserPostWithId } from "../redux/actions/postActions";

const MyAccount = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const posts = useSelector((state) => state.postsReducer.posts);

  useEffect(() => {
    dispatch(getUserPostWithId(user.result._id));
  }, [dispatch]);
  console.log(posts);
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" style={{ backgroundColor: "#D6C9BD" }} mt={1}>
      <Grid item mt={2} style={{}}>
        <Avatar alt={user.result.name} src={user.result.imageUrl} sx={{ width: 200, height: 200, fontSize: "5rem" }}>{user?.result.name?.charAt(0)}</Avatar>
      </Grid>
      <Grid item mt={2} style={{}}>
        <Typography variant="h3">{user.result.name}</Typography>
      </Grid>
      <hr style={{ borderTop: "4px solid #403a3a", width: "95%" }} />
      <Exercises />
    </Grid>
  );
};

export default MyAccount;
