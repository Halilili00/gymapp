import React, { useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import { Box } from '@mui/material'

import './App.css'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Form from './pages/Form'
import Exercises from './components/Exercises'

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  return (
    <Box width="400px" sx={{ width: { xl: '1400px' } }} m="auto">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercises' element={<Exercises/>}/>
        <Route path='/exerciseDetail/:title' element={<ExerciseDetail currentId={currentId}/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App