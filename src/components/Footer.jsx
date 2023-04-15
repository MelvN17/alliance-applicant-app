import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    //"BOX" SERVES AS THE CONTAINER OR THE WRAPPER
    <Box sx={{ flexGrow: 1 }}> 
        <Grid container spacing={2}>
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="left"
            justifyContent="center"
            marginTop='1rem'
            padding="1rem"
            paddingLeft="9rem"
            style={{ minHeight: '10rem', backgroundColor:'#eeeeee' }}
            >
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                    <img src="/src/img/logo.png" alt="logo" style={{width: '200px', height: 'auto', paddingTop: '2rem'}} />
                    </Box>
                    <Typography sx={{ml: 1, fontFamily: 'Poppins, serif'}} variant="h6">
                    Socials <br/> 
                    <IconButton sx={{ ml: 1, color: 'black' }} href="https://www.facebook.com/">
                    <FacebookIcon />
                    </IconButton>
                    <IconButton sx={{ ml: 1, color: 'black' }} href="https://www.linkedin.com/">
                    <LinkedInIcon />
                    </IconButton>
                    <IconButton sx={{ ml: 1, color: 'black' }} href="https://twitter.com/">
                    <TwitterIcon />
                    </IconButton>
                    <IconButton sx={{ ml: 1, color: 'black' }} href="https://www.youtube.com/">
                    <YouTubeIcon />
                    </IconButton>
                    </Typography>
                </Toolbar>
            </Grid>
        </Grid>
    </Box>
  );
}