import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Sort = ({sort, setSort}) => {
  return (
    <FormControl
      style={{
        backgroundColor: "whitesmoke",
        borderRadius: "20px",
      }}
    >
      <InputLabel></InputLabel>
      <Select
        value={sort}
        label="sort"
        onChange={(e) => setSort(e.target.value)}
      >
        <MenuItem value="datenew">Date newest</MenuItem>
        <MenuItem value="dateold">Date oldest</MenuItem>
        <MenuItem value="likeinc">Like increase</MenuItem>
        <MenuItem value="likedec">Like decrease</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Sort;
