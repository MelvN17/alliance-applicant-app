import { React, useState } from 'react'
import '../App.css'
import { Box, Grid, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import Navbar from '../components/Navbar'
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import EditIcon from '@mui/icons-material/Edit';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';


function ManageApplicants() {
  const tableData = [
    {
      date: '1/21/2022',
      firstname: 'John',
      lastname: 'Doe',
      position: 'Software Engineer',
      status: 'Pre-screened',
    },
    {
      date: '1/21/2022',
      firstname: 'John',
      lastname: 'Doe',
      position: 'Software Engineer',
      status: 'Pre-screened',
    },
    {
      date: '1/21/2022',
      firstname: 'John',
      lastname: 'Doe',
      position: 'Software Engineer',
      status: 'Pre-screened',
    },
    {
      date: '1/21/2022',
      firstname: 'John',
      lastname: 'Doe',
      position: 'Software Engineer',
      status: 'Pre-screened',
    },
    {
      date: '1/21/2022',
      firstname: 'John',
      lastname: 'Doe',
      position: 'Software Engineer',
      status: 'Pre-screened',
    }
  ]

  const [updateStatusDialogOpen, setUpdateStatusDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

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

  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  return (
    <>
      <Navbar navItems={[{ title: "Applicants", url: "applicants" },
      { title: "Manage Applicants", url: "#" },
      { title: "Log Out", url: "login" }]} />



      <TableContainer sx={{ maxHeight: '80vh', maxWidth: '100vw', marginTop: '8rem' }} component={Paper}>
        <Box sx={{ display: 'flex', gap: '1em', alignItems: 'center' }}>
          <Typography variant="h5" gutterBottom sx={{ marginLeft: '2em', padding: '1em 0 0 0', fontWeight: 'bold' }} >
            List of Applicants
          </Typography>
          <a href="/addUSer">
            <Button variant="contained" color="error" sx={{ height: '32px', padding: '5px 10px' }}>
              + Add New
            </Button>
          </a>
        </Box>
        <Table stickyHeader aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>DATE</TableCell>
              <TableCell>FIRST NAME</TableCell>
              <TableCell>LAST NAME</TableCell>
              <TableCell>POSITION</TableCell>
              <TableCell>STATUS</TableCell>
              <TableCell align='center'>ACTIONS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map(row => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.firstname}</TableCell>
                <TableCell>{row.lastname}</TableCell>
                <TableCell>{row.position}</TableCell>
                <TableCell>
                  {row.status}
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    onClick={handleUpdateStatusClick}
                  >
                    <EditIcon fontSize='small' sx={{ color: "white" }} />
                  </Button>
                  <Dialog open={updateStatusDialogOpen} onClose={handleUpdateStatusClose} maxWidth='sm' hideBackdrop>
                    <DialogTitle textAlign={'center'} fontWeight='bold'>Status</DialogTitle>
                    <DialogContent>
                      <Box>
                        <FormControl margin="normal" sx={{ mt: 2, minWidth: 300 }} required>
                          <InputLabel id="status-label">Status: {row.status}</InputLabel>
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
                    <DialogActions sx={{ justifyContent: 'center' }}>
                      <Button variant="outlined" color="primary" onClick={handleUpdateStatusClose}>Cancel</Button>
                      <Button variant="contained" color="error" onClick={handleUpdateStatusClose}>Save</Button>
                    </DialogActions>
                  </Dialog>
                </TableCell>
                <TableCell align='center' sx={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                  <a href="/applicantDetails">
                    <Button variant="contained" color="primary" sx={{ padding: '5px 10px' }}>
                      View
                    </Button>
                  </a>
                  <a href="/updateApplicantDetails">
                    <Button variant="contained" color="success" sx={{ padding: '5px 10px' }}>
                      Update
                    </Button>
                  </a>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ padding: '5px 10px' }}
                    onClick={handleDeleteStatusClick}>
                    Delete
                  </Button>
                  <Dialog open={deleteDialogOpen} onClose={handleDeleteStatusClose} maxWidth='sm' hideBackdrop>
                    <DialogTitle textAlign={'center'} fontWeight='bold'>Delete User Details</DialogTitle>
                    <DialogContent>
                      Are you sure you want to delete this?
                    </DialogContent>
                    <DialogActions sx={{ justifyContent: 'center' }}>
                      <Button variant="outlined" color="primary" onClick={handleDeleteStatusClose}>No</Button>
                      <Button variant="contained" color="error" onClick={handleDeleteStatusClose}>Delete</Button>
                    </DialogActions>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default ManageApplicants
