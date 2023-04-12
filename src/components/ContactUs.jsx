import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import building from '../img/building.png';

export default function AboutUs() {
  return (
    //"BOX" SERVES AS THE CONTAINER OR THE WRAPPER
    <Box sx={{ flexGrow: 1 }}> 
      <Grid container spacing={2}>
        <Grid item md={12} sx={{padding: '2rem 0', marginTop: '2rem'}}>
          <Typography sx={{textAlign: 'center', fontFamily: 'Roboto Slab, serif', fontWeight: '700', color: '#FF0000'}} variant="h3"> 
            Contact Us
          </Typography>
          <Typography 
                sx={{textAlign: 'center',
                fontFamily: 'Poppins, serif',
                fontWeight: '700',
                padding: '2rem 0',
                }}
                variant="h5"> 
                Office Locations
            </Typography>
        </Grid>
        <Grid item md={6} >
            <Box sx={{width: '70%',  margin: "0 auto", padding: '2rem 0', marginTop: '2rem 0'}}> 
                <Typography 
                sx={{textAlign: 'left',
                fontFamily: 'Poppins, serif',
                fontWeight: '700',
                padding: '2rem 0',
                }}
                variant="h5"> 
                Cebu Head Office
                </Typography>
                <Typography sx={{textAlign: 'left', fontFamily: 'Poppins, serif',  }} variant="h6"> 
                14th Floor, Buildcomm CenterSumilon Road, Cebu Business Park Cebu City 6000, Philippines
                </Typography>
                <Typography sx={{textAlign: 'left', fontFamily: 'Poppins, serif', }} variant="h6"> 
                +63-32-261-1705
                </Typography>
                <Typography sx={{textAlign: 'left', fontFamily: 'Poppins, serif', }} variant="h6"> 
                +63 918-948-4041 
                </Typography>
                <Typography sx={{textAlign: 'left', fontFamily: 'Poppins, serif', }} variant="h6"> 
                +63 908-884-6922
                </Typography>
                <Typography sx={{textAlign: 'left', fontFamily: 'Poppins, serif', }} variant="h6"> 
                for Inquiries: info@alliance.com.ph for applications: jobs@alliance.com.ph
                </Typography>
            </Box>
        </Grid>
        <Grid item md={6} >
            <Box sx={{width: '70%',  margin: "0 auto", padding: '2rem 0', marginTop: '2rem 0'}}> 
                <Typography 
                sx={{textAlign: 'left',
                fontFamily: 'Poppins, serif',
                fontWeight: '700',
                padding: '2rem 0',
                }}
                variant="h5"> 
                Manila Office
                </Typography>
                <Typography sx={{textAlign: 'left', fontFamily: 'Poppins, serif',  }} variant="h6"> 
                7th Floor, Santolan Town Plaza, 276 Santolan Road Little Baguio, San Juan City, 1500 Metro Manila, Philippines
                </Typography>
                <Typography sx={{textAlign: 'left', fontFamily: 'Poppins, serif', }} variant="h6"> 
                +63-2-7739-9038
                </Typography>
            </Box>
        </Grid>
        <Grid item md={6} >
            <Box sx={{width: '70%',  margin: "0 auto", padding: '2rem 0', marginTop: '2rem 0'}}> 
                <Typography 
                sx={{textAlign: 'left',
                fontFamily: 'Poppins, serif',
                fontWeight: '700',
                padding: '2rem 0',
                }}
                variant="h5"> 
                Japan Office
                </Typography>
                <Typography sx={{textAlign: 'left', fontFamily: 'Poppins, serif', }} variant="h6"> 
                2-5-7-201 Hirakawa cho, Chiyoda-kuTokyo, 102-0093 Japan
                </Typography>
                <Typography sx={{textAlign: 'left', fontFamily: 'Poppins, serif', }} variant="h6"> 
                +81-3-5215-900
                </Typography>
                <Typography sx={{textAlign: 'left', fontFamily: 'Poppins, serif', }} variant="h6"> 
                +81-3-5215-9004
                </Typography>
                <Typography sx={{textAlign: 'left', fontFamily: 'Poppins, serif', }} variant="h6"> 
                Mr. Yoshihiro Isano: y_isano@asji.jp
                </Typography>
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
}