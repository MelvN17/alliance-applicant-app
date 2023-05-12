import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "@mui/material/Link";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Form() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [expiresIn, setExpiresIn] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { username, password };
    axios
      .post("http://localhost:55731/api/token", formData)
      .then((response) => {
        setAccessToken(response.data.access_token);
        setRefreshToken(response.data.refresh_token);
        setExpiresIn(response.data.expires_in);
        setIsAdmin(response.data.isAdmin);
        window.location.href = "/manageApplicants";
        // set access token and refresh token as cookies
        document.cookie = `access_token=${response.data.access_token}`;
        document.cookie = `refresh_token=${response.data.refresh_token}`;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center" }} minWidth={450}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          paddingTop={"5%"}
          height={"100vh"}
        >
          <Grid item width={"80%"}>
            <Typography variant="h4" sx={{ color: "#FF0000" }}>
              Welcome to
            </Typography>
            <Box component="img" src="/src/img/logo.png" width={"100%"} />
          </Grid>
          <Grid item width={"80%"}>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1, justifyContent: "center" }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Grid item justifyContent="flex-end" paddingTop={"15%"}>
                <Button
                  type="submit"
                  fullWidth
                  color="error"
                  variant="contained"
                >
                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid item></Grid>
                    <Grid item>LOGIN</Grid>
                    <Grid item>
                      <ArrowForwardIosIcon />
                    </Grid>
                  </Grid>
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}