import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Column, Row, Divider, UserDetailInput, TextLogo } from "components";
import SocialLogin from "components/common/SocialLogin";
import RoleSelectionStepper from "components/RoleSelectionStepper";
import animationGif from "../assets/images/online-courses.png";

import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userCredentials = {
      username: username,
      password: password,
      role: selectedRole,
    };
    axios
      .post(`http://localhost:3001/api/local/login`, userCredentials)
      .then((res) => {
        if (res.status === 200) {
          alert("Woohoo Credentials");
        } else {
          navigate("/home", { replace: true });
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert("Wrong Credentials");
        }
      });
    // handle form submission here
  };

  const loginSteps = [
    {
      title: "Select your role",
      form: <></>,
    },
    {
      title: "Login Form",
      form: (
        <>
          <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
            <div className="flex flex-col pt-4 px-6">
              <UserDetailInput
                label="Username"
                type="text"
                value={username}
                onChange={handleUsernameChange}
                id="username"
                placeholder="username"
                autoFocus
              />
            </div>
            <div className="flex flex-col pt-4 px-6">
              <UserDetailInput
                id="pass-word"
                label="Password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                autoComplete="password"
              />
            </div>
            <button
              type="submit"
              className="bg-dark_green text-white font-bold text-lg rounded-lg hover:bg-green-900/80 focus:bg-dark_green p-2 mt-8 mx-6"
            >
              Log In
            </button>
          </form>
          <div className="text-center">
            <div className="text-center pt-12 pb-6]">
              <p className="text-left ml-[1.5rem]">
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
            <SocialLogin />
          </div>
        </>
      ),
    },
  ];

  return (
    <React.Fragment>
      <div className="w-[85rem] flex flex-row justify-center items-center shadow-2xl rounded-2xl m-auto mt-[2rem] mb-[2rem]  border-2 border-gray-300 sm:w-[100%] sm:m-[0]">
        {/* <div className="h-screen rounded-2xl bg-white"> */}
        <div className="w-full rounded-2xl h-fit flex flex-wrap bg-white">
          {/* <!-- Login Section --> */}
          <Column className="w-1/2  sm:w-full md:w-full  flex flex-col">
            <Row className="flex justify-center md:justify-start pt-12 md:pl-12 ">
              <Link
                to="/"
                component="a"
                className="text-white font-bold text-xl  p-4"
              >
                {TextLogo(2.2)}
              </Link>
            </Row>
            <Row>
              <p className="w-full text-center font-semibold text-dark_green text-3xl">
                Welcome back.
              </p>
              <RoleSelectionStepper
                steps={loginSteps}
                onRoleSelect={handleRoleSelect}
              />
            </Row>
          </Column>
          {/* <!-- Image Section --> */}
          <div
            className="w-1/2 h-screen sm:hidden md:hidden lg:block relative"
            style={{
              backgroundImage: `url(${animationGif})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "0 1rem 1rem 0",
            }}
          >
            {/* <div className="absolute inset-0  bg-gradient-to-t from-transparent to-dark_green"></div> */}
          </div>
        </div>
        {/* </div> */}
      </div>
    </React.Fragment>
  );
};

export default Login;
