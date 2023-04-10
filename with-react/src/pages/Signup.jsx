import React, { useState } from "react";
import { TextLogo } from "../components/MVisuals";
import { Facebook, Google } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Column, Row, UserDetailInput, Divider } from "components";

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
      <div class="w-full flex flex-wrap bg-green-50">
        {/* <!-- Login Section --> */}
        <Column class="w-1/2 sm:w-full md:w-3/4  flex flex-col">
          <Row class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
            <Link
              to="/"
              component="a"
              class="text-white font-bold text-xl  p-4"
            >
              {TextLogo(2.2)}
            </Link>
          </Row>

          <Row class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p class="w-full text-center text-3xl">Create an account</p>
            <form class="flex flex-col pt-3 md:pt-8" onsubmit={handleSubmit}>
              <div class="flex flex-col pt-4 px-6">
                <UserDetailInput
                  label="Full Name"
                  type="text"
                  value={fullName}
                  onChange={handlefullNameChange}
                  autoComplete="name"
                />
              </div>
              <div class="flex flex-col pt-4 px-6">
                <UserDetailInput
                  id="email"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  autoComplete="email"
                />
              </div>
              <div class="flex flex-col pt-4 px-6">
                <UserDetailInput
                  id="username"
                  label="Username"
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  autoComplete="username"
                />
              </div>
              <div class="flex flex-row md:flex-col sm:flex-col xs:flex-col pt-4 px-6">
                <div class="flex-1 px-1 ">
                  <UserDetailInput
                    id="pass-word"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    autoComplete="new-password"
                  />
                </div>
                <div class="flex-1 px-1 md:pt-4 sm:pt-4 xs:pt-4 ">
                  <UserDetailInput
                    id="confirm-password"
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    autoComplete="new-password"
                  />
                </div>
              </div>
              <button
                type="submit"
                class="bg-black text-white font-bold text-lg rounded hover:bg-gray-900 hover:border-b-4 hover:border-green-500 hover:pb-[3.5px] p-2 mt-8 mx-10"
              >
                Sign Up
              </button>
            </form>

            <div className="text-center ">
              <div class="text-center pt-6 pb-4">
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
              <p className="text-sm">Or Join us with:</p>
              <div className="flex justify-center pt-4">
                <button className="bg-red-500 hover:bg-red-700 rounded-full p-2 mr-4">
                  <Google className="text-white text-xl" />
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 rounded-full p-2">
                  <Facebook className="text-white text-xl" />
                </button>
              </div>
            </div>
          </Row>
        </Column>

        {/* <!-- Image Section --> */}
        <div class="w-1/2 h-screen sm:hidden md:w-1/4 lg:block relative">
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

export default Signup;
