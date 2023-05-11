import { React } from "react";
// import './App.css'
import Home from "./pages/Home";
import Applicants from "./pages/Applicants";
import Application from "./pages/Application";
import Login from "./pages/Login";
import ApplicantDetails from "./pages/ApplicantDetails";
import UpdateApplicantDetails from "./pages/UpdateApplicantDetails";
import AddUser from "./pages/AddUser";
import ManageApplicants from "./pages/ManageApplicants";
import ApplicationForm from "./pages/ApplicationForm";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/application" element={<Application />} />
        <Route path="/applicationForm" element={<ApplicationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/applicants" element={<Applicants />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/applicantDetails/:id" element={<ApplicantDetails />} />
        <Route
          path="/updateApplicantDetails/:id"
          element={<UpdateApplicantDetails />}
        />
        <Route path="/manageApplicants" element={<ManageApplicants />} />
      </Routes>

      {/*<Image image="src/img/application_image.png">
                <ApplicationForm />
            </Image>*/}
      {/*<Home />*/}
      {/* <Applicants /> */}
      {/* <ManageApplicants />*/}
      {/* <Application /> */}
    </div>
  );
}

export default App;
