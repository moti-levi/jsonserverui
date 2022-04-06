import React, { useEffect, useState } from "react";
import { Grid, Container, Box } from "@material-ui/core";

import ImageCard from "./ImageCard";
import FilterComp from "./FilterComp";
import SeachFilter from "./SearchFilter";

const DataGrid = () => {
  const [data, setdata] = useState([]);
  const [sorteddata, setSorteddata] = useState([]);
  let from=50;
  let itemsPerPage =80;
  const bestUrl="http://localhost:43346/api/Data/"+from+'/' +itemsPerPage
  useEffect(() => {    
    fetch(bestUrl)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setdata(
          data.map((x, index) => ({
            title: x.title,
            url: x.url,
          }))
        );
        setSorteddata(
          data.map((x, index) => ({
            title: x.title,
            url: x.url,
          }))
        );
      });
  }, []);

  const SortDataArray = (event) => {
    if (event.target.value > 0) {
      let orderder = data;
      let comparator;
      if (event.target.value === 1) {
        comparator = (a, b) => a.title.localeCompare(b.title);
      } else {
        comparator = (a, b) => b.title.localeCompare(a.title);
      }
      orderder = orderder.sort(comparator);

      const val = orderder.map((x, index) => ({
        title: x.title,
        url: x.url,
      }));
      setSorteddata(val);
    }
  };

  const changeFilterString = (strSort) => {
    if (strSort.length > 0) {
      let orderder = data;
      var result = data.filter((x) => x.title.toString().includes(strSort));
      console.log(result);
      const val = result.map((x, index) => ({
        title: x.title,
        url: x.url,
      }));
      setSorteddata(val);
    } else {
      setSorteddata(data);
    }
  };

  return (
    <Container>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "30ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <FilterComp onChange={SortDataArray} />
        <SeachFilter onChange={changeFilterString} />
      </Box>
      {sorteddata.length > 0 && (
        <Grid container spacing={3}>
          {sorteddata.map((value, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ImageCard carddata={value}></ImageCard>
              <h3>{value.title}</h3>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default DataGrid;
