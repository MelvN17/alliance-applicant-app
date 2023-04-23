import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material'; 
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from '@mui/material/Link';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';


export default function Form() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }} minWidth={450}>
      
      <Grid container direction="column" justifyContent="center" alignItems="center" paddingTop={'5%'} height={'100vh'}>
        <Grid item width={'80%'}>
          <Typography variant='h4' sx={{color:'#FF0000'}}>Welcome to</Typography>
          <Box component="img" src="/src/img/logo.png" width={'100%'} />
        </Grid>
      <Grid item width={'80%'}>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, justifyContent: 'center' }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                
              />

              <Grid container>
                <Grid item xs>
                  <FormControlLabel
                  variant="body2"
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                  />
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" sx={{color:'#FF0000'}}>
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>

            <Grid item justifyContent="flex-end" paddingTop={'15%'}>
              <Button type="submit" fullWidth color="error" variant='contained'>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Grid item></Grid>
                  <Grid item>
                    LOGIN
                  </Grid>
                  <Grid item>
                    <ArrowForwardIosIcon/>
                  </Grid>
                </Grid>
              </Button>
            </Grid>
      
          </Box>
        </Grid>
      </Grid>

    </Box>
  );
}

