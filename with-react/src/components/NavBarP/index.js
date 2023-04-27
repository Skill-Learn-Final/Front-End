import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faArrowDown,
  faArrowTurnDown,
  faCircleUser,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { Row, Img, Text, Button, Input, Column } from "components";
import { Link } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";

export const NavBarP = () => {
  return (
    /* <Sticky bg-white_A700 enabled={true} className="w-[100%]"> */
    <header className=" bg-light_green rounded-radius30 w-[100%]">
      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1440px] ml-[auto] mr-[auto] md:p-[15px] p-[22px] sm:pl-[15px] sm:pr-[15px] sm:px-[15px] sm:py-[11px] w-[100%]">
        <Column className="header-row w-[13%] sm:w-[100%] sm:mx-[0] sm:px-[0] flex-row flex">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center">
            <Img
              src="images/logo.png"
              className="flex-shrink-0 sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[30px]"
              alt="logo"
            />
            <Text
              className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-black_900"
              as="h5"
              variant="h5"
            >
              Skill-Learn
            </Text>
          </Row>
          <div className="mobile-menu">
            <div></div>
          </div>
        </Column>
        <Column className="flex flex-row md:flex-wrap sm:flex-wrap sm:hidden md:ml-[27px] ml-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%] common-row-list">
          <Input
            className="font-medium p-[0] text-[16px] placeholder:text-gray_700 text-gray_700 w-[90%]"
            wrapClassName="flex p-[0] sm:mx-[0] sm:w-[100%] w-[90%]"
            type="text"
            name="search"
            placeholder="Search"
            size="smNav"
            variant="OutlineGray300"
          ></Input>
          <Button
            className="cursor-pointer font-medium min-w-[10%] text-[16px] text-center text-white_A700 "
            shape="CustomBorderLR10"
            size="mdNavIcn"
            variant="DarkBlueBlack"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          </Button>
        </Column>
        <Column className="flex flex-row md:flex-wrap sm:flex-wrap sm:hidden items-end justify-center md:ml-[20px] ml-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
          <a
            href={"javascript:"}
            className="common-pointer cursor-pointer font-medium text-[20px] text-gray_901"
            onClick={() => {}}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </a>
        </Column>

        <Column className="sm:hidden md:ml-[5px] ml-[5px] sm:mx-[0] sm:px-[0] sm:w-[50%] w-[6%]">
          <Link to="/login">
            <Button
              className="cursor-pointer font-medium min-w-[20%] text-[12px] text-center text-green-700 w-[max-content]"
              size="mdNavIcn"
              variant="OutlineGray500"
              shape="RoundedBorder1"
            >
              <b>Login</b>
            </Button>
          </Link>
        </Column>
        <Column className="sm:hidden md:ml-[2px] ml-[2px] sm:mx-[0] sm:px-[0] sm:w-[50%] w-[6%]">
          <Link to="/signup">
            <Button
              className="cursor-pointer font-medium min-w-[20%] text-[12px] text-center text-green-200 w-[max-content] "
              size="mdNavIcn"
              shape="RoundedBorder1"
              variant="DarkBlueBlack"
            >
              <b>Signup</b>
            </Button>
          </Link>
        </Column>
        <Column className="sm:hidden md:ml-[2px] ml-[2px] sm:mx-[0] sm:px-[0] sm:w-[50%] w-[6%]">
          <Link to="/account-info">
            <FontAwesomeIcon
              icon={faCircleUser}
              size="2x"
              className="text-dark_blueblack"
            />
          </Link>
        </Column>
      </Row>
    </header>
    /* </Sticky> */
  );
};
