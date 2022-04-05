import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
} from "@material-ui/core";


const ImageCard = ({carddata}) => {
  return (
    <Card elevation={15} sx={{ maxWidth: 345 }}>
      <CardHeader        
       title={carddata.title.toString().substring(0,8)+'....'}
        //subheader={carddata.title}
      />
      <CardMedia
        component="img"
        // height="194"
        src={carddata.url}
        alt={carddata.title}
      />      
    </Card>
  );
};

export default ImageCard;
