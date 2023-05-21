import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserDetailInput } from "components";
import axios from "axios";

const ResetPassword = () => {
  const [email, setEmail] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [emailSent, setEmailSent] = useState(false);
  const { id, token } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const myEmail = {
      email,
    };
    // console.log(myEmail);
    axios
      .post("/local/reset_password/send_email", myEmail)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          alert("No Account found with given email");
        }
        // console.log(err.response.status);
      });
  };
  const handleChangePassword = (e) => {
    e.preventDefault();
    const newCredentials = {
      id,
      token,
      password: newPassword,
    };
    axios
      .post("/local/reset_password/changePassword", newCredentials)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // alert("Password Changed");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  useEffect(() => {
    if (token) {
      // alert(token);
      setEmailSent(true);
    }
  }, [token]);

  let resetPassword;

  if (!emailSent) {
    resetPassword = (
      <form
        className="bg-white text-center h-[30rem] w-[25rem] shadow-md rounded-md p-4"
        onSubmit={handleSubmit}
      >
        <h2 className="font-semibold text-2xl m-4">Password Reset</h2>
        <p className="text-gray-600 mb-10">
          Enter email to reset your password
        </p>
        <div className="flex flex-col pt-4 px-6">
          <UserDetailInput
            type="email"
            value={email}
            onChange={handleEmailChange}
            id="email"
            placeholder="sample@gmail.com"
            autoFocus
          />
        </div>
        <button
          type="submit"
          className="bg-dark_green text-white text-lg rounded-md hover:bg-green-900/80 focus:bg-dark_green py-2 w-[85%] mt-8 "
        >
          Send Email
        </button>
      </form>
    );
  } else {
    resetPassword = (
      <form
        className="bg-white text-center h-[30rem] w-[25rem] shadow-md rounded-md p-4"
        onSubmit={handleChangePassword}
      >
        <h2 className="font-semibold text-2xl m-4">Password Reset</h2>
        <p className="text-gray-600 mb-10">Enter your new password</p>
        <div className="flex flex-col pt-4 px-6">
          <UserDetailInput
            label={"New Password"}
            type="password"
            value={newPassword}
            onChange={handlePasswordChange}
            id="email"
            placeholder="New Password"
            autoFocus
          />
        </div>
        <div className="flex flex-col pt-4 px-6">
          <UserDetailInput
            label={"Confirm Password"}
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            id="email"
            placeholder="Confirm New Password"
            autoFocus
          />
        </div>
        <button
          type="submit"
          className="bg-dark_green text-white text-lg rounded-md hover:bg-green-900/80 focus:bg-dark_green py-2 w-[85%] mt-8 "
        >
          Change Password
        </button>
      </form>
    );
  }

  return <div className="bg-light_green emptyPage">{resetPassword}</div>;
};

export default ResetPassword;
