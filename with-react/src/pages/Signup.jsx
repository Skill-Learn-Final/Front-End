import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Column,
  Row,
  UserDetailInput,
  Divider,
  TextLogo,
  // RoleSelectionStepper,
} from "components";
import SocialLogin from "components/common/SocialLogin";
import RoleSelectionStepper from "components/RoleSelectionStepper";
import animationGif from "../assets/images/online-courses.png";

const Signup = ({ onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

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

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      fullName,
      email,
      username,
      password,
      confirmPassword,
      role: selectedRole,
    };
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
    // handle form submission here
  };

  const signupSteps = [
    {
      title: "Select your role",
      form: <></>,
    },
    {
      title: "Signup Form",
      form: (
        <>
          <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
            <div className="flex flex-col pt-4 px-6">
              <UserDetailInput
                label="Full Name"
                type="text"
                value={fullName}
                placeholder="Full Name"
                onChange={handlefullNameChange}
                autoComplete="name"
                autoFocus
              />
            </div>
            <div className="flex flex-col pt-4 px-6">
              <UserDetailInput
                id="email"
                label="Email"
                type="email"
                value={email}
                placeholder="your@email.com"
                onChange={handleEmailChange}
                autoComplete="email"
              />
            </div>
            <div className="flex flex-col pt-4 px-6">
              <UserDetailInput
                id="username"
                label="Username"
                type="text"
                value={username}
                placeholder="contain small letters and underscore only."
                onChange={handleUsernameChange}
                autoComplete="username"
              />
            </div>
            <div className="flex flex-col pt-4 px-6">
              <UserDetailInput
                id="pass-word"
                label="Password"
                type="password"
                value={password}
                placeholder="contain numbers, letters and symbols."
                onChange={handlePasswordChange}
                autoComplete="new-password"
              />
            </div>
            <div className="flex flex-col pt-4 px-6">
              <UserDetailInput
                id="confirm-password"
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                placeholder="Repeat the password from above."
                onChange={handleConfirmPasswordChange}
                autoComplete="new-password"
              />
            </div>
            <button
              type="submit"
              className="bg-dark_green text-white font-bold text-lg rounded-lg hover:bg-green-900/80 focus:bg-dark_green p-2 mt-8 mx-10"
            >
              Sign Up
            </button>
          </form>
          <div className="text-center ">
            <div className="text-center pt-6 pb-4">
              <p>
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="underline font-semibold hover:text-green-700"
                >
                  Login here.
                </Link>
              </p>
            </div>
            <Divider type="hor" className="w-3/5" />
            <p className="text-sm">Or continue with:</p>
            <SocialLogin />
          </div>
        </>
      ),
    },
  ];

  return (
    <React.Fragment>
      <div className="h-screen">
        <div className="shadow-2xl rounded-2xl m-16   border-2 border-gray-300">
          <div className="w-full rounded-2xl h-fit flex flex-wrap bg-faint_green">
            {/* <!-- Signup Section --> */}
            <Column className="w-1/2 sm:w-full md:w-full  flex flex-col">
              <Row className="flex justify-start pt-4">
                <Link
                  to="/"
                  component="a"
                  className="text-white font-bold text-xl text-left  p-4"
                >
                  {TextLogo(2.2)}
                </Link>
              </Row>
              <Row>
                <p className="w-full text-center font-semibold text-dark_green text-3xl">
                  Create an account
                </p>
                <RoleSelectionStepper
                  steps={signupSteps}
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
