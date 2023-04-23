import * as React from 'react';
import { Typography, Box, Grid } from '@mui/material';

export default function PageBanner(props) {
  return (
    <Box component="main" sx={{ width: '99vw' }}>
      <img src="/src/img/bg.png" alt="Hero section" style={{ paddingTop: '4rem', backgroundSize: 'cover', width: '100%', height: 'auto' }} />
    </Box>
  );
}