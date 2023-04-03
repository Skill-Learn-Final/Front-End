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

export const Footer = ()=>{
return(
    
    <footer className="bg-light_green font-inter w-[100%]">
    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between max-w-[1280px] sm:mb-[42px] md:mb-[55px] mb-[80px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:mx-[0] mx-[auto] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
      <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%] common-column-list">
        <ul className="flex flex-col">
          <li className="w-[92%] sm:w-[100%] sm:mx-[0] sm:px-[0] flex-row flex">
            <Row className="cursor-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center">
              <Img
                src="images/logo.png"
                className="flex-shrink-0 sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[30px]"
                alt="location One"
              />
              <Text
                className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-black_900"
                as="h5"
                variant="h5"
              >
                Skill-Learn
              </Text>
            </Row>
          </li>
          <li className="w-[76%] mt-[19px] sm:mt-[10px] sm:w-[100%] md:mt-[13px] max-w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between ">
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faCartShopping} />
           </Row> 
          </li>
          <li className="w-[100%] mt-[40px] sm:mt-[21px] md:mt-[27px] flex-col flex">
            <Column className="cursor-pointer flex flex-col justify-start">
              <Text
                className="font-normal not-italic text-gray_700 w-[auto]"
                variant="body5"
              >
                ©2021 Skill-Learn.co
              </Text>
              <Text
                className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] md:mt-[10px] mt-[15px] sm:mt-[7px] not-italic text-gray_700 w-[100%]"
                variant="body5"
              >
                Skill Learn is a registered
                <br />
                trademark of Skill Learn.co
              </Text>
            </Column>
          </li>
        </ul>
      </Column>
      <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
        <Text className="text-gray_901 w-[auto]" variant="body2">
          Courses
        </Text>
        <Column className="flex flex-col justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%] common-column-list">
          <ul className="flex flex-col">
            <li className="w-[auto]">
              <Text
                className="cursor-pointer font-normal not-italic text-gray_700"
                variant="body5"
              >
                Classroom courses
              </Text>
            </li>
            <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
              <a
                href={"javascript:"}
                className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                rel="noreferrer"
              >
                Virtual classroom courses
              </a>
            </li>
            <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
              <a
                href={"javascript:"}
                className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                rel="noreferrer"
              >
                E-learning courses
              </a>
            </li>
            <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
              <a
                href={"javascript:"}
                className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                rel="noreferrer"
              >
                Video Courses
              </a>
            </li>
            <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
              <a
                href={"javascript:"}
                className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                rel="noreferrer"
              >
                Offline Courses
              </a>
            </li>
          </ul>
        </Column>
      </Column>
      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] w-[10%] sm:w-[100%]">
        <Text className="text-gray_901 w-[auto]" variant="body2">
          Community
        </Text>
        <Column className="flex flex-col justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%] common-column-list">
          <ul className="flex flex-col">
            <li className="w-[auto]">
              <Text
                className="cursor-pointer font-normal not-italic text-gray_700"
                variant="body5"
              >
                Learners
              </Text>
            </li>
            <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
              <a
                href={"javascript:"}
                className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                rel="noreferrer"
              >
                Partners
              </a>
            </li>
            <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
              <a
                href={"javascript:"}
                className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                rel="noreferrer"
              >
                Developers
              </a>
            </li>
            <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
              <a
                href={"javascript:"}
                className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                rel="noreferrer"
              >
                Transactions
              </a>
            </li>
            <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
              <a
                href={"javascript:"}
                className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                rel="noreferrer"
              >
                Blog
              </a>
            </li>
            
          </ul>
        </Column>
      </Column>
      <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
        <Text className="text-gray_901 w-[auto]" variant="body2">
          Quick links
        </Text>
        <Column className="flex flex-col justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%] common-column-list">
          <ul className="flex flex-col">
            <li className="w-[auto]">
              <Text
                className="cursor-pointer font-normal not-italic text-gray_700"
                variant="body5"
              >
                Home
              </Text>
            </li>
            <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
              <a
                href={"javascript:"}
                className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                rel="noreferrer"
              >
                Professional Education
              </a>
            </li>
            <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
              <a
                href={"javascript:"}
                className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                rel="noreferrer"
              >
                Courses
              </a>
            </li>
            <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
              <a
                href={"javascript:"}
                className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                rel="noreferrer"
              >
                Admissions
              </a>
            </li>
           
            <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
              <a
                href={"javascript:"}
                className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                rel="noreferrer"
              >
                Programs
              </a>
            </li>
          </ul>
        </Column>
      </Column>
    </Row>
  </footer>

)
};

