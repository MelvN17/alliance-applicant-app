import * as React from 'react';
import { Typography, Box, Grid } from '@mui/material';

export default function HomeItem(props) {
  return (
    //"BOX" SERVES AS THE CONTAINER OR THE WRAPPER
    <Box component='div' id={props.id} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item md={12} sx={{ padding: '2rem 0', marginTop: '2rem' }}>
          <Typography
            sx={{
              textAlign: 'center',
              fontFamily: 'Roboto Slab, serif',
              fontWeight: '700', color: '#FF0000'
            }}
            variant="h3"
            id={props.id}
            >
            {props.title} 
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              fontFamily: 'Poppins, serif',
              fontWeight: '700',
              padding: '0.5rem 0',
            }}
            variant="h5">
            {props.subtitle}
          </Typography>
        </Grid>
        {props.children}
      </Grid>
    </Box>
  );
}