import { React } from 'react'
import Navbar from '../components/Navbar'
import { Typography } from '@mui/material';

function ApplicantDetails() {

  return (
    <>
    <Navbar navItems={[{ title: "Applicants", url: "applicants" },
    { title: "Manage Applicants", url: "manageApplicants" },
    { title: "Log Out", url: "login" }]} />
    <Typography variant="h5" gutterBottom sx={{ marginLeft: '2em', padding: '1em 0 0 0', fontWeight: 'bold' }} >
      List of Applicants
    </Typography>
    </>
  )
}

export default ApplicantDetails;