import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCoffee,
 faArrowDown ,
 faArrowTurnDown,
 faCartShopping,
 faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';

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
} from "components";
import { useNavigate } from "react-router-dom";
import Sticky from 'react-stickynode';

export const NavBarP = ()=>{
return(
    
    /* <Sticky bg-white_A700 enabled={true} className="w-[100%]"> */
<header className=" bg-light_green rounded-radius30 w-[100%]">
<Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1440px] ml-[auto] mr-[auto] md:p-[15px] p-[22px] sm:pl-[15px] sm:pr-[15px] sm:px-[15px] sm:py-[11px] w-[100%]">
  <Row className="header-row w-[13%] sm:w-[100%] sm:mx-[0] sm:px-[0] flex-row flex">
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
      <div>
        
      </div>
    </div>
  </Row>
  <Row className="flex flex-row md:flex-wrap sm:flex-wrap sm:hidden md:ml-[37px] ml-[54px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%] common-row-list">
  
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
   
 </Row>
  <Row className="flex flex-row md:flex-wrap sm:flex-wrap sm:hidden items-end justify-center md:ml-[37px] ml-[54px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
    <a
          href={"javascript:"}
          className="common-pointer cursor-pointer font-medium text-[20px] text-gray_901"
          onClick={()=>{}}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faCartShopping} />
        </a>
  </Row>
  <Row className="sm:hidden md:ml-[5px] ml-[5px] sm:mx-[0] sm:px-[0] sm:w-[50%] w-[6%]">
    <Button 
      className="cursor-pointer font-medium min-w-[20%] text-[12px] text-center w-[max-content]"
      size="mdNavIcn"
      variant="OutlineGray500"
      shape="RoundedBorder1"
      onClick = {(event)=> alert("dmy")}>
        <b>Login</b>
    </Button>
  </Row>
  <Row className="sm:hidden md:ml-[2px] ml-[2px] sm:mx-[0] sm:px-[0] sm:w-[50%] w-[6%]">
    <Button 
      className="cursor-pointer font-medium min-w-[20%] text-[12px] text-center text-white_A700 w-[max-content] "
      size="mdNavIcn"
      shape="RoundedBorder1"
      variant="DarkBlueBlack"
      onClick = {(event)=> alert("dmy")}>
        <b>Signup</b>
    </Button>
  </Row>
</Row>
</header>
/* </Sticky> */

)
};

