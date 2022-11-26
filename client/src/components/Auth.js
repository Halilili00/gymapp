import React, { useState } from "react";
import {
  Alert,
  Avatar,
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Input from "./toolbox/Input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn, signUp, googleAuth } from "../redux/actions/auth";
import { GoogleLogin } from "@react-oauth/google";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [signData, setSignData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.generalReducer.isLoading);
  const error = useSelector((state) => state.authReducer.errors);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSignup) {
      dispatch(signUp(signData, navigate));
    } else {
      dispatch(signIn(signData, navigate));
    }
    //console.log(signData);
  };

  const handleChange = (event) => {
    let { name, value } = event.target;
    setSignData({ ...signData, [name]: value });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const switchMode = () => {
    setIsSignup(!isSignup);
    setShowPassword(false);
  };

  const onError = () => {
    console.log("error");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
        elevation={3}
      >
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
              autoFocus
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          {error && <Alert severity="error">{error.response.data.message}</Alert>}
          {isLoading ?
          <Button style={{ marginTop: "10px", marginBottom: "10px" }} fullWidth variant="contained" color="primary" disabled>{isSignup ? <>Sign Up <CircularProgress size="1.5rem" style={{marginLeft: 10}}/></> : <>Sign In <CircularProgress size="1.5rem" style={{marginLeft: 10}}/></>}</Button>: 
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>}
          <GoogleLogin
          onSuccess={(res) => dispatch(googleAuth(res, navigate))}
          onError ={onError}
          theme="filled_blue"
          width="300px"
          />
          <Grid container justify="flex-end" mt={2}>
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
