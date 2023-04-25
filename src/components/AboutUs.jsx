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
            About Us
          </Typography>
        </Grid>
        <Grid item md={6} sx={{width: '100%', height: 'auto',}}>
            <img src={building} alt="Building" style={{width: "100%", height: "600px"}}/>
        </Grid>
        <Grid item md={6} >
            <Box sx={{width: '80%',  margin: "0 auto", padding: '2rem ', marginTop: '2rem'}}> 
                <Typography 
                sx={{textAlign: 'left',
                fontFamily: 'Poppins, serif',
                fontWeight: '700',
                padding: '2rem 0',
                }}
                variant="h5"> 
                WHO WE ARE AND WHAT DO WE DO
                </Typography>
                <Typography sx={{textAlign: 'left', fontFamily: 'Poppins, serif', }} variant="p" > 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, necessitatibus facere fugiat placeat repellat magni atque sint doloremque ipsa veniam veritatis laboriosam maiores! Architecto reprehenderit deleniti, exercitationem suscipit molestiae facere qui soluta, voluptatibus odio vitae eos earum. Doloremque quis, dolore repellat tempore maxime ratione unde dicta id fugiat quo sint officia beatae amet quae. Explicabo doloremque rem dignissimos. Sed voluptas nulla illum nesciunt ad consequuntur doloremque tempore, neque laborum ipsum ducimus, optio, unde tempora! Perspiciatis ullam laboriosam ducimus, qui totam animi eveniet cum sit quasi consequuntur, excepturi fugiat eius voluptatibus saepe quo atque, ex vitae aspernatur suscipit. Maxime, est blanditiis.
                </Typography>
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
}