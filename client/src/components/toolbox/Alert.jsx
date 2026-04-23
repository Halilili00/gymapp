import React from 'react'
import { Paper, Typography } from '@mui/material'

const Alert = ({message}) => {
  return (
    <Paper style={{ padding: "50px", marginTop: "20px" }}>
        <Typography variant="h3" align="center">
          {message}
        </Typography>
      </Paper>
  )
}

export default Alert