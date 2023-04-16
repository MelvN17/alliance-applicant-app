import { React } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs'
import JoinUs from './components/JoinUs'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Form from './components/Form'
import Image from './components/Image'
import { Grid, Typography, colors } from '@mui/material'

function App() {

  return (
    <div className="App">
      <Image>
        <Grid>
          <Typography sx={{color:'#FF0000'}}>Welcome to</Typography>
          <Form/>
        </Grid>
      </Image>
    </div>
  )
}

export default App
