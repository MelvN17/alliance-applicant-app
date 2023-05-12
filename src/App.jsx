import { React } from "react";
// import './App.css'
import Home from "./pages/Home";
import Applicants from "./pages/Applicants";
import Login from "./pages/Login";
import ApplicantDetails from "./pages/ApplicantDetails";
import UpdateApplicantDetails from "./pages/UpdateApplicantDetails";
import AddUser from "./pages/AddUser";
import ManageApplicants from "./pages/ManageApplicants";
import Application from "./pages/Application";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/application" element={<Application />} />
        <Route path="/login" element={<Login />} />
        <Route path="/applicants" element={<Applicants />} /> // Protected
        <Route path="/addUser" element={<AddUser />} /> //Protected
        <Route path="/applicantDetails/:id" element={<ApplicantDetails />} />
        <Route
          path="/updateApplicantDetails/:id"
          element={<UpdateApplicantDetails />}
        />
        <Route path="/manageApplicants" element={<ManageApplicants />} />
      </Routes>
    </div>
  );
}

export default App;
