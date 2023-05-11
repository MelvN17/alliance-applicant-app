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

function TestGet() {
  const [applicant, setApplicant] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function getPositions() {
      try {
        const response = await axios.get(
          "http://localhost:55731/api/ApplicantAPI/list?Page=1&PageSize=100"
        );
        setApplicant(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    getPositions();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <>
      <Navbar
        navItems={[
          { title: "Applicants", url: "#" },
          { title: "Manage Applicants", url: "manageApplicants" },
          { title: "Log Out", url: "login" },
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
        </Box>
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>EMAIL ADDRESS</TableCell>
              <TableCell>PHONE NUMBER</TableCell>
              <TableCell>POSITION</TableCell>
              <TableCell>STATUS</TableCell>
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
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.emailaddress}</TableCell>
                <TableCell>{row.phonenumber}</TableCell>
                <TableCell>{row.position}</TableCell>
                <TableCell>
                  {row.status}
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
                            value={status}
                            onChange={handleChange}
                            fullWidth
                            label={"Status: {row.status}"}
                          >
                            <MenuItem value="">
                              <em>-</em>
                            </MenuItem>
                            <MenuItem value={"status1"}>status1</MenuItem>
                            <MenuItem value={"status2"}>status2</MenuItem>
                            <MenuItem value={"status3"}>status3</MenuItem>
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
                        onClick={handleClose}
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

export default TestGet;
