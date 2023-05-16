import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faCartShopping,
  faMagnifyingGlass,
  faArrowUpRightFromSquare,
  faUser,
  faArrowRightFromBracket,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

import { faBell as bell } from "@fortawesome/free-regular-svg-icons";

import {
  Column,
  Row,
  Img,
  Text,
  SelectBox,
  Button,
  Line,
  Stack,
  List,
  Grid,
  Input,
  DropdownItem,
} from "./";
import { useNavigate } from "react-router-dom";
import Sticky from "react-stickynode";
import { useEffect, useRef, useState } from "react";

const NavBarP = () => {
  const navigate = useNavigate();
  const menuRef = useRef();

  function home() {
    navigate("/home");
  }
  function login() {
    navigate("/login");
  }
  function signup() {
    navigate("/signup");
  }

  const [open, setOpen] = useState(false);
  const [notificationPanel, setNotificationPanel] = useState(false);

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        setNotificationPanel(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    // <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[auto] ml-[auto] mr-[auto] md:p-[5px] p-[1rem] sm:pl-[15px] sm:pr-[15px] sm:px-[15px] sm:py-[11px] w-[100%]">
    //   <div className="brandLogo flex mx-[2rem]">
    //     <Img
    //       src="images/logo.png"
    //       className="flex-shrink-0 sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[30px]"
    //       alt="logo"
    //     />
    //     <Text
    //       className="hover:cursor-pointer flex-grow font-semibold ml-[1rem] sm:ml-[1rem] md:ml-[8px] text-black_900"
    //       as="h5"
    //       variant="h5"
    //       onClick={home}
    //     >
    //       Skill-Learn
    //     </Text>
    //   </div>
    //   <div className="mobile-menu">
    //     <div></div>
    //   </div>
    //   <Input
    //     className="font-medium p-[10px] text-[16px] placeholder:text-gray_700 text-gray_700 w-[100%]"
    //     wrapClassName="flex p-[0] sm:mx-[0] sm:w-[100%] w-[40%]"
    //     type="text"
    //     name="search"
    //     placeholder="Search"
    //     size="smNav"
    //     variant="OutlineGray300"
    //   ></Input>
    //   <Button
    //     className="cursor-pointer font-medium min-w-[5%] text-[16px] text-center text-white_A700 "
    //     shape="CustomBorderLR10"
    //     size="mdNavIcn"
    //     variant="DarkBlueBlack"
    //   >
    //     <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
    //   </Button>
    //   <a
    //     href={"javascript:"}
    //     className="common-pointer cursor-pointer font-medium text-[20px] text-gray_901 mx-[2rem]"
    //     onClick={() => {}}
    //     rel="noreferrer"
    //   >
    //     <FontAwesomeIcon icon={faCartShopping} />
    //   </a>

    //   <Button
    //     className="cursor-pointer font-medium min-w-[5%] text-[12px] text-center w-[6%] mx-[1rem]"
    //     size="mdNavIcn"
    //     variant="OutlineGray500"
    //     shape="RoundedBorder1"
    //     onClick={login}
    //   >
    //     <b>Login</b>
    //   </Button>
    //   <Button
    //     className="cursor-pointer font-medium min-w-[5%] text-[12px] text-center text-white_A700 w-[6%] "
    //     size="mdNavIcn"
    //     shape="RoundedBorder1"
    //     variant="DarkBlueBlack"
    //     onClick={signup}
    //   >
    //     <b>Signup</b>
    //   </Button>
    // </Row>

    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[auto] ml-[auto] mr-[auto] md:p-[5px] p-[1rem] sm:pl-[15px] sm:pr-[15px] sm:px-[15px] sm:py-[11px] w-[100%]">
      <div className="brandLogo flex mx-[2rem]">
        <Img
          src="images/logo.png"
          className="flex-shrink-0 sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[30px]"
          alt="logo"
        />
        <Text
          className="hover:cursor-pointer flex-grow font-semibold ml-[1rem] sm:ml-[1rem] md:ml-[8px] text-black_900"
          as="h5"
          variant="h5"
          onClick={home}
        >
          Skill-Learn
        </Text>
      </div>
      <div className="w-[20rem]">
        <ul className="flex flex-row justify-between navlinkHolder">
          <li className="navLinks">
            <Link to={"/wishlist"} className="link">
              Wishlist
            </Link>
          </li>
          <li className="navLinks">
            <Link to={"/library"} className="link">
              Library
            </Link>
          </li>
          <li className="navLinks">
            <Link to={"/shop"} className="link">
              Store
            </Link>
          </li>
          <li className="navLinks">
            <Link to={"/live_classes"} className="link">
              Live
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-row w-[20rem]">
        <Input
          className="font-medium p-[5px] pl-[10px] text-[16px] placeholder:text-gray_700 text-gray_700 w-[100%] top-search"
          wrapClassName="flex p-[0] sm:mx-[0] sm:w-[100%] w-[100%]"
          type="text"
          name="search"
          placeholder="Search Courses"
          size="smNav"
          variant="OutlineGray300"
        ></Input>
        <Button
          className="cursor-pointer font-medium min-w-[15%] text-[16px] text-center text-white_A700 "
          shape="CustomBorderLR10"
          size="mdNavIcn"
          variant="NavyBlue"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        </Button>
      </div>
      <div className="flex flex-row p-[0.5rem] justify-between w-[10rem]">
        <a
          href={"javascript:"}
          className="common-pointer cursor-pointer font-medium text-[20px] text-gray_901 mx-[0.5rem]"
          onClick={() => {
            navigate("/cart");
          }}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faCartShopping} />
        </a>
        <a
          href={"javascript:"}
          className="common-pointer cursor-pointer font-medium text-[20px] text-gray_901 mx-[0.5rem]"
          onClick={() => {
            setOpen(false);
            setNotificationPanel(!notificationPanel);
          }}
          ref={menuRef}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={bell} />
        </a>
        <div
          className={`dropdown-menu dropdown-center .dropdown-notification ${
            notificationPanel ? "active" : "inactive"
          }`}
        >
          <h3 className="dropdownTitle">NOTIFICATIONS</h3>
          <ul>
            <li>You have no notifations yet </li>
          </ul>
        </div>
        <div
          className="link userIcon cursor-pointer"
          onClick={() => {
            setNotificationPanel(false);
            setOpen(!open);
          }}
          ref={menuRef}
        >
          <img src={require("../assets/images/male3.jpg")} alt="usrProfile" />
        </div>
        <div
          className={`dropdown-menu dropdown-right ${
            open ? "active" : "inactive"
          }`}
        >
          <h3 className="dropdownTitle">ACCOUNT</h3>
          <ul>
            <DropdownItem
              icon={faUser}
              text={"Switch Accounts"}
              navigate={"/switch_accounts"}
            />
            <DropdownItem
              icon={faWallet}
              text={"Buy Currency"}
              navigate={"buycurrency"}
            />
            <DropdownItem
              icon={faArrowUpRightFromSquare}
              text={"Manage Profile"}
              navigate={"/account_info"}
            />
            <DropdownItem
              icon={faArrowRightFromBracket}
              text={"Logout"}
              navigate={"/"}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBarP;
