import { React } from 'react'
import '../App.css'
import { Box, Grid, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import Navbar from '../components/Navbar'
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import EditIcon from '@mui/icons-material/Edit';



function Applicants() {
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

    return (
        <>
            <Navbar navItems={['Applicants', 'Manage Applicants', 'Log Out']} />
            <TableContainer sx={{ maxHeight: '80vh', maxWidth: '100vw', marginTop: '8rem' }} component={Paper}>
                <Box sx={{ display: 'flex', gap: '1em', alignItems: 'center' }}>
                    <Typography variant="h5" gutterBottom sx={{ marginLeft: '2em', padding: '1em 0 0 0', fontWeight: 'bold' }} >
                        Applicants
                    </Typography>

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
                                        onClick={() => {
                                            alert('clicked');
                                        }}
                                    >
                                        <EditIcon fontSize='small' sx={{ color: "white" }} />
                                    </Button>
                                </TableCell>
                                <TableCell align='center' sx={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                                    <Button variant="contained" color="primary" sx={{ padding: '5px 10px' }}>
                                        View
                                    </Button>
                                    {/* <Button variant="contained" color="success" sx={{ padding: '5px 10px' }}>
                                        Add
                                    </Button>
                                    <Button variant="contained" color="error" sx={{ padding: '5px 10px' }}>
                                        Remove
                                    </Button> */}
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
