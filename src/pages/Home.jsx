import { React } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs'
import JoinUs from './components/JoinUs'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function Home() {

  return (
    <>
      <Navbar />
      <AboutUs />
      <JoinUs />
      <ContactUs />
      <Footer />
    </>
  )
}

export default Home
