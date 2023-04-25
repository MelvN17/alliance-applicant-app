import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';

export default function Image(props) {
  return (
    <Grid container justifyContent='flex-end' sx={{ minHeight: '100vh' }}>
      {getContent(props)}
    </Grid>
  );
}

function getContent(props) {
  if (props.right) {
    return (
      <>
        <Hidden mdDown>
          <Grid container item direction='column' xs={6.5} spacing={2} sx={{
            backgroundColor: '#FF0000',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Box component="img" maxWidth={'100%'} sx={{ height: '100vh' }} src={props.image} margin='auto' />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={5.5}>
          {props.children}
        </Grid>
      </>
    );
  }
  else {
    return (
      <>
        <Grid item xs={12} md={5.5}>
          {props.children}
        </Grid>
        <Hidden mdDown>
          <Grid container item direction='column' xs={6.5} spacing={2} sx={{
            backgroundColor: '#FF0000',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Box component="img" maxWidth={'100%'} sx={{ height: '100vh', width: '100%' }} src={props.image} margin='auto' />
          </Grid>
        </Hidden>
      </>
    );
  }
}