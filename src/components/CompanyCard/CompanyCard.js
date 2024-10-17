
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';





const CompanyCard =  ({src, alt, text, title}) => {
  // Reusable Card Content styled for use in Cooperation Page
   
   
    return (
      <Card  sx={[ {display: 'flex', flexDirection: "column"}, {width: 0.35, height: 0.4}, {backgroundColor: "black"}, {marginBottom: "10%"}]} >
      <CardMedia
        component="img"
        image={src}
        alt={alt}
        height="200"
        style={{objectFit: "contain"}}
      />
      <CardContent sx={[{width: 0.6}, {padding: 3.5}]}>
        <Typography align="left" sx={{color: "#f9f9f9"}} variant="body1" color="text.secondary">
        {text}
        </Typography>
      </CardContent>
     
    </Card>
    )
  }


export default CompanyCard