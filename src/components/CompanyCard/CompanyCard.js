
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';





const CompanyCard =  ({src, alt, text, title, url}) => {
  // Reusable Card Content styled for use in Cooperation Page
   
   
    return (
      <Card  sx={[ {display: 'flex', flexDirection: "column", justifyContent:"center", alignItems:"center"}, {width: 0.30, height: 0.4}, {backgroundColor: "transparent"}, {marginBottom: "10vh"}, {boxShadow:"none"}]} >
      <CardMedia
        component="img"
        image={src}
        alt={alt}
        height="70%"
        style={{objectFit: "contain"}}
      />
      <Button onClick={()=>{window.open(url)}}variant="outlined" sx={{margin:"5%", width: "60%", color: "info.main", borderColor:"info.main"}}>Website</Button>
      {/* <CardContent sx={[{width: 0.6}, {padding: 3.5}]}>
        <Typography align="left" sx={{color: "#f9f9f9"}} variant="body2" color="text.secondary">
        {text}
        </Typography>
      </CardContent> */}
     
    </Card>
    )


  }


export default CompanyCard