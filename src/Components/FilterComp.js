import React, { useRef } from "react";
import {
  Box,
  MenuItem,
  Select,
} from "@material-ui/core";

const FilterComp = (props) => {
  const valueRef = useRef("");
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >      
      <Select
        labelId="Select Sort Order-label"
        id="Select Sort Order"
        label="Select Sort Order"
        value="0"
        onChange={(event) => props.onChange(event)}
      >
        <MenuItem value={0}>Sort Order </MenuItem>
        <MenuItem value={1}>Title ASC</MenuItem>
        <MenuItem value={2}>Title Desc</MenuItem>
      </Select>
    </Box>   
  );
};

export default FilterComp;
