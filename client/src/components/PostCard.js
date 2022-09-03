import React from "react";
import {
    Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from "moment";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPostWithId } from '../redux/actions/postActions';

const PostCard = ({ post}) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <CardHeader
        title={post.creator}
        subheader={moment(post.createdAt).fromNow()}
        action={
          <IconButton onClick={() => dispatch(getPostWithId(post._id))}>
            <Link to={"/exerciseDetail/"+ post.title}><MoreVertIcon/></Link>
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        height="150"
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        alt={post.title}
      />
      <CardContent>
      <Typography variant="h5">{post.title}</Typography>
        <Typography variant="body2" >{post.description.split(' ').splice(0, 20).join(' ')}...</Typography>
      </CardContent>
      <CardActions style={{display: "flex", justifyContent: "space-between"}}>
        <Button><ThumbUpIcon fontSize="small"/>Like { post.likeCount}</Button>
        <Button><DeleteIcon fontSize="small"/>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;
