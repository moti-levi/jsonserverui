import React,{  useState } from "react";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";


const FilterComp = (props) => {
    
//   const [sortorder, setsortorder] = useState("");

//   const handleChange = (event) => {
//     sortorder(event.target.value);
//     alert(event.target.value);
//   };

  return (
    <Box sx={{ minWidth: 50 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort By:</InputLabel>
        <Select
          labelId="Select Sort Order-label"
          id="Select Sort Order"
            value=""
          label="Select Sort Order"
          onChange={event => props.onChange(event)} 
        >          
          <MenuItem value={1}>Title ASC</MenuItem>
          <MenuItem value={2}>Title Desc</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterComp;
