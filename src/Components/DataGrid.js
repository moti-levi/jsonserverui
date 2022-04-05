import React, { useEffect, useState } from "react";
import api from "../actions/api";
import axios from "axios";
import { Grid, Container, Paper,Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select } from "@material-ui/core";

import ImageCard from "./ImageCard";
import FilterComp from "./FilterComp";


const DataGrid = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:43346/api/Data")
      .then((data) => data.json())
      .then((data) => {
        setdata(
          data.map((x, index) => ({            
            title: x.title,
            url: x.url
          }))
        );
      });
  }, []);

  
  const SortDataArray = (event) => { 

    let orderder=data 
    let comparator;
    if(event.target.value===1){
      comparator = (a, b) => a.title.localeCompare(b.title);
    }
    else 
    {
      comparator = (a, b) => b.title.localeCompare(a.title);
    }
    orderder=orderder.sort(comparator)

    const val=orderder.map((x, index) => ({            
      title: x.title,
      url: x.url
    }))

    setdata(val);   
      
  };

  


  return (
   
    <Container>      
      <Paper spacing={3}>
      <FilterComp onChange={SortDataArray} />
      </Paper>     
      <Grid container spacing={3}>        
        {data.map((value, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ImageCard carddata={value}></ImageCard>
            <h3>{value.title}</h3>            
          </Grid>
        ))}       
        </Grid>        
    </Container>
  );
};

export default DataGrid;