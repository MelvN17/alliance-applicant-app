import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Grid, Tooltip, Modal } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import InfoIcon from "@mui/icons-material/Info";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import upload from "../firebase/service";
import EmailValidator from 'validator/lib/isEmail';


export default function ApplicationFormGPT() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [resume, setResume] = useState(null);

  const [jobPositions, setJobPositions] = useState([]);
  const [selectedJobPosition, setSelectedJobPosition] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    async function getPositions() {
      try {
        const response = await axios.get(
          "http://localhost:55731/api/PositionAPI/list?Page=1&PageSize=100"
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

    if (!EmailValidator(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (resume) {
      upload(resume, 'resume_storage/').then(async (url) => {
        console.log(url);
        const formData = {
          applicant_firstname: firstName,
          applicant_lastname: lastName,
          applicant_email: email,
          applicant_phonenumber: contactNumber,
          applicant_position: selectedJobPosition,
          applicant_resume: url, // assuming this is the field name for the resume URL
        };
        try {
          const response = await axios.post(
            "http://localhost:55731/api/ApplicantAPI/add",
            formData
          );
          console.log("Form data:", response.data);
          setFirstName("");
          setLastName("");
          setEmail("");
          setContactNumber("");
          setSelectedJobPosition("");
          setResume(null);

          setModalOpen(true);
        } catch (error) {
          console.error(error);
        }
      });
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("Selected file:", file);
  };

  const handleClose = () => {
    setModalOpen(false); // close modal when user clicks close button
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
              autoComplete="firstName"
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
                <MenuItem value="" disabled>
                  <em>-</em>
                </MenuItem>
                {jobPositions.map((position) => (
                  <MenuItem key={position.id} value={position.id}>
                    {position.name}
                    <Tooltip title={position.description} style={{ position: 'absolute', right: 0 }}>
                      <InfoIcon />
                    </Tooltip>
                  </MenuItem>
                ))}

              </Select>
            </FormControl>
            <Grid>
              <Input
                type="file"
                onChange={(e) => {
                  console.log(e.target.files[0])
                  setResume(e.target.files[0])
                }}
                style={{ display: "none" }}
                id="file-input"
              />
              <label htmlFor="file-input">
                <Typography variant="body 2">
                  File: {resume?.name}
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
              <Button type="submit" fullWidth color="error" variant="contained" onClick={handleSubmit}>
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
              <Modal open={modalOpen} onClose={handleClose}>
                <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "background.paper", boxShadow: 24, p: 4, backgroundColor: '#FF0000' }}>
                  <Typography variant="h6" component="h2" gutterBottom>
                    Application Sent Successfully
                  </Typography>
                  <Button color="error" variant="contained" onClick={handleClose}>Close</Button>
                </Box>
              </Modal>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

