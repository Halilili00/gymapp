import React, { useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
  Button,
  Box,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import decode from "jwt-decode";

import Logo from "../assets/images/logo.png";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/auth";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { googleLogout } from "@react-oauth/google";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const logouting = () => {
    handleClose();
    dispatch(logout());
    googleLogout();
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logouting();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "grey" }}>
      <Toolbar>
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
              margin: "0 5px",
            }}
          />
        </Link>
        <Typography
          component={Link}
          to="/"
          variant="h4"
          style={{ textDecoration: "none", color: "white" }}
          sx={{ flexGrow: 1, marginLeft: {sm: "25px", xs: "7px"}}}
        >
          Fitness Blog
        </Typography>
        {user ? (
          <>
          <Box
            sx={{ flexGrow: 0, display: {xs: "none", sm:"flex" } }}
            style={{
              padding: "5px",
              justifyContent: "space-between",
            }}
          >
            <div onClick={handleMenu} style={{display: "flex"}}>
              <Avatar
                alt={user.result.name}
                src={user.result.imageUrl}
              >
                {user?.result.name?.charAt(0)}
              </Avatar>
              <Typography
                variant="h6"
                style={{ marginLeft: "5px", marginTop: "3px" }}
              >
                {user?.result.name}
              </Typography>
            </div>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} component={Link} to={"/MyAccount/" + user.result.name} >My account</MenuItem>
              <MenuItem onClick={logouting}>Logout</MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0, display: {xs: "flex", sm:"none" } }}
            style={{
              padding: "5px",
              justifyContent: "space-between",
            }}>
              <MenuOutlinedIcon onClick={handleMenu} sx={{ display: {xs: "flex", sm: "none"} }}/>
          </Box>
          </>
        ) : (
          <>
          <Button color="inherit" component={Link} to="/login" sx={{display: {xs: "none", sm:"flex" } }}>
            Sing in/Sing up
          </Button>
          <MenuOutlinedIcon onClick={handleMenu} sx={{ display: {xs: "flex", sm: "none"} }}/>
          <Menu
          sx={{ mt: "45px", display: {xs: "flex", sm: "none"} }}
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem component={Link} to="/login">Sing in</MenuItem>
          <MenuItem component={Link} to="/login">Sing up</MenuItem>
        </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
