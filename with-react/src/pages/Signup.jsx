import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

import axios from "axios";

import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = ({ onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const navigate = useNavigate();

  const handlefullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
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
    const userCredentials = {
      fullName,
      email,
      password,
      role: selectedRole,
    };
    // const jsonData = JSON.stringify(formData);

    axios
      .post(`/local/register`, userCredentials)
      .then((res) => {
        if (res.status === 200) {
          toast.success(
            "Confirm your Email. We've sent a confirmation link to your email",
            {
              position: "top-center",
              autoClose: false,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }
          );
          // if (res.data.emailConfirmed) {
          //   if (res.data.role === "creator") {
          //     navigate("/creator/dashboard", { replace: true });
          //   } else if (res.data.role === "admin") {
          //     navigate("/admin/dashboard", { replace: true });
          //   } else {
          //     navigate("/shop", { replace: true });
          //   }
          // } else {
          //   navigate("/confirm_email", { replace: true });
          // }
        } else if (res.status === 409) {
          alert(res.status);
        }
      })
      .catch((err) => {
        if (err.message !== "Network Error") {
          if (err.message.includes(409)) {
            toast.error("Account with the given email already exists", {
              position: "top-center",
              autoClose: false,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }

          toast.error(err.response.data, {
            position: "top-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          toast.error("Network Error", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
    // handle form submission here
  };

  const signupSteps = [
    {
      title: "Choose Account Type",
      form: <></>,
    },
    {
      title: "Signup",
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
            <div className="text-center pt-6 pb-4 mt-[2rem]">
              <Divider />
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
            {/* <Divider type="hor" className="w-3/5" />
            <p className="text-sm">Or continue with:</p>
            <SocialLogin /> */}
          </div>
        </>
      ),
    },
  ];

  return (
    <React.Fragment>
      <div className="w-[85rem] flex flex-row justify-center items-center shadow-2xl rounded-2xl overflow-hidden m-auto mt-[2rem] mb-[2rem]  border-2 border-gray-300 sm:w-[100%] sm:m-[0]">
        {/* <div className="shadow-2xl rounded-2xl m-16   border-2 border-gray-300"> */}
        <div className="w-full rounded-2xl h-fit flex flex-wrap bg-faint_green">
          {/* <!-- Signup Section --> */}
          <Column className="w-1/2 bg-zinc-100 sm:w-full md:w-full  flex flex-col">
            {/* <Row className="flex justify-start pt-4">
              <Link
                to="/"
                component="a"
                className="text-white font-bold text-xl text-left  p-4"
              >
                {TextLogo(2.2)}
              </Link>
            </Row> */}
            <Row className="mt-10">
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
            className="w-1/2 h-screen sm:hidden md:hidden lg:block relative flex items-center"
            style={{
              backgroundImage: `url(${animationGif})`,
              backgroundSize: "contain",
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

export default Signup;
