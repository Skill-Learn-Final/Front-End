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
import { TextLogo, Slider, SignMedia } from "../components/Visuals";

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
      <FormControl sx={{ px: { xs: 0, sm: 5 }, py: 5 }}>
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
  const slides = [
    <SignMedia
      imageUrl="https://source.unsplash.com/random/800x600"
      alt="slide 1"
    />,
    <SignMedia
      imageUrl="https://source.unsplash.com/random/800x601"
      alt="slide 2"
    />,
    <SignMedia
      imageUrl="https://source.unsplash.com/random/800x602"
      alt="slide 3"
    />,
  ];

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
                width: { xs: "99%", sm: 480, md: 720, lg: 960, xl: "99%" },
                borderColor: { sm: "primary.main" },
                borderWidth: { xs: 0, sm: 1.8 },
                borderRadius: { sm: 8 },

                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <Grid container direction="row">
                <Grid item xs={12} md={4} lg={5}>
                  <Slider items={slides} />
                </Grid>
                <Grid item xs={12} md={8} lg={7}>
                  <CardHeader
                    sx={{
                      alignSelf: "center",
                      textAlign: "center",
                      pl: { xs: 40, lg: 60 },
                    }}
                    title={TextLogo(2)}
                  />
                  <LoginForm
                    onSubmit={handleSubmit}
                    username={username}
                    password={password}
                    onUsernameChange={handleUsernameChange}
                    onPasswordChange={handlePasswordChange}
                    showPassword={showPassword}
                    onShowPasswordClick={handleClickShowPassword}
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

export default Login;
