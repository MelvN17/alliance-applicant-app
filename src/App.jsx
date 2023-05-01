import { React } from 'react'
// import './App.css'
import { Box, Grid, Typography, Button } from '@mui/material'
import Image from './components/Image'
import ApplicationForm from './components/ApplicationForm'
import Home from './pages/Home'
import Applicants from './pages/Applicants'
import Application from './pages/Application'


function App() {

    return (
        <div className="App">
            {/* <Image image="src/img/application_image.png">
                <ApplicationForm />
            </Image> */}
            {/* <Home /> */}
            <Applicants />
            {/* <Application /> */}
        </div>
    )
}

export default App
