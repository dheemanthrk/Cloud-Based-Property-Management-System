import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../dal_logo.png"; // Update this path to your actual logo file
import backgroundImage from "../background.jpg"; // Update this path to your actual background image file

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");
  const [role, setRole] = useState("");
  const [ceaserCipherKey, setCeaserCipherKey] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://xxfx7gsx57.execute-api.us-east-1.amazonaws.com/dev/auth/registeration",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
          securityQuestion,
          securityAnswer,
          role,
          ceaserCipherKey,
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log("Sign up successful:", data);
    } else {
      console.error("Sign up failed");
    }
  };

  return (
    <Container
      component="main"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: "background.paper",
          width: "100%",
          maxWidth: "600px", // Increased width to accommodate two columns
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: "100px", marginBottom: "20px" }}
        />
        <Typography component="h1" variant="h5" gutterBottom>
          Sign Up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="given-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="securityQuestion"
                label="Security Question"
                name="securityQuestion"
                autoComplete="off"
                value={securityQuestion}
                onChange={(e) => setSecurityQuestion(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="securityAnswer"
                label="Security Answer"
                name="securityAnswer"
                autoComplete="off"
                type="password"
                value={securityAnswer}
                onChange={(e) => setSecurityAnswer(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="role"
                label="Role"
                name="role"
                autoComplete="off"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="ceaserCipherKey"
                label="Caesar Cipher Key"
                name="ceaserCipherKey"
                autoComplete="off"
                value={ceaserCipherKey}
                onChange={(e) => setCeaserCipherKey(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2, bgcolor: "primary.main" }}
          >
            Sign Up
          </Button>
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Link to="/login" style={{ color: "#1976d2" }}>
              {"Already have an account? Sign In"}
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUpPage;
