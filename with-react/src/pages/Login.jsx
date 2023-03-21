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

const LoginForm = ({
  onSubmit,
  username,
  password,
  onUsernameChange,
  onPasswordChange,
  showPassword,
  onShowPasswordClick,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <FormControl>
        <CardContent>
          <UserDetailInput
            label="Username"
            type="text"
            value={username}
            onChange={onUsernameChange}
            autocomplete="username"
          />
          <UserDetailInput
            label="Password"
            type="password"
            value={password}
            onChange={onPasswordChange}
            showPassword={showPassword}
            handleClickShowPassword={onShowPasswordClick}
            autocomplete="current-password"
          />
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <SubmitButton size="medium" type="submit">
            Log In
          </SubmitButton>
        </CardActions>
      </FormControl>
    </form>
  );
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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

              <LoginForm
                onSubmit={handleSubmit}
                username={username}
                password={password}
                onUsernameChange={handleUsernameChange}
                onPasswordChange={handlePasswordChange}
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

export default Login;
