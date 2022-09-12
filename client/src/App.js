import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { Box } from '@mui/material'

import './App.css'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Form from './pages/Form'
import Exercises from './components/Exercises'
import Auth from './components/Auth'

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1400px' } }} m="auto">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercises' element={<Exercises/>}/>
        <Route path='/exerciseDetail/:title' element={<ExerciseDetail/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/form/:id' element={<Form/>}/>
        <Route path='/login' element={<Auth/>}/>
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App