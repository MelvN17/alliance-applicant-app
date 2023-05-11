import { React } from "react";
import "../App.css";
import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "../components/Image";
import ApplicationForm from "../components/ApplicationForm";
import TestGet from "../components/TestGet";

function Application() {
  return (
    <>
      <Image image="src/img/application_image.png">
        <ApplicationForm />
      </Image>
    </>
  );
}

export default Application;
