import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Container,
  CardHeader,
  FormControl,
} from "@mui/material";
import { SubmitButton, UserDetailInput } from "../components/Inputs";
import { TextLogo } from "../components/Visuals";

const RegisterForm = ({
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
  showPassword,
  onShowPasswordClick,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <FormControl>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <UserDetailInput
                label="Full Name"
                type="text"
                value={fullName}
                onChange={onFullNameChange}
                autocomplete="name"
              />
            </Grid>
            <Grid item xs={12}>
              <UserDetailInput
                label="Email"
                type="email"
                value={email}
                onChange={onEmailChange}
                autocomplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <UserDetailInput
                label="Username"
                type="text"
                value={username}
                onChange={onUsernameChange}
                autocomplete="username"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <UserDetailInput
                label="Password"
                type="password"
                value={password}
                onChange={onPasswordChange}
                showPassword={showPassword}
                handleClickShowPassword={onShowPasswordClick}
                autocomplete="new-password"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <UserDetailInput
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={onConfirmPasswordChange}
                showPassword={showPassword}
                handleClickShowPassword={onShowPasswordClick}
                autocomplete="new-password"
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

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <React.Fragment>
      <Container
        sx={{ height: "100vh", display: "flex", alignItems: "center" }}
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
                width: { xs: "80  %", sm: 480 },
                borderColor: { sm: "primary.main" },
                borderWidth: { xs: 0, sm: 1.8 },
                borderRadius: { sm: 8 },
                px: { xs: 0, sm: 5 },
                py: 5,
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <CardHeader title={TextLogo(2)} />

              <RegisterForm
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
                showPassword={showPassword}
                onShowPasswordClick={handleClickShowPassword}
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Register;
