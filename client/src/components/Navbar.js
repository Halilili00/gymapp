import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        gap: { sm: "120px", xs: "50px" },
        mt: { sm: "30px", xs: "20px" },
        mr: { sm: "30px", xs: "20px" }
      }}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", width: "80px", height: "50px", margin: "0 20px"}}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="25px" alignItems="center" justifyContent = "center">
        <Link to="/" style={{ textDecoration: "none", color: 'white'}}>
          Home
        </Link>
        <Link to="/exercises" style={{ textDecoration: "none", color: 'white'}}>
          Exercises
        </Link>
      </Stack>
      <Link to="/login" style={{fontSize:"25px", justifyContent:"flex-end", alignItems:"center", color: 'white'}}>Log in / Register</Link>
    </Stack>
  );
};

export default Navbar;
