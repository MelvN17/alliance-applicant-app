import { React } from 'react'
import '../App.css'
import { Box, Grid, Typography, Button } from '@mui/material'
import Image from '../components/Image'
import ApplicationForm from '../components/ApplicationForm'

function Application() {

    return (
        <div className="App">
            <Image image="src/img/application_image.png">
                <ApplicationForm />
            </Image>
        </div>
    )
}

export default Application;
