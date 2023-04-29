import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Container,
  CardHeader,
  FormControl,
} from "@mui/material";
import {
  Column,
  Row,
  Divider,
  TextLogo,
  Slider,
  SignMedia,
  SubmitButton,
  UserDetailInput,
} from "../components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <React.Fragment>
      <div class="w-full flex flex-wrap bg-green-50">
        {/* <!-- Login Section --> */}
        <Column class="w-1/2 h-screen sm:w-full md:w-full  flex flex-col">
          <Row class="flex justify-center md:justify-start pt-12 md:pl-12 ">
            <Link
              to="/"
              component="a"
              class="text-white font-bold text-xl  p-4"
            >
              {TextLogo(2.2)}
            </Link>
          </Row>

          <Row class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p class="w-full text-center text-3xl">Welcome back.</p>
            <form class="flex flex-col pt-3 md:pt-8" onsubmit={handleSubmit}>
              <div class="flex flex-col pt-4 px-6">
                <UserDetailInput
                  label="Email"
                  type="email"
                  value={username}
                  onChange={handleUsernameChange}
                  id="email"
                  placeholder="your@email.com"
                />
              </div>

              <div class="flex flex-col pt-4 px-6">
                <UserDetailInput
                  id="password1"
                  Label="Password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Password"
                  autoComplete="password"
                />
              </div>

              <button
                type="submit"
                class="bg-black text-white font-bold text-lg rounded hover:bg-gray-900 hover:border-b-4 hover:border-green-500 hover:pb-[3.5px] p-2 mt-8 mx-10"
              >
                Log In
              </button>
            </form>
            <div className="text-center ">
              <div class="text-center pt-12 pb-6">
                <p>
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="underline font-semibold hover:text-green-700"
                  >
                    Register here.
                  </Link>
                </p>
              </div>
              <Divider />
              <p className="text-sm">Or continue with:</p>
              <div className="grid grid-rows-2 grid-cols-2 items-center pt-4 gap-2 justify-items-center">
                <button
                  className="w-full sm:w-3/5 flex col-span-1 sm:col-span-2 bg-red-500 hover:bg-red-700 rounded-full mx-2 p-1 items-center"
                  onClick={() => {}}
                >
                  <FontAwesomeIcon
                    icon={faGoogle}
                    className="h-6 w-6 p-2 bg-white text-red-500 rounded-full mr-2"
                  />
                  <p className="w-7/12 text-white font-semibold">Google</p>
                </button>
                <button
                  className="w-full sm:w-3/5 flex col-span-1 sm:col-span-2 bg-blue-500 hover:bg-blue-700 rounded-full mx-2 p-1 items-center"
                  onClick={() => {}}
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="h-6 w-6 p-2 bg-white text-blue-500 rounded-full mr-2"
                  />
                  <p className="w-7/12 text-white font-semibold">Facebook</p>
                </button>
              </div>
            </div>
          </Row>
        </Column>

        {/* <!-- Image Section --> */}
        <div class="w-1/2 h-screen sm:hidden md:hidden lg:block relative">
          <div class="absolute inset-0 bg-gradient-to-l from-transparent to-green-50"></div>
          <img
            class="object-cover w-full h-screen"
            src="https://source.unsplash.com/random/600x800"
            alt="login decoration"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
