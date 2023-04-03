import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Container,
  CardHeader,
  FormControl,
  IconButton,
} from "@mui/material";
import { SubmitButton, UserDetailInput } from "../components/MInputs";
import { SignMedia, TextLogo } from "../components/MVisuals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const SignupForm = ({
  onSubmit,
  fullName,
  email,
  username,
  password,
  confirmPassword,
  onFullNameChange,
  onEmailChange,
  onUsernameChange,
  onPasswordChange,
  onConfirmPasswordChange,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <FormControl sx={{ px: { xs: 0, sm: 5 }, py: 5 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <UserDetailInput
                label="Full Name"
                type="text"
                value={fullName}
                onChange={onFullNameChange}
                autoComplete="name"
              />
            </Grid>
            <Grid item xs={12}>
              <UserDetailInput
                label="Email"
                type="email"
                value={email}
                onChange={onEmailChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <UserDetailInput
                label="Username"
                type="text"
                value={username}
                onChange={onUsernameChange}
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <UserDetailInput
                label="Password"
                type="password"
                value={password}
                onChange={onPasswordChange}
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <UserDetailInput
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={onConfirmPasswordChange}
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <SubmitButton type="submit">Sign Up</SubmitButton>
        </CardActions>
      </FormControl>
    </form>
  );
};

const Signup = ({ onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlefullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <React.Fragment>
      <Container
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid
          container
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12}>
            <Card
              variant="outlined"
              sx={{
                width: { xs: "99%", sm: 480, md: 840, lg: 1080 },
                borderColor: { sm: "primary.main" },
                borderWidth: { xs: 0, sm: 1.8 },
                borderRadius: { sm: 8 },
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <Grid container direction="row">
                <Grid item xs={12} md={4} lg={5}>
                  <SignMedia
                    imageUrl="https://source.unsplash.com/random/800x600"
                    alt="A portfolio image describing some aspect of the platform."
                  />
                </Grid>
                <Grid item xs={12} md={8} lg={7}>
                  <CardHeader
                    sx={{
                      alignSelf: "center",
                      textAlign: "center",
                      pl: { xs: 30, lg: 50 },
                    }}
                    title={TextLogo(2)}
                    action={
                      <IconButton onClick={onClose}>
                        <FontAwesomeIcon icon={faXmark} />
                      </IconButton>
                    }
                  />
                  <SignupForm
                    onSubmit={handleSubmit}
                    fullName={fullName}
                    email={email}
                    username={username}
                    password={password}
                    confirmPassword={confirmPassword}
                    onFullNameChange={handlefullNameChange}
                    onEmailChange={handleEmailChange}
                    onUsernameChange={handleUsernameChange}
                    onPasswordChange={handlePasswordChange}
                    onConfirmPasswordChange={handleConfirmPasswordChange}
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Signup;
