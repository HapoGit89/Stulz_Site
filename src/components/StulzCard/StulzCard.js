import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./StulzCard.css"





const StulzCard =  ({src, alt, text, title, theme}) => {
  // Reusable Card Content styled for Stulz CI
   
    if (theme == "light"){
    return (
        
        <Card  sx={[ {display: 'flex', flexDirection: "row"}, {width: 0.6, height: 0.35}, {backgroundColor: "#f9f9f9"}]} >
          <CardMedia
            component="img"
            image={src}
            alt={alt}
            style={{width: "50%"}}
          />
          <CardContent sx={[{width: 0.5}, {padding: 3.5}]}>
            <Typography align="left" gutterBottom variant="h3" component="div">
              {title}
            </Typography>
            <Typography align="left" variant="body1" color="text.secondary">
            {text}
            </Typography>
          </CardContent>
         
        </Card>
      
     
    )
    }
  else {
    return (
      <Card  sx={[ {display: 'flex', flexDirection: "row"}, {width: 0.6, height: 0.35}, {backgroundColor: "#141414"}]} >
      <CardMedia
        component="img"
        image={src}
        alt={alt}
        style={{width: "40%"}}
      />
      <CardContent sx={[{width: 0.6}, {padding: 3.5}]}>
        <Typography align="left" sx={{color: "#f9f9f9"}} gutterBottom variant="h3" component="div">
          {title}
        </Typography>
        <Typography align="left" sx={{color: "#f9f9f9"}} variant="body1" color="text.secondary">
        {text}
        </Typography>
      </CardContent>
     
    </Card>
    )
  }}


export default StulzCard