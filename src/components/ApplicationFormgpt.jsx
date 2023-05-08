import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

function ApplicationFormGPT() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const [jobPositions, setJobPositions] = useState([]);
  const [selectedJobPosition, setSelectedJobPosition] = useState("");

  useEffect(() => {
    async function getPositions() {
      try {
        const response = await axios.get(
          "http://localhost:55731/api/PositionAPI/list?Page=1&PageSize=2"
        );
        console.log(
          "🚀 ~ file: ApplicatoinFormgpt.jsx:19 ~ getPositions ~ response:",
          response
        );

        setJobPositions(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    getPositions();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      applicant_firstname: firstName,
      applicant_lastname: lastName,
      applicant_email: email,
      applicant_phonenumber: contactNumber,
      applicant_position: selectedJobPosition,
    };
    try {
      const response = await axios.post(
        "http://localhost:55731/api/ApplicantAPI/add",
        formData
      );
      console.log("Form data:", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("Selected file:", file);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }} minWidth={450}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        paddingTop={"5%"}
        height={"100vh"}
      >
        <Grid container item sx={{ width: "80%", justifyContent: "flex-end" }}>
          <Box component="img" src="/src/img/logo.png" width={"25%"} />
        </Grid>
        <Grid item width={"80%"}>
          <Typography variant="h4" fontWeight="bold" sx={{ color: "#000000" }}>
            Application Form
          </Typography>
          <Typography variant="body1" sx={{ color: "#000000" }}>
            Enter your details below:
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1, justifyContent: "center" }}
          >
            <TextField
              margin="dense"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="email"
              autoFocus
              value={firstName} // add this line
              onChange={(e) => setFirstName(e.target.value)} // add this line
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
              value={lastName} // add this line
              onChange={(e) => setLastName(e.target.value)} // add this line
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
              value={email} // add this line
              onChange={(e) => setEmail(e.target.value)} // add this line
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
              value={contactNumber} // add this line
              onChange={(e) => setContactNumber(e.target.value)} // add this line
            />

            <FormControl margin="dense" fullWidth required>
              <InputLabel id="demo-simple-select-autowidth-label">
                Job Position
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={selectedJobPosition}
                onChange={(e) => setSelectedJobPosition(e.target.value)}
                fullWidth
                label="jobPosition"
              >
                <MenuItem value="">
                  <em>-</em>
                </MenuItem>
                {jobPositions.map((position) => (
                  <MenuItem key={position.id} value={position.id}>
                    {position.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Grid>
              <Input
                type="file"
                onChange={handleFileChange}
                style={{ display: "none" }}
                id="file-input"
              />
              <label htmlFor="file-input">
                <Typography variant="body 2">
                  File:
                  <br />
                </Typography>
                <Button component="span" color="error" variant="contained">
                  Upload CV
                </Button>
                <Typography variant="body 2" sx={{ color: "#808080" }}>
                  <br />
                  Format: PDF, Doc
                </Typography>
              </label>
            </Grid>
            <Grid item justifyContent="flex-end" paddingTop={"15%"}>
              <Button type="submit" fullWidth color="error" variant="contained">
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item></Grid>
                  <Grid item>Submit</Grid>
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

export default ApplicationFormGPT;
