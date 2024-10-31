import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./MyNavBar.css"
import { Link } from 'react-router-dom';
import { Link as LinkBase } from '@mui/material';
import { useSelector, shallowEqual } from 'react-redux';
import LanguageChanger from '../LanguageChanger/LanguageChanger';
import { useContext } from 'react';
import LanguageContext from '../../languageContext';



// Custom Color Codes Object

const stulzcolors = {
  black: "#141414",
  red: "#8f3422",
  white: "#f9f9f9"
}


// Navbar Code from MUI modified for my needs

const drawerWidth = 240;


function MyNavBar(props) {
  // get page from Redux store
  const page = useSelector(store => store.page, shallowEqual)
  const lang = useContext(LanguageContext)
  let navItems = []

  // conditional initialize for navItems
  lang == "GER" ? navItems = ['Bio', 'Live', 'Recording', 'Kooperationen', 'Kontakt'] : navItems = ['About', 'Live', 'Recording', 'Endorsements', 'Contact'];

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // define style object for conditional Drawer sx
  const drawer1 = { textAlign: 'center', color: stulzcolors.white, backgroundColor: stulzcolors.black }
  const drawer2 = { textAlign: 'center', color: stulzcolors.black, backgroundColor: stulzcolors.white }
  const linkbase1 = { color: stulzcolors.black, width: "100%" }
  const linkbase2 = { color: stulzcolors.white, width: "100%" }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={(page === "video") ? drawer2 : drawer1}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Stulz
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <LinkBase component={Link} to={`/${item.toLowerCase()}`} sx={(page == "video") ? linkbase1 : linkbase2} underline="none">
                {item}
              </LinkBase>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key="Media" disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <LinkBase component={Link} to={`/video`} sx={(page == "video") ? linkbase1 : linkbase2} underline="none">
              Media
            </LinkBase>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  if (page != "video") {
    return (
      <div className="navbar">
      <Box sx={{ display: 'flex', mx: 0 }}>
        <AppBar component="nav">
          <Toolbar sx={{ backgroundColor: "#141414" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: 'none', sm: 'flex', md: "flex", lg: "flex", xl: "flex" }, justifyContent: "space-between", width: "80vw" }}>
              {navItems.map((item) => (
                <LinkBase key={item} component={Link} to={`/${item.toLowerCase()}`} sx={{ color: "white" }} underline="none">
                  <Button key={item} sx={[{ color: stulzcolors.white }, { "&:hover": { color: "primary.main" } }]}>{item}</Button>
                </LinkBase>
              ))
              }
              <LinkBase component={Link} to={`/Video`} sx={{ color: "white" }} underline="none">
                <Button variant="outlined" sx={[{ color: stulzcolors.white, borderColor: stulzcolors.white }, { "&:hover": { color: "primary.main" } }]}>Video/Film</Button>
              </LinkBase>
            </Box>
            <Box sx={{ ml: 7 }}>
              <LanguageChanger changeLang={props.changeLang} page={page}></LanguageChanger>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Toolbar />
      </Box>
      </div>
    );
  }
  else return (
    <div className="navbar">
    <Box sx={{ display: 'flex', m: -1.9 }}>
      <AppBar component="nav">
        <Toolbar sx={{ backgroundColor: "#f9f9f9", }}>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'flex', md: "flex", lg: "flex", xl: "flex" }, justifyContent: "space-between", width: "80vw" }}>
            {navItems.map((item) => (
              <LinkBase key={item} component={Link} to={`/${item.toLowerCase()}`} sx={{ color: "black" }} underline="none">
                <Button key={item} sx={[{ color: "black" }, { "&:hover": { color: "primary.main" } }]}>{item}</Button>
              </LinkBase>
            ))}
            <LinkBase component={Link} to={`/Video`} sx={{ color: "white" }} underline="none">
              <Button variant="outlined" sx={[{ color: stulzcolors.black, borderColor: stulzcolors.black }, { "&:hover": { color: "primary.main" } }]}>Video/Film</Button>
            </LinkBase>
          </Box>
          <Box sx={{ ml: 7 }}>
            <LanguageChanger changeLang={props.changeLang}></LanguageChanger>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />
    </Box>
    </div>
  )
}

// MyNavBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default MyNavBar;