import React from "react";
import { Button } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

const LikeButton = ({ post, user, likeing }) => {
  return (
    <div>
      {user ? (
        <Button onClick={likeing}>
          {user?._id && post.likeCount.find((like) => like === user?._id) ? (
            <><ThumbUpAltIcon fontSize="small" />{post.likeCount.length > 2 ? `You and ${post.likeCount.length - 1} others`: `${post.likeCount.length} like${post.likeCount.length > 1 ? 's' : ''}`}</>
          ) : (
            <><ThumbUpOffAltIcon fontSize="small" />{post.likeCount.length} {post.likeCount.length <= 1 ? 'Like' : 'Likes'}</>
          )}
        </Button>
      ) : (
        <Button disabled><ThumbUpAltIcon fontSize="small" /> {post.likeCount.length} {post.likeCount.length <= 1 ? 'Like' : 'Likes'}</Button>
      )}
    </div>
  );
};

export default LikeButton;
