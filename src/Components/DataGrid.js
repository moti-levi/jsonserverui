import React, { useEffect, useState } from "react";
import api from "../actions/api";
import axios from "axios";
import Grid from '@mui/material/Grid';
export const DataGrid = () => {
  const [data, setdata] = useState([]);
// http://localhost:43346/WeatherForecast
  useEffect(() => {
    axios
      .get("http://localhost:43346/api/Data", {      
      })
      .then((response) => {
        setdata(response.data);
        console.log(response.data);
      })
      // .catch((error)) =>{console.log(error)};
  }, []);

  return (
    <div>
      <ul>
        <ui>
        {data.map((task) => (
          task.title + ',' + task.url
        ))}
        </ui>
      </ul>
    </div>
  );
};
