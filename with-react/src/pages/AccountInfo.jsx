import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Column, NavBarP, UserDetailInput } from "components";
import IconButton from "components/IconButton";
import Accordion from "components/Accordion";

const AccountInfo = (userid) => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [username, setUsername] = useState("");

  const [about, setAbout] = useState("");
  const [isAboutEditable, setIsAboutEditable] = useState(false);

  const [photo, setPhoto] = useState("");

  const [firstName, setFirstName] = useState("");
  const [isFirstNameEditable, setIsFirstNameEditable] = useState(false);

  const [lastName, setLastName] = useState("");
  const [isLastNameEditable, setIsLastNameEditable] = useState(false);

  const [email, setEmail] = useState("");
  const [isEmailEditable, setIsEmailEditable] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [isNewPasswordEditable, setIsNewPasswordEditable] = useState(false);

  const [emailNotifications, setEmailNotifications] = useState(false);
  const [inAppNotifications, setInAppNotifications] = useState(false);

  // const handleUsernameChange = (event) => {
  //   setUsername(event.target.value);
  // };

  const handleAboutChange = (event) => {
    setAbout(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.value);
  };

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

  // edit field handlers for pswrd, @, fname, lname, about
  const handleNewPasswordEdit = () => {
    setIsNewPasswordEditable((prevValue) => !prevValue);
  };
  const handleEmailEdit = () => {
    setIsEmailEditable((prevValue) => !prevValue);
  };

  const handleFirstNameEdit = () => {
    setIsFirstNameEditable((prevValue) => !prevValue);
  };

  const handleLastNameEdit = () => {
    setIsLastNameEditable((prevValue) => !prevValue);
  };

  const handleAboutEdit = () => {
    setIsAboutEditable((prevValue) => !prevValue);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const topBtnClass = `w-1/3 rounded-md text-sm font-semibold px-3 py-2 active:bg-slate-300 hover:bg-slate-300 hover:text-gray-800 focus:text-gray-800 focus:bg-slate-300  focus:shadow-inner active:shadow-slate-100 active:shadow-sm focus:shadow-slate`;
  const UserDetailInputClass = `flex-1 w-full rounded-md enabled:border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:bg-transparent  disabled:border-none`;
  return (

    <Accordion></Accordion>
    // <Column className="bg-light_green flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
    //   <NavBarP />
    //   <div className="w-2/3 h-fit sm:w-full flex flex-wrap justify-evenly items-center p-10">
    //     <div className="w-full h-screen ">
    //       {/* Top Buttons */}
    //       <div className="flex flex-row justify-evenly items-stretch p-2 space-x-4 w-full mb-4 bg-slate-50 rounded-full">
    //         <button
    //           className={`${
    //             activeTab === "Profile" ? "bg-green-200" : ""
    //           } w-1/3 rounded-full text-sm font-semibold px-3 py-2 text-gray-900
    //           hover:bg-green-100 active:bg-green-300 focus-visible:outline
    //           focus-visible:outline-2 focus-visible:outline-offset-2
    //           focus-visible:outline-green-600
    //           focus:shadow-inner active:shadow-green-100
    //           active:shadow-sm focus:shadow-green_200`}
    //           onClick={() => handleTabClick("Profile")}
    //           autoFocus
    //         >
    //           Profile
    //         </button>
    //         <button
    //           className={`${
    //             activeTab === "Personal Information" ? "bg-green-200" : ""
    //           } w-1/3 rounded-full text-sm font-semibold px-3 py-2 text-gray-900
    //           hover:bg-green-100 active:bg-green-300 focus-visible:outline
    //           focus-visible:outline-2 focus-visible:outline-offset-2
    //           focus-visible:outline-green-600
    //           focus:shadow-inner active:shadow-green-100
    //           active:shadow-sm focus:shadow-green_200`}
    //           onClick={() => handleTabClick("Personal Information")}
    //         >
    //           Personal Information
    //         </button>
    //         <button
    //           className={`${
    //             activeTab === "Account Notifications" ? "bg-green-200" : ""
    //           } w-1/3 rounded-full text-sm font-semibold px-3 py-2 text-gray-900
    //           hover:bg-green-100 active:bg-green-300 focus-visible:outline
    //           focus-visible:outline-2 focus-visible:outline-offset-2
    //           focus-visible:outline-green-600
    //           focus:shadow-inner active:shadow-green-100
    //           active:shadow-sm focus:shadow-green_200`}
    //           onClick={() => handleTabClick("Account Notifications")}
    //         >
    //           Account Notifications
    //         </button>
    //       </div>
    //       <form>
    //         <div className="space-y-12">
    //           {/* PROFILE SECTION */}
    //           <div
    //             className={`${
    //               activeTab === "Profile" ? "block" : "hidden"
    //             } border-b border-gray-900/10 pb-12`}
    //           >
    //             <h2 className="text-base font-semibold leading-7 text-gray-900">
    //               Profile
    //             </h2>
    //             <p className="mt-1 text-sm leading-6 text-gray-600">
    //               This information will be displayed publicly so be careful what
    //               you share.
    //             </p>
    //             <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    //               <div className=" bg-slate-100 p-4 rounded-md col-span-full grid grid-cols-4 gaps-2">
    //                 <label
    //                   htmlFor="username"
    //                   className="text-sm col-span-1 sm:col-span-4 self-center sm:pb-2 pr-4 font-medium text-gray-900"
    //                 >
    //                   Username
    //                 </label>
    //                 <div className="col-span-3 sm:col-span-4">
    //                   <UserDetailInput
    //                     type="text"
    //                     name="username"
    //                     id="username"
    //                     autoComplete="username"
    //                     className=" flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
    //                     placeholder="janesmith"
    //                   />
    //                 </div>
    //               </div>
    //               <div className="bg-slate-100 p-4 rounded-md col-span-full">
    //                 <div className="grid grid-cols-4 gaps-2">
    //                   <label
    //                     htmlFor="about"
    //                     className="text-sm col-span-1 sm:col-span-4 self-center sm:pb-2 pr-4 font-medium text-gray-900"
    //                   >
    //                     About
    //                   </label>
    //                   <div className="col-span-3 sm:col-span-4">
    //                     <textarea
    //                       id="about"
    //                       name="about"
    //                       rows={3}
    //                       className="w-full bg-green_200 border-green_200 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue border-[1px] focus:border-green-700 "
    //                       defaultValue={""}
    //                     />
    //                   </div>
    //                   <p className="col-span-4 mt-3 text-sm leading-6 text-gray-600">
    //                     Write a few sentences about yourself.
    //                   </p>
    //                 </div>
    //               </div>
    //               <div className="bg-slate-100 p-4 rounded-md col-span-full">
    //                 <div className="grid grid-cols-4 gaps-2">
    //                   <label
    //                     htmlFor="photo"
    //                     className="text-sm col-span-1 sm:col-span-4 self-center sm:pb-2 pr-4 font-medium text-gray-900"
    //                   >
    //                     Photo
    //                   </label>
    //                   <div className="col-span-3 sm:col-span-4 flex items-center gap-x-3">
    //                     <FontAwesomeIcon
    //                       icon={faCircleUser}
    //                       className="h-12 w-12 text-gray-300"
    //                       aria-hidden="true"
    //                     />
    //                     <button
    //                       type="button"
    //                       className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    //                     >
    //                       Change
    //                     </button>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           {/* PERSONAL INFORMATION */}
    //           <div
    //             className={`${
    //               activeTab === "Personal Information" ? "block" : "hidden"
    //             } border-b border-gray-900/10 pb-12`}
    //           >
    //             <h2 className="text-base font-semibold leading-7 text-gray-900">
    //               Personal Information
    //             </h2>
    //             <p className="mt-1 text-sm leading-6 text-gray-600">
    //               Use a permanent address where you can receive mail.
    //             </p>
    //             <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    //               <div className=" bg-slate-100 p-4 rounded-md col-span-full grid grid-cols-4 gaps-2">
    //                 <label
    //                   htmlFor="first-name"
    //                   className="text-sm col-span-1 sm:col-span-4 self-center sm:pb-2 pr-4 font-medium text-gray-900"
    //                 >
    //                   First name
    //                 </label>
    //                 <div className="col-span-3 sm:col-span-4">
    //                   <UserDetailInput
    //                     type="text"
    //                     name="first-name"
    //                     id="first-name"
    //                     autoComplete="given-name"
    //                     className="flex-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //                   />
    //                 </div>
    //               </div>
    //               <div className=" bg-slate-100 p-4 rounded-md col-span-full grid grid-cols-4 gaps-2">
    //                 <label
    //                   htmlFor="last-name"
    //                   className="text-sm col-span-1 sm:col-span-4 self-center sm:pb-2 pr-4 font-medium text-gray-900"
    //                 >
    //                   Last name
    //                 </label>
    //                 <div className="col-span-3 sm:col-span-4">
    //                   <UserDetailInput
    //                     type="text"
    //                     name="last-name"
    //                     id="last-name"
    //                     autoComplete="family-name"
    //                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //                   />
    //                 </div>
    //               </div>
    //               <div className=" bg-slate-100 p-4 rounded-md col-span-full grid grid-cols-4 gaps-2">
    //                 <label
    //                   htmlFor="email"
    //                   className="text-sm col-span-1 sm:col-span-4 self-center sm:pb-2 pr-4 font-medium text-gray-900"
    //                 >
    //                   Email address
    //                 </label>
    //                 <div className="col-span-3 sm:col-span-4">
    //                   <UserDetailInput
    //                     id="email"
    //                     name="email"
    //                     type="email"
    //                     autoComplete="email"
    //                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           {/* ACCOUNT NOTIFICATIONS */}
    //           <div
    //             className={`${
    //               activeTab === "Account Notifications" ? "block" : "hidden"
    //             } border-b border-gray-900/10 pb-12`}
    //           >
    //             <h2 className="text-base font-semibold leading-7 text-gray-900">
    //               Notifications
    //             </h2>
    //             <p className="mt-1 text-sm leading-6 text-gray-600">
    //               We'll always let you know about important changes, but you
    //               pick what else you want to hear about.
    //             </p>
    //             <div className="mt-10 space-y-10">
    //               <fieldset>
    //                 <legend className="text-sm font-semibold leading-6 text-gray-900">
    //                   By Email
    //                 </legend>
    //                 <div className="mt-6 space-y-6">
    //                   <div className="relative flex gap-x-3">
    //                     <div className="flex h-6 items-center">
    //                       <UserDetailInput
    //                         id="comments"
    //                         name="comments"
    //                         type="checkbox"
    //                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //                       />
    //                     </div>
    //                     <div className="text-sm leading-6">
    //                       <label
    //                         htmlFor="comments"
    //                         className="font-medium text-gray-900"
    //                       >
    //                         Comments
    //                       </label>
    //                       <p className="text-gray-500">
    //                         Get notified when someones posts a comment on a
    //                         posting.
    //                       </p>
    //                     </div>
    //                   </div>
    //                   <div className="relative flex gap-x-3">
    //                     <div className="flex h-6 items-center">
    //                       <UserDetailInput
    //                         id="candidates"
    //                         name="candidates"
    //                         type="checkbox"
    //                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //                       />
    //                     </div>
    //                     <div className="text-sm leading-6">
    //                       <label
    //                         htmlFor="candidates"
    //                         className="font-medium text-gray-900"
    //                       >
    //                         Candidates
    //                       </label>
    //                       <p className="text-gray-500">
    //                         Get notified when a candidate applies for a job.
    //                       </p>
    //                     </div>
    //                   </div>
    //                   <div className="relative flex gap-x-3">
    //                     <div className="flex h-6 items-center">
    //                       <UserDetailInput
    //                         id="offers"
    //                         name="offers"
    //                         type="checkbox"
    //                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //                       />
    //                     </div>
    //                     <div className="text-sm leading-6">
    //                       <label
    //                         htmlFor="offers"
    //                         className="font-medium text-gray-900"
    //                       >
    //                         Offers
    //                       </label>
    //                       <p className="text-gray-500">
    //                         Get notified when a candidate accepts or rejects an
    //                         offer.
    //                       </p>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </fieldset>
    //               <fieldset>
    //                 <legend className="text-sm font-semibold leading-6 text-gray-900">
    //                   Push Notifications
    //                 </legend>
    //                 <p className="mt-1 text-sm leading-6 text-gray-600">
    //                   These are delivered via SMS to your mobile phone.
    //                 </p>
    //                 <div className="mt-6 space-y-6">
    //                   <div className="flex items-center gap-x-3">
    //                     <UserDetailInput
    //                       id="push-everything"
    //                       name="push-notifications"
    //                       type="radio"
    //                       className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //                     />
    //                     <label
    //                       htmlFor="push-everything"
    //                       className="block text-sm font-medium leading-6 text-gray-900"
    //                     >
    //                       Everything
    //                     </label>
    //                   </div>
    //                   <div className="flex items-center gap-x-3">
    //                     <UserDetailInput
    //                       id="push-email"
    //                       name="push-notifications"
    //                       type="radio"
    //                       className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //                     />
    //                     <label
    //                       htmlFor="push-email"
    //                       className="block text-sm font-medium leading-6 text-gray-900"
    //                     >
    //                       Same as email
    //                     </label>
    //                   </div>
    //                   <div className="flex items-center gap-x-3">
    //                     <UserDetailInput
    //                       id="push-nothing"
    //                       name="push-notifications"
    //                       type="radio"
    //                       className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //                     />
    //                     <label
    //                       htmlFor="push-nothing"
    //                       className="block text-sm font-medium leading-6 text-gray-900"
    //                     >
    //                       No push notifications
    //                     </label>
    //                   </div>
    //                 </div>
    //               </fieldset>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="mt-6 flex items-center justify-end gap-x-6">
    //           <button
    //             type="button"
    //             className="rounded-md text-sm font-semibold  px-3 py-2  text-gray-900 hover:bg-green-100 active:bg-green-300  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
    //           >
    //             Cancel
    //           </button>
    //           <button
    //             type="submit"
    //             className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
    //           >
    //             Save
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </Column>
  );
};

export default AccountInfo;
