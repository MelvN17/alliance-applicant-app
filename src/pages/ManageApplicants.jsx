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
import EditIcon from "@mui/icons-material/Edit";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

function ManageApplicants() {
  const [applicantID, setApplicantID] = useState();
  const [applicant, setApplicant] = useState([]);
  const [updateStatusDialogOpen, setUpdateStatusDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

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

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:55731/api/ApplicantAPI/delete?id=${id}`)
      .then((response) => {
        console.log(response);
        alert("Applicant deleted successfully!");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        alert("Error deleting applicant!");
      });
  };

  const handleUpdateStatusClick = () => {
    setUpdateStatusDialogOpen(true);
  };

  const handleUpdateStatusClose = () => {
    setUpdateStatusDialogOpen(false);
  };

  const handleDeleteStatusClick = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteStatusClose = () => {
    setDeleteDialogOpen(false);
  };

  const [status, setStatus] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  return (
    <>
      <Navbar
        navItems={[
          { title: "Applicants", url: "applicants" },
          { title: "Manage Applicants", url: "#" },
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
            List of Applicants
          </Typography>
          <a href="/addUSer">
            <Button
              variant="contained"
              color="error"
              sx={{ height: "32px", padding: "5px 10px" }}
            >
              + Add New
            </Button>
          </a>
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
                    onClick={handleUpdateStatusClick}
                  >
                    <EditIcon fontSize="small" sx={{ color: "white" }} />
                  </Button>
                  <Dialog
                    open={updateStatusDialogOpen}
                    onClose={handleUpdateStatusClose}
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
                        onClick={handleUpdateStatusClose}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={handleUpdateStatusClose}
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
                  <a href={`/updateApplicantDetails/${row.id}`}>
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ padding: "5px 10px" }}
                    >
                      Update
                    </Button>
                  </a>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ padding: "5px 10px" }}
                    onClick={handleDeleteStatusClick}
                  >
                    Delete
                  </Button>
                  <Dialog
                    open={deleteDialogOpen}
                    onClose={handleDeleteStatusClose}
                    maxWidth="sm"
                    hideBackdrop
                  >
                    <DialogTitle textAlign={"center"} fontWeight="bold">
                      Delete User Details
                    </DialogTitle>
                    <DialogContent>
                      Are you sure you want to delete this?
                    </DialogContent>
                    <DialogActions sx={{ justifyContent: "center" }}>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleDeleteStatusClose}
                      >
                        No
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                          handleDelete(row.id);
                          handleDeleteStatusClose();
                        }}
                      >
                        Delete
                      </Button>
                    </DialogActions>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ManageApplicants;
