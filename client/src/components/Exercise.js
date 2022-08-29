import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Exercise = ({exercises}) => {
  return (
    <TableContainer component={Paper}>
        <Table style={{margin:"10px 0 15px 0", border: "5px double grey"}} aria-label="simple table">
            <TableHead style={{borderBottom: "3px solid black" }}>
                <TableRow >
                    <TableCell>Exercise</TableCell>
                    <TableCell>Reps</TableCell>
                    <TableCell>Weight (kg)</TableCell>
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

export default Exercise