import React, { useRef } from "react";
import {
  Box,
  TextField,
} from "@material-ui/core";

const SeachFilter = (props) => {
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
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        inputRef={valueRef}
        onChange={() => {
          props.onChange(valueRef.current.value);
        }}
      />      
    </Box>    
  );
};

export default SeachFilter;
