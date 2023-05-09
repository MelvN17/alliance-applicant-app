import * as React from "react";
import Navbar from '../components/Navbar'
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

function UpdateApplicantDetails() {
  const [firstName, setfirstName] = React.useState("");
  const [lastName, setlastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [contactNumber, setcontactNumber] = React.useState("");
  const [jobPosition, setjobPosition] = React.useState();
  const [selectedJobPosition, setSelectedJobPosition] = React.useState("");

  const handleChange = (event) => {
    setjobPosition(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      contactNumber,
      jobPosition,
    };
    try {
      const response = await axios.post(
        "http://localhost:55731/api/ApplicantAPI/add",
        formData
      );

      submitForm(formData);
      console.log("Form data:", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("Selected file:", file);
  };

  const submitForm = (formData) => {
    axios
      .post("http://localhost:55731/api/ApplicantAPI/add", formData) // Make POST request to temporary server
      .then((response) => {
        console.log(response.data);
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        console.error(error);
        alert(
          "An error occurred while submitting the form. Please try again later."
        );
      });
  };
  return (
    <>
      <Navbar navItems={[{ title: "Applicants", url: "applicants" },
      { title: "Manage Applicants", url: "manageApplicants" },
      { title: "Log Out", url: "login" }]} />

      <Box paddingTop={"8%"} sx={{ display: "center", justifyContent: "center", width: '99vw' }}>
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
                onChange={(e) => setfirstName(e.target.value)} // add this line
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
                onChange={(e) => setlastName(e.target.value)} // add this line
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
                onChange={(e) => setcontactNumber(e.target.value)} // add this line
              />

              <div>
                <FormControl margin="dense" fullWidth required>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Job Position
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={jobPosition}
                    onChange={handleChange}
                    fullWidth
                    label="jobPosition"
                  >
                    <MenuItem value="">
                      <em>-</em>
                    </MenuItem>
                    <MenuItem value={1}>Test</MenuItem>
                    <MenuItem value={"jobPosition2"}>jobPosition2</MenuItem>
                    <MenuItem value={"jobPosition3"}>jobPosition3</MenuItem>
                  </Select>
                </FormControl>
              </div>

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

              <Grid item justifyContent="flex-end" paddingTop={"10%"}>
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

export default UpdateApplicantDetails;