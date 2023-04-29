import React, { useState } from "react";
import { Facebook, Google } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { TextLogo, Divider, Column, Row, UserDetailInput } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

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
      <div className="w-full h-max flex flex-wrap bg-green-50">
        {/* <!-- Login Section --> */}
        <Column className="w-1/2 h-screen sm:w-full md:w-3/4  flex flex-col">
          <Row className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
            <Link
              to="/"
              component="a"
              className="text-white font-bold text-xl  p-4"
            >
              {TextLogo(2.2)}
            </Link>
          </Row>

          <Row className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="w-full text-center text-3xl">Create an account</p>
            <form
              className="flex flex-col pt-3 md:pt-8"
              onsubmit={handleSubmit}
            >
              <div className="flex flex-col pt-4 px-6">
                <UserDetailInput
                  label="Full Name"
                  type="text"
                  value={fullName}
                  onChange={handlefullNameChange}
                  autoComplete="name"
                />
              </div>
              <div className="flex flex-col pt-4 px-6">
                <UserDetailInput
                  id="email"
                  label="Email"
                  type="email"
                  value={email}
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
                  onChange={handleUsernameChange}
                  autoComplete="username"
                />
              </div>
              <div className="flex flex-row md:flex-col sm:flex-col xs:flex-col pt-4 px-6">
                <div className="flex-1 px-1 ">
                  <UserDetailInput
                    id="pass-word"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    autoComplete="new-password"
                  />
                </div>
                <div className="flex-1 px-1 md:pt-4 sm:pt-4 xs:pt-4 ">
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
                className="bg-black text-white font-bold text-lg rounded hover:bg-gray-900 hover:border-b-4 hover:border-green-500 hover:pb-[3.5px] p-2 mt-8 mx-10"
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
        <div className="w-1/2 h-screen sm:hidden md:hidden lg:block relative">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-green-50"></div>
          <img
            className="object-cover w-full h-screen"
            src="https://source.unsplash.com/random/600x800"
            alt="login decoration"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
