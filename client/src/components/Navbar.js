import React, { useEffect, useState } from "react";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import decode from 'jwt-decode';

import Logo from "../assets/images/logo.png";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/auth";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const logouting = () => {
    dispatch(logout())
    setUser(null);
    navigate("/");
  }

  useEffect(() => {
    const token = user?.token;
    
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logouting();
    }
    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        gap: { sm: "120px", xs: "50px" },
        mt: { sm: "30px", xs: "20px" },
        mr: { sm: "30px", xs: "20px" },
      }}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "80px",
            height: "50px",
            margin: "0 20px",
          }}
        />
      </Link>
      <Typography component={Link} to="/" variant="h2" style={{textDecoration: "none", color: 'white'}}>Fitness Blog App</Typography>
      {user ? (
        <div>
          <Avatar alt={user.result.name} src={user.result.imageUrl}>{user.name}</Avatar>
          <Typography variant="h6">{user.result.name}</Typography>
          <Button onClick={logouting}>Logout</Button>
        </div>
      ) : (
        <Link to="/login"
        style={{
          fontSize: "25px",
          justifyContent: "flex-end",
          alignItems: "center",
          color: "white",
        }}
      >
        Log in / Register
        </Link>
      )}
    </Stack>
  );
};

export default Navbar;
