import { React } from 'react'
// import './App.css'
import Home from './pages/Home'
import Applicants from './pages/Applicants'
import Application from './pages/Application'
import Login from './pages/Login'
import ApplicantDetails from './pages/ApplicantDetails'
import ManageApplicants from './pages/ManageApplicants'
import { Routes, Route } from 'react-router-dom';




function App() {

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/application' element={<Application />} />
                <Route path='/login' element={<Login />} />
                <Route path='/applicants' element={<Applicants />} />
                <Route path='/applicantDetails' element={<ApplicantDetails />} />
                <Route path='/manageApplicants' element={<ManageApplicants />} />
            </Routes>

            {/*<Image image="src/img/application_image.png">
                <ApplicationForm />
            </Image>*/}
            {/*<Home />*/}
            {/* <Applicants /> */}
            {/* <ManageApplicants />*/}
            {/* <Application /> */}
        </div>
    )
}

export default App
