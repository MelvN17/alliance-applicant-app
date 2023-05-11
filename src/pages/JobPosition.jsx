import { React } from "react";
import "../App.css";
import { Box, Grid, Typography, Button } from "@mui/material";
import Navbar from "../components/Navbar";

function JobPosition() {
  return (
    <>
      <Navbar isScroll navItems={[
        {title: "home", url: ''},
        {title: "About", url: "About"},
        {title: "Join", url: "Join"},
        {title: "Contact", url: "Contact"},
      ]} />

    </>
  );
}

export default JobPosition;