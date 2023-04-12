import { React } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs'
import JoinUs from './components/JoinUs'
import ContactUs from './components/ContactUs'

function App() {

  return (
    <div className="App">
      <Navbar />
      <AboutUs />
      <JoinUs />
      <ContactUs />
    </div>
  )
}

export default App
