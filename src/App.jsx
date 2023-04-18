import { React } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs'
import JoinUs from './components/JoinUs'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import bg from './img/bg.png'

function App() {

  return (
    <>
      <Navbar />
      <Box component="main" sx={{width: '99vw'}}>
        <Toolbar />
        <img src={bg} alt="Hero section" style={{paddingTop: '2rem', backgroundSize: 'cover', width: '100%', height: '90vh'}} />
      </Box>
      <AboutUs />
      <JoinUs />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
