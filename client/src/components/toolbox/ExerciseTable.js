import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const ExerciseTable = ({exercises}) => {
  return (
    <TableContainer component={Paper}>
        <Table style={{margin:"10px 0 15px 0", border: "5px double grey"}} aria-label="simple table">
            <TableHead style={{borderBottom: "2px solid black", fontWeight:"700"}} variant='head'>
                <TableRow> 
                    <TableCell style={{ fontWeight:"700"}}>Exercise</TableCell>
                    <TableCell style={{ fontWeight:"700"}}>Reps</TableCell>
                    <TableCell style={{ fontWeight:"700"}}>Weight (kg)</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {exercises.map((exercise, index) => (
                    <TableRow key={index}>
                        <TableCell component="th" scope="row">{exercise.exercise}</TableCell>
                        <TableCell>{exercise.reps}</TableCell>
                        <TableCell>{exercise.weight}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default ExerciseTable