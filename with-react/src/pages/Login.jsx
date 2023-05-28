import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Column, Row, Divider, UserDetailInput, TextLogo } from "components";
// import SocialLogin from "components/common/SocialLogin";
// import RoleSelectionStepper from "components/RoleSelectionStepper";
import animationGif from "../assets/images/online-courses.png";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ClockLoader, BeatLoader } from "react-spinners";

import { LoginContext } from "LoginContext";

import axios from "axios";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSchema } from "../hooks/UserValidation";

const override = {
  display: "block",
  margin: "0 auto",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "0",
  zIndex: "99",
  border: "none",
};

const Login = () => {
  const [LoginStatus, setLoginStatus] = useContext(LoginContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.clear();
    setLoginStatus(false);
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  // Register the form to check for validations witht the corrent schema
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(loginSchema),
  // });

  const tryLogin = (event) => {
    event.preventDefault();
    const userCredentials = {
      email: email,
      password: password,
    };
    setLoading(true);
    axios
      .post(`/local/login`, userCredentials, { withCredentials: true })
      .then((res) => {
        setLoading(false);
        if (res.status === 200) {
          localStorage.setItem("id", res.data.id);
          localStorage.setItem("balance", res.data.balance);
          setLoginStatus(true);
          if (res.data.role === "creator" || res.data.role === "admin") {
            navigate("/dashboard", { replace: true });
          } else {
            navigate("/shop", { replace: true });
          }
        } else {
        }
      })
      .catch((err) => {
        // console.log(err.message === "Network Error");
        setLoading(false);
        if (err.message !== "Network Error") {
          if (err.response.status === 401 || err.response.status === 404) {
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
          }
        } else {
          // setLoading(false);
          toast.error("Network Error", {
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
      });
    // handle form submission here
  };

  const loginSteps = (
    <>
      <form
        className="flex flex-col pt-3 md:pt-8 sm:px-2 sm:w-full pt-10 px-[10rem]"
        onSubmit={tryLogin}
      >
        <div className="flex flex-col pt-4 px-6">
          <UserDetailInput
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            id="email"
            placeholder="sample@gmail.com"
            autoFocus
            // {...register("email")}
          />
          {/* <p className="error loginError">{errors.email?.message}</p> */}
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
            // {...register("password")}
          />
          {/* <p className="error loginError">{errors.password?.message}</p> */}
        </div>
        <button
          type="submit"
          className="bg-dark_green text-white font-bold text-lg rounded-lg hover:bg-green-900/80 focus:bg-dark_green p-2 mt-8 mx-6"
        >
          Log In
        </button>
      </form>
      <div className="">
        <div className="text-center pt-12 pb-6]">
          <p
            className="font-semibold underline cursor-pointer text-green-900"
            onClick={() => {
              navigate("/reset_password");
            }}
          >
            Forgot Password?
          </p>
          <Divider />
          <p className="text-center">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="underline font-semibold hover:text-green-700"
            >
              Register here.
            </Link>
          </p>
        </div>
      </div>
    </>
  );
  // },
  // {
  //   title: "Select your role",
  //   form: <></>,
  // },
  // ];

  return (
    <React.Fragment>
      <div className="w-[85rem] flex flex-row justify-center items-center shadow-2xl rounded-2xl m-auto mt-[2rem] mb-[2rem]  border-2 border-gray-300 sm:w-[100%] sm:m-[0]">
        <BeatLoader
          color={"#754"}
          loading={loading}
          size={50}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />

        {/* <div className="h-screen rounded-2xl bg-white"> */}
        <div className="w-full rounded-2xl h-fit flex flex-wrap bg-white">
          {/* <!-- Login Section --> */}
          <Column className="w-1/2  sm:w-full md:w-full  flex flex-col">
            {/* <Row className="flex justify-center md:justify-start pt-12 md:pl-12 ">
              <Link
                to="/"
                component="a"
                className="text-white font-bold text-xl  p-4"
              >
                {TextLogo(2.2)}
              </Link>
            </Row> */}
            <Row>
              <p className="w-full text-center font-semibold text-dark_green text-3xl mt-[8rem]">
                Welcome back
              </p>
              {loginSteps}
              {/* <RoleSelectionStepper
                steps={loginSteps}
                onRoleSelect={handleRoleSelect}
              /> */}
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
