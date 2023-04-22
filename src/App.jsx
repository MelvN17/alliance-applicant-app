import { React } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs'
import JoinUs from './components/JoinUs'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import LoginForm from './components/LoginForm'
import Image from './components/Image'
import { Grid, Typography, colors } from '@mui/material'

function App() {

  return (
    <div className="App">
      <Image>
          <LoginForm/>
      </Image>
    </div>
  )
}

export default App