import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../img/logo.png';
import bg from '../img/bg.png';
import Stack from '@mui/material/Stack';

const drawerWidth = 240;
const navItems = ['Home', 'About Us', 'Join Us', 'Contact Us'];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  
  const isMobile = useMediaQuery('(max-width:600px)');
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
      <img src={logo} alt="MUI logo" style={{width: '100px', height: 'auto', paddingTop: '2rem'}}/>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} >
            <ListItemButton sx={{ textAlign: 'center' }} >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '80%',
        margin: '0 auto',
      }}>
      <CssBaseline />
      
      <AppBar component="nav" sx={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
      }} >

        
        <Toolbar sx={{
        display: 'flex',
        maxWidth: '90%',
        margin: '0 3rem',
        paddingTop: '2rem',
        paddingBottom: '1rem',
        justifyContent: "flex-start",
      }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            backgroundColor= "transparent"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
            
             {isMobile ? null : (
             <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={2}
            sx = {{width: '100%',}}
            >
         

          <Box >
            <img src={logo} alt="MUI logo" style={{width: '200px', height: '70px'}}/>
          </Box>
          <Box>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#000000', paddingLeft: '3rem', '&:hover': { backgroundColor: "transparent", color: '#000000', fontWeight: 'bold'}}}>
                {item}
              </Button>
            ))}
          </Box>
         
          </Stack>
           )}
        </Toolbar>
      </AppBar>
      
      <Box component="nav">
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
      </Box>
      {/* <Box component="main" sx={{width: '99vw'}}>
        <Toolbar />
        <img src={bg} alt="Hero section" style={{paddingTop: '2rem', backgroundSize: 'cover', width: '100%', height: '90vh'}} />
      </Box> */}
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
