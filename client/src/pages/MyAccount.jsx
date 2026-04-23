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

  return (
    <Grid container direction="column" sx={{ backgroundColor: "#D6C9BD", alignItems: "center", justifyContent: "center", marginTop: "10px", padding: { xs: "0 4px 0 4px", md: "0 20px 0 20px" } }}>
      <Grid style={{ marginTop: "10px" }}>
        <Avatar alt={user.result.name} src={user.result.imageUrl} style={{ width: 200, height: 200, fontSize: "5rem" }}>{user?.result.name?.charAt(0)}</Avatar>
      </Grid>
      <Grid style={{ marginTop: "10px" }} >
        <Typography variant="h3">{user.result.name}</Typography>
      </Grid>
      <hr style={{ borderTop: "4px solid #403a3a", width: "95%" }} />
      <Exercises />
    </Grid>
  );
};

export default MyAccount;
