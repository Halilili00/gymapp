import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Grid, InputAdornment, TextField } from "@mui/material";
import PostCard from "./PostCard";
import Loading from "./toolbox/Loading";
import SearchIcon from '@mui/icons-material/Search';
import Sort from "./toolbox/Sort";
import Alert from "./toolbox/Alert";

const Exercises = ({ sort, setSort }) => {
  const posts = useSelector((state) => state.postsReducer.posts);
  const isLoading = useSelector((state) => state.generalReducer.isLoading);
  const [query, setQuery] = useState("");

  const findPosts = useMemo(() => (
    posts.filter(post => (
      post.title.toLowerCase().includes(query.toLowerCase())
    ))
  ), [posts, query])

  findPosts.sort((a, b) => {
    if (sort === "likeinc") {
      return a.likeCount.length - b.likeCount.length
    } else if (sort === "likedec") {
      return b.likeCount.length - a.likeCount.length
    } else {
      return findPosts
    }
  })

  return (
    <Grid container>
      {findPosts.length > 0 && <Grid size={12} style={{ marginBottom: '8px' }}>
        <TextField
          style={{ backgroundColor: "whitesmoke", borderRadius: "20px", margin: "15px 0px 0px 0px", border: '20px' }}
          type="search"
          label="Search posts with title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          fullWidth
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon fontSize="large" color="primary" />
                </InputAdornment>
              )
            },
          }}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        />
      </Grid>}
      <Grid size={12} style={{ display: "flex", justifyContent: 'flex-end' }}>
        {sort ? <Sort sort={sort} setSort={setSort} /> : null}
      </Grid>
      <Grid size={12}>
        <Grid
          container
          style={{ display: "flex", alignItems: "center" }}
          spacing={3}
        >
          {isLoading ? Array.from(new Array(3)).map((post, index) =>
            <Grid key={index} size={{ xs: 12, sm: 4 }}>
              <div>Loading..</div><Loading />
            </Grid>
          ) : findPosts.length ? findPosts.map(post =>
            <Grid key={post._id} size={{ xs: 12, sm: 4 }}>
              <PostCard post={post} />
            </Grid>) :
            <Grid size={12} style={{ marginBottom: 5 }}>
              <Alert message={"You don't have post!"} />
            </Grid>
          }
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Exercises;