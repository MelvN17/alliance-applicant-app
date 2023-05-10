import { React, useState } from 'react'
import Navbar from '../components/Navbar'
import { Typography, Box, TextField, Grid, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import axios from "axios";



function ApplicantDetails() {
  const firstName = "John";
  const lastName = "Doe";
  const email = "JohnDoe@gmail.com";
  const contactNumber = "+6390 0000 0000";

  const [jobPositions, setJobPositions] = useState([]);
  const [selectedJobPosition, setSelectedJobPosition] = useState("");


  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <>
      <Navbar navItems={[{ title: "Applicants", url: "applicants" },
      { title: "Manage Applicants", url: "manageApplicants" },
      { title: "Log Out", url: "login" }]} />

      <Box paddingTop={"8%"} sx={{ display: "center", justifyContent: "center", width: '99vw' }}>
        <Grid container direction="column" justifyContent="center" alignItems="center" paddingTop={"8%"} height="auto">
          <Grid item width={"80%"}>
            <Typography variant="h4" fontWeight="bold" sx={{ color: "#000000" }}>
              Applicant's Details
            </Typography>
            <Box component="form" sx={{ mt: 2, justifyContent: "center" }} marginTop={3}>
              <Grid container direction="column" spacing={2}>
                <Grid container direction="row" spacing={50}>
                  <Grid item marginLeft={2}>
                    <TextField
                      margin="dense"
                      size="large"
                      id="firstName"
                      label="First Name"
                      name="firstName"
                      defaultValue="firstName"
                      
                      autoFocus
                      value={firstName}
                      sx={{ height: '100%', paddingTop: '10px' }}
                    />
                  </Grid>
                  <Grid item>
                    <FormControl margin="normal" sx={{ mt: 2, minWidth: 300 }} required>
                      <InputLabel id="status-label">Status: {status}</InputLabel>
                      <Select
                        labelId="status-label"
                        id="status"
                        value={status}
                        onChange={handleChange}
                        fullWidth
                        label={"Status: {status}"}
                      >
                        <MenuItem value="">
                          <em>-</em>
                        </MenuItem>
                        <MenuItem value={"status1"}>status1</MenuItem>
                        <MenuItem value={"status2"}>status2</MenuItem>
                        <MenuItem value={"status3"}>status3</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container direction="row" spacing={50}>
                  <Grid item marginLeft={2}>
                    <TextField
                      margin="dense"
                      size="large"
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      defaultValue="lastName"
                      
                      autoFocus
                      value={lastName}
                      sx={{ height: '100%', paddingTop: '10px' }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography fontWeight='bold'>Resume:</Typography>
                    <Grid container direction="row" spacing={2}>
                      <Grid item>
                        <Button variant="contained" color="error">
                          Upload New CV
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" color="error">
                          View CV
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" color="error">
                          Delete CV
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField
                    margin="dense"
                    size="large"
                    id="email"
                    label="Email"
                    name="email"
                    defaultValue="email"
                    
                    autoFocus
                    value={email}
                    sx={{ height: '100%', paddingTop: '10px' }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    margin="dense"
                    size="large"
                    id="contactNumber"
                    label="Contact Number"
                    name="contactNumber"
                    defaultValue="contactNumber"
                    
                    autoFocus
                    value={contactNumber}
                    sx={{ height: '100%', paddingTop: '10px' }}
                  />
                </Grid>
                <Grid item>
                  <FormControl  margin="normal" sx={{ mt: 2, minWidth: 250 }} required>
                    <InputLabel id="demo-simple-select-autowidth-label">
                      Job Position
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={selectedJobPosition}
                      onChange={(e) => setSelectedJobPosition(e.target.value)}
                      size="large"
                      label="jobPosition"
                    >
                      <MenuItem size="large" value="">
                        <em>-</em>
                      </MenuItem>
                      {jobPositions.map((position) => (
                        <MenuItem key={position.id} value={position.id}>
                          {position.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item justifyContent="flex-end" paddingTop={"10%"}>
                <a href="/manageApplicants">
                  <Button fullWidth color="error" variant="contained">
                    Save
                  </Button>
                </a>
              </Grid>
              <Grid item justifyContent="flex-end" paddingTop={"1%"}>
                <a href="/manageApplicants">
                  <Button fullWidth variant="outlined" color="primary">
                    Back
                  </Button>
                </a>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ApplicantDetails;