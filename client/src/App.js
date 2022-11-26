import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Box } from "@mui/material";

import "./App.css";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Navbar from "./components/Navbar";
import Form from "./pages/Form";
import Exercises from "./components/Exercises";
import Auth from "./components/Auth";
import MyAccount from "./pages/MyAccount";

const App = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
      <Box width="400px" sx={{ width: { xl: "1400px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/exerciseDetail/:title" element={<ExerciseDetail />} />
          <Route path="/form" element={<Form />}/>
          <Route path="/form/:id" element={<Form />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/MyAccount/:name" element={<MyAccount />} />
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </Box>
    </GoogleOAuthProvider>
  );
};

export default App;
