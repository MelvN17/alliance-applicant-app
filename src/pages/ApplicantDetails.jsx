import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Typography, Box, TextField, Grid, Button } from "@mui/material";
import { Routes, Route, useParams } from "react-router-dom";

const ApplicantDetails = () => {
  const [applicant, setApplicant] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:55731/api/ApplicantAPI/getApplicant?id=${id}`
      );
      setApplicant(response.data);
    };
    fetchData();
  }, []);

  if (!applicant) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar
        navItems={[
          { title: "Applicants", url: "applicants" },
          { title: "Manage Applicants", url: "manageApplicants" },
          { title: "Log Out", url: "login" },
        ]}
      />
      <Box
        paddingTop={"8%"}
        sx={{ display: "center", justifyContent: "center", width: "99vw" }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          paddingTop={"8%"}
          height="auto"
        >
          <Grid item width={"80%"}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: "#000000" }}
            >
              Applicant's Details
            </Typography>
            <Box
              component="form"
              sx={{ mt: 2, justifyContent: "center" }}
              marginTop={3}
            >
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
                      InputProps={{
                        readOnly: true,
                      }}
                      autoFocus
                      value={applicant.applicant_firstname}
                      sx={{ height: "100%", paddingTop: "10px" }}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      margin="dense"
                      size="large"
                      id="status"
                      label="Application Status"
                      name="status"
                      defaultValue="status"
                      InputProps={{
                        readOnly: true,
                      }}
                      autoFocus
                      value={applicant.applicant_status}
                      sx={{ height: "100%", paddingTop: "10px" }}
                    />
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
                      InputProps={{
                        readOnly: true,
                      }}
                      autoFocus
                      value={applicant.applicant_lastname}
                      sx={{ height: "100%", paddingTop: "10px" }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography fontWeight="bold">Resume:</Typography>
                    <a href={applicant.applicant_resume}>
                      <Button variant="contained" color="error">
                        View CV
                      </Button>
                    </a>
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
                    InputProps={{
                      readOnly: true,
                    }}
                    autoFocus
                    value={applicant.applicant_email}
                    sx={{ height: "100%", paddingTop: "10px" }}
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
                    InputProps={{
                      readOnly: true,
                    }}
                    autoFocus
                    value={applicant.applicant_phonenumber}
                    sx={{ height: "100%", paddingTop: "10px" }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    margin="dense"
                    size="large"
                    id="jobPosition"
                    label="Job Position"
                    name="jobPosition"
                    defaultValue="jobPosition"
                    InputProps={{
                      readOnly: true,
                    }}
                    autoFocus
                    value={applicant.applicant_position}
                    sx={{ height: "100%", paddingTop: "10px" }}
                  />
                </Grid>
              </Grid>
              <Grid item justifyContent="flex-end" paddingTop={"1%"}>
                <a href="/manageApplicants">
                  <Button fullWidth color="error" variant="contained">
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
};

export default ApplicantDetails;