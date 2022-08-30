import { Card, Typography } from '@mui/material'
import React from 'react'

const Post = ({post}) => {
  return (
        <Card>
          <Typography>{post.creator}</Typography>
          <Typography>{post.title}</Typography>
        </Card>
  )
}

export default Post