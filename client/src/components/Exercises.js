import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Grid, InputAdornment, TextField } from "@mui/material";
import PostCard from "./PostCard";
import Loading from "./toolbox/Loading";
import SearchIcon from '@mui/icons-material/Search';
import Sort from "./toolbox/Sort";

const Exercises = ({sort, setSort}) => {
  const posts = useSelector((state) => state.postsReducer.posts);
  const [query, setQuery] = useState("");

  const findPosts = useMemo(() => (
    posts.filter(post => (
      post.title.toLowerCase().includes(query.toLowerCase())
    ))
  ), [posts, query])

  findPosts.sort((a,b) => {if(sort=== "likeinc"){
    return a.likeCount.length - b.likeCount.length
   }else if(sort=== "likedec"){ 
    return b.likeCount.length - a.likeCount.length
  } else {
    return findPosts
  }
})

  console.log(findPosts)
  return (
    <Grid container>
      <Grid item xs={12}>
        <TextField 
        style={{backgroundColor: "whitesmoke", borderRadius: "20px", margin: "15px 0px 0px 0px"}} 
        type="search" 
        label="Search with title"
        value={query} 
        onChange={(e) => setQuery(e.target.value)}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon fontSize="large" color="primary"/>
            </InputAdornment>
          )
        }}
        />
      </Grid>
      <Grid item xs={12} style={{display: "flex", justifyContent: "flex-end"}}>
        <Sort sort={sort} setSort={setSort}/>
      </Grid>
      <Grid item xs={12}>
        <Grid
        container
        alignItems="stretch"
        style={{ display: "flex", alignItems: "center"}}
        spacing={3}
        >
        {(!findPosts.length ? Array.from(new Array(3)) : findPosts).map((post, index) =>
              <Grid item key={index} xs={12} sm={4}>
                {post ? <PostCard post={post} /> : <Loading/>}
              </Grid>
        )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Exercises;
