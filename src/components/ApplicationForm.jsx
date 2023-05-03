import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ApplicationForm() {
  const [firstName, setfirstName] = React.useState('');
  const [lastName, setlastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [contactNumber, setcontactNumber] = React.useState('');
  const [jobPosition, setjobPosition] = React.useState('');

  const handleChange = (event) => {
    setjobPosition(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}`);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log('Selected file:', file);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }} minWidth={450}>

      <Grid container direction="column" justifyContent="center" alignItems="center" paddingTop={'5%'} height={'100vh'}>
        <Grid container item sx={{ width: '80%', justifyContent: 'flex-end' }}>
          <Box component="img" src="/src/img/logo.png" width={'25%'} />
        </Grid>
        <Grid item width={'80%'}>
          <Typography variant='h4' fontWeight="bold" sx={{ color: '#000000' }}>Application Form</Typography>
          <Typography variant='body1' sx={{ color: '#000000' }}>Enter your details below:</Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, justifyContent: 'center' }}>

            <TextField
              margin="dense"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="email"
              autoFocus
            />

            <TextField
              margin="dense"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lastName"
              autoFocus
            />

            <TextField
              margin="dense"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <TextField
              margin="dense"
              required
              fullWidth
              id="contactNumber"
              label="Contact Number"
              name="contactNumber"
              autoComplete="contactNumber"
              autoFocus
            />
            <div>
              <FormControl margin="dense" fullWidth>
                <InputLabel id="demo-simple-select-autowidth-label">Job Position</InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={jobPosition}
                  onChange={handleChange}
                  fullWidth
                  label="jobPosition"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"jobPosition1"}>jobPosition1</MenuItem>
                  <MenuItem value={"jobPosition2"}>jobPosition2</MenuItem>
                  <MenuItem value={"jobPosition3"}>jobPosition3</MenuItem>
                </Select>
              </FormControl>
            </div>

            <Grid>
              <Input
                type="file"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                id="file-input"
              />
              <label htmlFor="file-input">
                <Typography variant='body 2'>File:<br /></Typography>
                <Button component="span" color="error" variant="contained">
                  Upload CV
                </Button>
                <Typography variant='body 2' sx={{ color: '#808080' }}><br />Format: PDF, Doc</Typography>
              </label>
            </Grid>

            <Grid item justifyContent="flex-end" paddingTop={'15%'}>
              <Button type="submit" fullWidth color="error" variant='contained'>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Grid item></Grid>
                  <Grid item>
                    Submit
                  </Grid>
                  <Grid item>
                    <ArrowForwardIosIcon />
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

