import React, {
  Component,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faClose } from "@fortawesome/free-solid-svg-icons";
import { Column, NavBarP, UserDetailInput } from "components";
import { LoginContext } from "LoginContext";
import axios from "axios";
import Iconify from "components/iconify/Iconify";
import { Box, Button } from "@mui/material";
import Modal from "react-modal";
import { useAuth } from "hooks/useAuth";
import { userHasRole } from "utils/helpers";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useUser } from "hooks/useUser";

const customStyles = {
  content: {
    width: "50%",
    height: "50%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    position: "relative",
    // marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AccountInfo = () => {
  // const [user, setUser] = useState({
  //   id: localStorage.getItem("id"),
  // });
  // console.log(`user: ${user.profilePicture }`);
  const { user } = useUser();
  const { token } = useParams();
  const [activeTab, setActiveTab] = useState("Profile");
  const [isEditable, setIsEditable] = useState(false);

  const [about, setAbout] = useState("");

  const [profilePicture, setProfilePicture] = useState("");

  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [message, setMessage] = useState("");

  const [emailNotifications, setEmailNotifications] = useState(false);
  const [inAppNotifications, setInAppNotifications] = useState(false);

  const [modalState, setModalState] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailNotificationsChange = () => {
    setEmailNotifications((prevValue) => !prevValue);
  };

  const handleInAppNotificationsChange = () => {
    setInAppNotifications((prevValue) => !prevValue);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };
  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };
  function closeModal() {
    setModalState(false);
  }
  const handleEdit = () => {
    setIsEditable((prevValue) => !prevValue);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    const newCredentials = {
      token,
      newPassword,
      oldPassword,
    };
    const formData = new FormData();
    formData.append("token", token);
    formData.append("newPassword", newPassword);
    formData.append("oldPassword", oldPassword);
    axios
      .post(`/users/change-password/${user.id}`, newCredentials)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Password Changed. You can now use your new password", {
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
      })
      .catch((err) => {
        console.log(err);
        // toast.error(err, {
        toast.error("Invalid Token", {
          position: "top-center",
          autoClose: true,
          hideProgressBar: false,
          closeOnClick: true,
          delay: 2000,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    if (profilePicture) {
      formData.append("profilePicture", profilePicture);
    }
    console.log(formData);

    axios
      .put(`/users/${user.id}`, formData)
      .then((res) => {
        // console.log(res.data.message);
        // addUser(res.data.user);
        fetchUserInfo();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchUserInfo = () => {
    axios
      .get(`/users/${user.id}`)
      .then((response) => {
        const { firstName, lastName, email, profilePicture } = response.data;
        setFirstName(firstName);
        setLastName(lastName);
        setEmail(email);
        setProfilePicture(profilePicture);
      })
      .catch((error) => {
        console.log(error); // Handle the error accordingly;
      });
  };

  useEffect(() => {
    console.log(user);
    fetchUserInfo();
  }, [user]);

  const topBtnClass = `w-1/3 rounded-md text-sm font-semibold px-3 py-2 active:bg-slate-300 hover:bg-slate-300 hover:text-gray-800 focus:text-gray-800 focus:bg-slate-300  focus:shadow-inner active:shadow-slate-100 active:shadow-sm focus:shadow-slate`;
  const UserDetailInputClass = `flex-1 w-full rounded-md enabled:border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:bg-transparent  disabled:border-none`;
  const forms = {
    profile: (
      <div
        className={`${
          activeTab === "Profile" ? "block" : "hidden"
        } border-b border-gray-900/10 pb-12 `}
      >
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Profile
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          This information will be displayed publicly so be careful what you
          share.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {/* ============ PROFILE PIC FIELD============ */}
          <div className=" p-4 rounded-md col-span-full">
            <div className="grid grid-cols-4 gaps-2">
              <div className="text-sm col-span-1 sm:col-span-4 self-center sm:pb-2 pr-4 font-medium text-gray-900">
                {!user.profilePicture && (
                  <img
                    className="h-24 w-24 rounded-full"
                    // src={user.profilePicture}
                    src="http://localhost:8080/uploads/profilePicture-1686789185292.png"
                    alt="User Profile"
                  />
                )}
                {user.profilePicture && (
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    className="h-24 w-24 rounded-full bg-medium_green text-slate-300"
                    aria-hidden="true"
                  />
                )}
              </div>
              <div className="col-span-3 sm:col-span-4 flex items-center gap-x-3">
                <Box
                  sx={{
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    mb: 3,
                  }}
                  fullwidth="true"
                >
                  <Button
                    component="label"
                    variant="text"
                    startIcon={<Iconify icon="material-symbols:file-upload" />}
                    sx={{ marginRight: "1rem" }}
                  >
                    Profile Picture
                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={(e) => {
                        console.log(e.target.files);
                        setProfilePicture(e.target.files[0]);
                      }}
                      disabled={!isEditable}
                    />
                  </Button>
                  {profilePicture !== null && profilePicture.name}
                </Box>
              </div>
            </div>
          </div>

          {/* ===== NAME FIELD ===== */}

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className=" p-4 rounded-md col-span-full grid grid-cols-4 gaps-2">
              <label
                htmlFor="first-name"
                className="text-sm col-span-1 sm:col-span-4 self-center sm:pb-2 pr-4 font-medium text-gray-900"
              >
                First name
              </label>
              <div className="col-span-3 sm:col-span-4 flex items-center">
                <UserDetailInput
                  type="text"
                  name="first-name"
                  id="first-name"
                  value={firstName}
                  autoComplete="given-name"
                  className={`${UserDetailInputClass} pr-10`}
                  onChange={handleFirstNameChange}
                  disabled={!isEditable}
                />
              </div>
            </div>
            <div className=" p-4 rounded-md col-span-full grid grid-cols-4 gaps-2">
              <label
                htmlFor="last-name"
                className="text-sm col-span-1 sm:col-span-4 self-center sm:pb-2 pr-4 font-medium text-gray-900"
              >
                Last name
              </label>
              <div className="col-span-3 sm:col-span-4 flex items-center">
                <UserDetailInput
                  type="text"
                  name="last-name"
                  id="last-name"
                  value={lastName}
                  autoComplete="family-name"
                  className={`${UserDetailInputClass} pr-10`}
                  onChange={handleLastNameChange}
                  disabled={!isEditable}
                />
              </div>
            </div>
            {/* <div className=" p-4 rounded-md col-span-full">
                    <div className="grid grid-cols-4 gaps-2">
                      <div className="col-span-1 flex items-start justify-center">
                        <label
                          htmlFor="about"
                          className="text-sm sm:pb-2 pr-4 font-medium text-gray-900 pt-2"
                        >
                          About
                        </label>
                        
                      </div>
                      <div className="col-span-3 sm:col-span-4">
                        <textarea
                          id="about"
                          name="about"
                          value={about}
                          rows={3}
                          className={`${UserDetailInputClass}`}
                          defaultValue={about}
                          onChange={handleAboutChange}
                          disabled={!isEditable}
                        />
                      </div>
                      <p className="col-span-4 mt-3 text-sm leading-6 text-gray-600">
                        Write a few sentences about yourself.
                      </p>
                    </div>
                  </div> */}
          </div>
        </div>
      </div>
    ),
    personalInformation: (
      <div
        className={`${
          activeTab === "Personal Information" ? "block" : "hidden"
        } border-b border-gray-900/10 pb-12`}
      >
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Personal Information
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>

        <div className=" p-4 rounded-md col-span-full grid grid-cols-4 gaps-2">
          <label
            htmlFor="email"
            className="text-sm col-span-1 sm:col-span-4 self-center sm:pb-2 pr-4 font-medium text-gray-900"
          >
            Email address
          </label>
          <div className="col-span-3 sm:col-span-4 flex items-center">
            <UserDetailInput
              id="email"
              name="email"
              type="email"
              value={email}
              autoComplete="email"
              className={`${UserDetailInputClass} pr-10`}
              onChange={handleEmailChange}
              disabled={true}
            />
          </div>
        </div>
        <div className=" pb-4 px-4 rounded-md col-span-full grid grid-cols-4 gaps-2">
          <label
            htmlFor="new-password"
            className="text-sm col-span-1 sm:col-span-4 self-center sm:pb-2 pr-4 font-medium text-gray-900  mt-5"
          >
            Password
          </label>
          <div className="col-span-3 sm:col-span-4 flex items-center button">
            <button
              type="button"
              name="changePassword"
              id="changePassword"
              className={`bg-green_300 rounded-md text-sm font-semibold  px-3 py-2  text-gray-900 hover:bg-light_green active:bg-green-300  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 mt-5 pr-10`}
              onClick={() => {
                setModalState(true);
              }}
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    ),
    accountNotifications: (
      <div
        className={`${
          activeTab === "Account Notifications" ? "block" : "hidden"
        } border-b border-gray-900/10 pb-12`}
      >
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Notifications
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          We'll always let you know about important changes, but you pick what
          else you want to hear about.
        </p>
        <div className="mt-10 space-y-10">
          <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">
              By Email
            </legend>
            <div className="mt-6 space-y-6">
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <UserDetailInput
                    id="comments"
                    name="comments"
                    type="checkbox"
                    required={false}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="comments"
                    className="font-medium text-gray-900"
                  >
                    Comments
                  </label>
                  <p className="text-gray-500">
                    Get notified when someones posts a comment on a posting.
                  </p>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <UserDetailInput
                    id="candidates"
                    name="candidates"
                    type="checkbox"
                    required={false}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="candidates"
                    className="font-medium text-gray-900"
                  >
                    Candidates
                  </label>
                  <p className="text-gray-500">
                    Get notified when a candidate applies for a job.
                  </p>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <UserDetailInput
                    id="offers"
                    name="offers"
                    type="checkbox"
                    required={false}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="offers" className="font-medium text-gray-900">
                    Offers
                  </label>
                  <p className="text-gray-500">
                    Get notified when a candidate accepts or rejects an offer.
                  </p>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    ),
    passwordChange: (
      <div className="flex flex-col absolute top-[20%] left-[10%]">
        <p className="text-lg w-3/4">
          Please input your old and new password below :
        </p>
        {/* <div className={`p-2 bg-red-300 text-white font-medium `}> */}
        {message && (
          <p className={`p-2 bg-red-300 text-white font-medium `}>{message}</p>
        )}
        {/* </div> */}
        <div className="mt-6">
          {/* ===== PASSWORD FIELD ===== */}
          <div className=" pt-1 rounded-md col-span-full grid grid-cols-4 gaps-2">
            <label
              htmlFor="password"
              className="text-sm col-span-1 sm:col-span-4 self-center sm:pb-2 pr-4 font-medium text-gray-900  mt-5"
            >
              Old Password
            </label>
            <div className="col-span-3 sm:col-span-4 flex items-center">
              <UserDetailInput
                type="password"
                name="password"
                id="password"
                value={oldPassword}
                className={`${UserDetailInputClass} mt-5 pr-10`}
                onChange={handleOldPasswordChange}
                required={true}
              />
            </div>
          </div>
          <div className=" pb-4 px-4 rounded-md col-span-full grid grid-cols-4 gaps-2">
            <label
              htmlFor="new-password"
              className="text-sm col-span-1 sm:col-span-4 self-center sm:pb-2 pr-4 font-medium text-gray-900  mt-5"
            >
              NewPassword
            </label>
            <div className="col-span-3 sm:col-span-4 flex items-center">
              <UserDetailInput
                type="password"
                name="new-password"
                id="new-password"
                value={newPassword}
                className={`${UserDetailInputClass} mt-5 pr-10`}
                onChange={handleNewPasswordChange}
                required={true}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-dark_green text-white font-bold text-lg rounded-md hover:bg-green-900/80 focus:bg-dark_green py-2 px-10 mt-8"
          >
            Change Password
          </button>
        </div>
      </div>
    ),
  };
  return (
    <>
      <Column className="bg-faint_green flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="w-2/3 h-fit sm:w-full flex flex-wrap justify-evenly items-center bg-faint_green p-10 my-8 shadow-xl rounded-2xl border-2 border-gray-300">
          <div className="w-full h-screen ">
            {/* Top Buttons */}
            <div className="flex flex-row justify-evenly items-stretch p-2 space-x-4 w-full mb-4 bg-slate-200 rounded-md ">
              <button
                className={`${
                  activeTab === "Profile"
                    ? "bg-slate-400  shadow-medium_green text-white"
                    : "text-gray-800"
                } ${topBtnClass}`}
                onClick={() => handleTabClick("Profile")}
                autoFocus
              >
                Profile
              </button>
              <button
                className={`${
                  activeTab === "Personal Information"
                    ? "bg-slate-400  shadow-medium_green text-white"
                    : "text-gray-800"
                } ${topBtnClass}`}
                onClick={() => handleTabClick("Personal Information")}
              >
                Personal Information
              </button>
              <button
                className={`${
                  activeTab === "Account Notifications"
                    ? "bg-slate-400  shadow-medium_green text-white"
                    : "text-gray-800"
                } ${topBtnClass}`}
                onClick={() => handleTabClick("Account Notifications")}
              >
                Account Notifications
              </button>
            </div>
            {/* Account Info Edit Form */}
            <form onSubmit={handleSaveChanges}>
              <div className="space-y-12 ">
                {forms.profile}
                {forms.personalInformation}
                {forms.accountNotifications}
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  onClick={() => setIsEditable(false)}
                  className="rounded-md text-sm font-semibold  px-3 py-2  text-gray-900 hover:bg-green-100 active:bg-green-300  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Cancel
                </button>
                {isEditable ? (
                  <button
                    type="submit"
                    onClick={() => handleEdit()}
                    className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    Save Changes
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit()}
                    className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    Edit Information
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </Column>

      <Modal
        isOpen={modalState}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleChangePassword}>
          {forms.passwordChange}
          <FontAwesomeIcon
            className="text-gray_600 cursor-pointer absolute right-5 top-5"
            size="2x"
            icon={faClose}
            onClick={closeModal}
          />
        </form>
      </Modal>
    </>
  );
};

export default AccountInfo;
