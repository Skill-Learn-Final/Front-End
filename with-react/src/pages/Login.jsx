import React, { useState } from "react";
import { TextLogo } from "../components/MVisuals";
import { Link } from "react-router-dom";
import { Column, Row, Divider, UserDetailInput } from "components";
import SocialLogin from "components/common/SocialLogin";

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
      <div className="h-screen bg-faint_green">
        <div className="w-full  h-fit flex flex-wrap bg-faint_green">
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
            <Row className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
              <p className="w-full text-center font-semibold text-dark_green text-3xl">
                Welcome back.
              </p>
              <form
                className="flex flex-col pt-3 md:pt-8"
                onsubmit={handleSubmit}
              >
                <div className="flex flex-col pt-4 px-6">
                  <UserDetailInput
                    label="Email"
                    type="email"
                    value={username}
                    onChange={handleUsernameChange}
                    id="email"
                    placeholder="your@email.com"
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
              <div className="text-center ">
                <div className="text-center pt-12 pb-6">
                  <p className>
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
            </Row>
          </Column>
          {/* <!-- Image Section --> */}
          <div className="w-1/2 h-screen sm:hidden md:hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-faint_green"></div>
            <img
              className="object-cover w-full h-screen"
              src="https://source.unsplash.com/random/600x800"
              alt="login decoration"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
