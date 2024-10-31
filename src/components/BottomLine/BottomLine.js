import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InstagramIcon from '@mui/icons-material/Instagram';
import { shallowEqual, useSelector } from 'react-redux';


export default function BottomLine() {
  const page = useSelector(store => store.page, shallowEqual)
  const [value, setValue] = React.useState(0);

  if (page !== "video") {
  return (
    <Box  sx={{
       
        boxShadow: 1,
        minWidth: 300,
        maxWidth: "100%",
        minHeight:50,
      }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{bgcolor:"#141414"}}
      >
<BottomNavigationAction href="https://www.instagram.com/tobi.stulz/" target="_blank" icon={<InstagramIcon sx={{color: "#f9f9f9"}} ></InstagramIcon>} >
       </BottomNavigationAction>
      
      </BottomNavigation>
    </Box>
  );
}
else {
    return (
        <Box  sx={{
            boxShadow: 1,
            minWidth: 300,
            minHeight:50
          }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{bgcolor:"#f9f9f9"}}
          >
    <BottomNavigationAction href="https://www.instagram.com/tobi.stulz/" target="_blank" icon={<InstagramIcon sx={{color: "#141414"}} ></InstagramIcon>} >
           </BottomNavigationAction>
          
          </BottomNavigation>
        </Box>
      );

}
}