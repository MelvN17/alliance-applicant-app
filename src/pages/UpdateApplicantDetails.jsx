import { React, useState, useEffect } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import { Typography, Box, TextField, Grid, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";

const UpdateApplicant = () => {
  const [applicantFirstname, setApplicantFirstname] = useState("");
  const [applicantLastname, setApplicantLastname] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantPhonenumber, setApplicantPhonenumber] = useState("");
  const [applicantPosition, setApplicantPosition] = useState("");
  const [jobPositions, setJobPositions] = useState([]);
  const [selectedJobPosition, setSelectedJobPosition] = useState("");
  const [status, setStatus] = useState("");
  let { id } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const applicant = {
      applicant_id: id,
      applicant_firstname: applicantFirstname,
      applicant_lastname: applicantLastname,
      applicant_email: applicantEmail,
      applicant_phonenumber: applicantPhonenumber,
      applicant_position: selectedJobPosition,
    };
    try {
      const response = await axios.put(
        "http://localhost:55731/api/ApplicantAPI/edit",
        applicant
      );
      console.log(response);
      alert("Applicant updated successfully!");
    } catch (error) {
      console.log(error);
      alert("Error updating applicant!");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:55731/api/ApplicantAPI/getApplicant?id=${id}`
        );
        setApplicantFirstname(response.data.applicant_firstname);
        setApplicantLastname(response.data.applicant_lastname);
        setApplicantEmail(response.data.applicant_email);
        setApplicantPhonenumber(response.data.applicant_phonenumber);
        setSelectedJobPosition(response.data.applicant_position);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const getPositions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:55731/api/PositionAPI/list?Page=1&PageSize=2"
        );
        setJobPositions(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getPositions();
  }, []);

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleFirstnameChange = (event) => {
    setApplicantFirstname(event.target.value);
  };

  const handleLastnameChange = (event) => {
    setApplicantLastname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setApplicantEmail(event.target.value);
  };

  const handlePhonenumberChange = (event) => {
    setApplicantPhonenumber(event.target.value);
  };

  const handlePositionChange = (event) => {
    setSelectedJobPosition(event.target.value);
  };

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
      ></Box>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        paddingTop={"8%"}
        height="auto"
      >
        <Grid item width={"80%"}>
          <Typography variant="h4" fontWeight="bold" sx={{ color: "#000000" }}>
            Applicant's Details
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
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
                    name="applicant_firstname"
                    defaultValue="firstName"
                    autoFocus
                    value={applicantFirstname}
                    onChange={handleFirstnameChange}
                    sx={{ height: "100%", paddingTop: "10px" }}
                  />
                </Grid>
                <Grid item>
                  <FormControl
                    margin="normal"
                    sx={{ mt: 2, minWidth: 300 }}
                    required
                  >
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
                    name="applicant_lastname"
                    defaultValue="lastName"
                    autoFocus
                    value={applicantLastname}
                    onChange={handleLastnameChange}
                    sx={{ height: "100%", paddingTop: "10px" }}
                  />
                </Grid>
                <Grid item>
                  <Typography fontWeight="bold">Resume:</Typography>
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
                  name="applicant_email"
                  defaultValue="email"
                  autoFocus
                  value={applicantEmail}
                  onChange={handleEmailChange}
                  sx={{ height: "100%", paddingTop: "10px" }}
                />
              </Grid>
              <Grid item>
                <TextField
                  margin="dense"
                  size="large"
                  id="contactNumber"
                  label="Contact Number"
                  name="applicant_phonenumber"
                  defaultValue="contactNumber"
                  autoFocus
                  value={applicantPhonenumber}
                  onChange={handlePhonenumberChange}
                  sx={{ height: "100%", paddingTop: "10px" }}
                />
              </Grid>
              <Grid item>
                <FormControl
                  margin="normal"
                  sx={{ mt: 2, minWidth: 250 }}
                  required
                >
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Job Position
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={selectedJobPosition}
                    onChange={handlePositionChange}
                    size="large"
                    label="Applicant Position"
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
              <a href="">
                <Button
                  type="submit"
                  fullWidth
                  color="error"
                  variant="contained"
                >
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
    </>
  );
};

export default UpdateApplicant;