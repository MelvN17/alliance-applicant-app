import { React } from 'react'
import '../App.css'
import { Box, Grid, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import Navbar from '../components/Navbar'
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';




function Applicants() {
    const tableData = [
        {
          date: '1/21/2022',
          job_desc: 'Lorem ipsum dolor sit amet consectetur,',
          resume: 'Lennard',
        },
        {
        date: '1/25/2022',
        job_desc: 'Lorem ipsum dolor sit amet consectetur,',
        resume: 'Lennard',
        },
        {
        date: '1/25/2022',
        job_desc: 'Lorem ipsum dolor sit amet consectetur,',
        resume: 'Lennard',
        },
        {
        date: '1/25/2022',
        job_desc: 'Lorem ipsum dolor sit amet consectetur,',
        resume: 'Lennard',
        },
        {
        date: '1/25/2022',
        job_desc: 'Lorem ipsum dolor sit amet consectetur,',
        resume: 'Lennard',
        }
    ]

    return (
        <>
            <Navbar navItems={['Applicants', 'Manage Applicants', 'Log Out']} />
            <TableContainer sx={{ maxHeight: '80vh', maxWidth: '100vw', marginTop: '8rem' }} component={Paper}>
            <Table stickyHeader aria-label='simple table'>
                <TableHead>
                <TableRow>
                    <TableCell>DATE</TableCell>
                    <TableCell>JOB DESCRIPTION</TableCell>
                    <TableCell>RESUME</TableCell>
                    <TableCell align='center'>ACTIONS</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {tableData.map(row => (
                    <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.job_desc}</TableCell>
                    <TableCell>{row.resume}</TableCell>
                    <TableCell align='center' sx={{ display: 'flex', gap: '10px', justifyContent: 'center'}}>
                        <Button variant="contained" color="primary" sx={{ padding: '5px 10px' }}>
                            View
                        </Button>
                        <Button variant="contained" color="success" sx={{ padding: '5px 10px' }}>
                            Add
                        </Button>
                        <Button variant="contained" color="error" sx={{ padding: '5px 10px' }}>
                            Remove
                        </Button>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </>
    )

}

export default Applicants
