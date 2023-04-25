import { React } from 'react'
import '../App.css'
import { Box, Grid, Typography, Button } from '@mui/material'
import Navbar from '../components/Navbar'


function Applicants() {

    return (
        <>
            <Navbar navItems={['Applicants', 'Manage Applicants', 'Log Out']} />

        </>
    )
}

export default Applicants
