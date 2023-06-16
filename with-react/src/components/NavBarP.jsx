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
import { useTranslation } from "react-i18next";

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
import { useEffect, useRef, useState, useContext } from "react";
import { useAuth } from "hooks/useAuth";
import LanguagePopover from "layouts/dashboard/header/LanguagePopover";

const NavBarP = () => {
  const navigate = useNavigate();
  const menuRef = useRef();
  const notificationRef = useRef();
  const { user, logout } = useAuth();

  function home() {
    navigate("/home");
  }
  function login() {
    navigate("/login");
  }
  function signup() {
    navigate("/signup");
  }
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [notificationPanel, setNotificationPanel] = useState(false);

  useEffect(() => {
    if (user !== null) {
      let handler = (e) => {
        if (!menuRef.current.contains(e.target)) {
          setOpen(false);
        }
        if (!notificationRef.current.contains(e.target)) {
          setNotificationPanel(false);
        }
      };

      document.addEventListener("mousedown", handler);
      // console.log("running");

      return () => {
        document.removeEventListener("mousedown", handler);
      };
    }
  });

  let conditionalNav;

  if (user !== null) {
    // console.log(localStorage.getItem("id"));
    conditionalNav = (
      <div className="flex flex-row p-[0.5rem] justify-between w-[10rem]">
        <a
          className="common-pointer cursor-pointer font-medium text-[20px] text-gray_901 mx-[0.5rem]"
          onClick={() => {
            navigate("/cart");
          }}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faCartShopping} />
        </a>
        <div
          className="common-pointer cursor-pointer font-medium text-[20px] text-gray_901 mx-[0.5rem]"
          onClick={() => {
            setOpen(false);
            setNotificationPanel(!notificationPanel);
          }}
          ref={notificationRef}
        >
          <FontAwesomeIcon icon={bell} />
        </div>
        <div
          className={`dropdown-menu dropdown-center .dropdown-notification ${
            notificationPanel ? "active" : "inactive"
          }`}
        >
          <h3 className="dropdownTitle">{t("NOTIFICATIONS")}</h3>
          <ul>
            <li>
              You have no notifations yet {t("You_have_no_notifations_yet")}{" "}
            </li>
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
          <h3 className="dropdownTitle">ACCOUNT {t("ACCOUNT")}</h3>
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
            <li
              className="dropdownItem"
              onClick={() => {
                logout();
                navigate("/login", { replace: true });
              }}
            >
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className="dropdownIcon"
              />
              <a className="dropdownTexts"> {t("Logout")}</a>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    conditionalNav = (
      <div className="flex flex-row p-[0.5rem] justify-between w-[15rem]">
        <Button
          className="cursor-pointer font-medium w-1/2 text-[12px] text-center mx-[1rem]"
          size="mdNavIcn"
          variant="OutlineGray500"
          shape="RoundedBorder5"
          onClick={login}
        >
          <b> {t("Log_In")}</b>
        </Button>
        <Button
          className="cursor-pointer font-medium text-[12px] text-center text-white_A700 w-1/2"
          size="mdNavIcn"
          shape="RoundedBorder5"
          variant="DarkBlueBlack"
          onClick={signup}
        >
          <b> {t("Sign_Up")}</b>
        </Button>
      </div>
    );
  }

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

    <div className="bg-white flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[auto] ml-[auto] mr-[auto] md:p-[5px] p-[1rem] sm:pl-[15px] sm:pr-[15px] sm:px-[15px] sm:py-[11px] w-[100%]">
      <div className="brandLogo flex mx-[2rem]">
        <Img
          src="/images/logo.png"
          className="flex-shrink-0 sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[30px]"
          alt="logo"
        />
        <Text
          className="hover:cursor-pointer flex-grow font-semibold ml-[1rem] sm:ml-[1rem] md:ml-[8px] text-black_900"
          as="h5"
          variant="h5"
          onClick={home}
        >
          Skill Learn
        </Text>
      </div>

      <LanguagePopover />

      <div className="w-[20rem]">
        <ul className="flex flex-row justify-between navlinkHolder">
          <li className="navLinks">
            <Link to={"/library"} className="link">
              {t("Library")}
            </Link>
          </li>
          <li className="navLinks">
            <Link to={"/wishlist"} className="link">
              {t("Wishlist")}
            </Link>
          </li>
          <li className="navLinks">
            <Link to={"/shop"} className="link">
              {t("Store")}
            </Link>
          </li>
          <li className="navLinks">
            <Link to={"/live_classes"} className="link">
              {t("Live")}
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
          placeholder={t("Search_Courses")}
          size="sm"
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
      {conditionalNav}
    </div>
  );
};

export default NavBarP;
