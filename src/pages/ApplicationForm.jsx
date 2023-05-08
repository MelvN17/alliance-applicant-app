import { React } from "react";
import "../App.css";
import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "../components/Image";
import TestFetch from "../components/TestFetch";
import ApplicationFormGPT from "../components/ApplicatoinFormgpt";

function ApplicationForm() {
  return (
    <div className="App">
      <Image image="src/img/application_image.png">
        <ApplicationFormGPT />
      </Image>
    </div>
  );
}

export default ApplicationForm;
