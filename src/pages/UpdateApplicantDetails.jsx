import { React } from 'react'
import Navbar from '../components/Navbar'

function UpdateApplicantDetails() {

  return (
    <Navbar navItems={[{ title: "Applicants", url: "applicants" },
    { title: "Manage Applicants", url: "manageApplicants" },
    { title: "Log Out", url: "login" }]} />
  )
}

export default UpdateApplicantDetails