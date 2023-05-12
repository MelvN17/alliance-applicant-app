import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import {
  Box,
  Grid,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Navbar from "../components/Navbar";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import EditIcon from "@mui/icons-material/Edit";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Cookies from "js-cookie";

function Applicants() {
  const [applicant, setApplicant] = useState([]);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [position, setPosition] = useState("");

  useEffect(() => {
    const accessToken = Cookies.get("access_token");
    if (!accessToken) {
      window.location.href = "/login";
    }
  }, []);

  function handleLogout() {
    // set access token and refresh token cookies to expire
    document.cookie = `access_token=; expires=${new Date(0)}; path=/;`;
    document.cookie = `refresh_token=; expires=${new Date(0)}; path=/;`;

    // perform any additional logout actions, such as resetting the user's authentication status
    console.log("Logged out successfully");
  }

  useEffect(() => {
    async function getPositions() {
      try {
        const response = await axios.get(
          "http://localhost:55731/api/PositionAPI/list?Page=1&PageSize=100"
        );
        setPosition(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    getPositions();
  }, []);

  useEffect(() => {
    async function getStatus() {
      try {
        const response = await axios.get(
          "http://localhost:55731/api/StatusAPI/list?Page=1&PageSize=100"
        );
        setStatus(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    getStatus();
  }, []);

  useEffect(() => {
    async function getApplicant() {
      try {
        const response = await axios.get(
          "http://localhost:55731/api/ApplicantAPI/list?Page=1&PageSize=100"
        );
        setApplicant(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApplicant();
  }, []);

  const handleSubmit = async (
    id,
    applicantFirstname,
    applicantLastname,
    applicantEmail,
    applicantPhonenumber,
    statusID,
    selectedJobPosition
  ) => {
    const applicant = {
      applicant_id: id,
      applicant_firstname: applicantFirstname,
      applicant_lastname: applicantLastname,
      applicant_email: applicantEmail,
      applicant_phonenumber: applicantPhonenumber,
      applicant_status: statusID,
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
    console.log(
      "🚀 ~ file: ManageApplicants.jsx:72 ~ ManageApplicants ~ applicant:",
      applicant
    );
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar
        navItems={[
          { title: "Applicants", url: "#" },
          { title: "Manage Applicants", url: "manageApplicants" },
        ]}
      />
      <TableContainer
        sx={{ maxHeight: "80vh", maxWidth: "100vw", marginTop: "8rem" }}
        component={Paper}
      >
        <Box sx={{ display: "flex", gap: "1em", alignItems: "center" }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ marginLeft: "2em", padding: "1em 0 0 0", fontWeight: "bold" }}
          >
            Applicants
          </Typography>
          <a href="/login">
            <Button
              variant="contained"
              color="error"
              sx={{ height: "32px", padding: "5px 10px" }}
              onClick={handleLogout}
            >
              Log Out
            </Button>
          </a>
        </Box>
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>FIRSTNAME</TableCell>
              <TableCell>LASTNAME</TableCell>
              <TableCell>EMAIL ADDRESS</TableCell>
              <TableCell>PHONE NUMBER</TableCell>
              <TableCell>POSITION</TableCell>
              <TableCell>STATUS</TableCell>
              <TableCell>STATUS EDIT</TableCell>
              <TableCell align="center">ACTIONS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applicant.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.firstname}</TableCell>
                <TableCell>{row.lastname}</TableCell>
                <TableCell>{row.emailaddress}</TableCell>
                <TableCell>{row.phonenumber}</TableCell>
                <TableCell>
                  {
                    position.find((position) => position.id === row.position)
                      ?.name
                  }
                </TableCell>
                <TableCell>
                  {
                    status.find((statusData) => statusData.id === row.status)
                      ?.name
                  }
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    onClick={handleClickOpen}
                  >
                    <EditIcon fontSize="small" sx={{ color: "white" }} />
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    maxWidth="sm"
                    hideBackdrop
                  >
                    <DialogTitle textAlign={"center"} fontWeight="bold">
                      Status
                    </DialogTitle>
                    <DialogContent>
                      <Box>
                        <FormControl
                          margin="normal"
                          sx={{ mt: 2, minWidth: 300 }}
                          required
                        >
                          <InputLabel id="status-label">
                            Status: {row.status}
                          </InputLabel>
                          <Select
                            labelId="status-label"
                            id="status"
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                            fullWidth
                            label={"Status: {row.status}"}
                          >
                            <MenuItem value="" disabled>
                              <em>-</em>
                            </MenuItem>
                            {status.map((status) => (
                              <MenuItem key={status.id} value={status.id}>
                                {status.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    </DialogContent>
                    <DialogActions sx={{ justifyContent: "center" }}>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleClose}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() =>
                          handleSubmit(
                            row.id,
                            row.firstname,
                            row.lastname,
                            row.emailaddress,
                            row.phonenumber,
                            selectedStatus,
                            row.position
                          )
                        }
                      >
                        Save
                      </Button>
                    </DialogActions>
                  </Dialog>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                  }}
                >
                  <a href={`/applicantDetails/${row.id}`}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ padding: "5px 10px" }}
                    >
                      View
                    </Button>
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Applicants;