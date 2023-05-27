import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faArrowDown,
  faArrowTurnDown,
  faCartShopping,
  faMagnifyingGlass,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

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
} from "./";
import { useNavigate } from "react-router-dom";
import Sticky from "react-stickynode";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="font-inter w-[100%]">
      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-around max-w-[auto] sm:mb-[42px] md:mb-[55px] mb-[80px] ml-[auto] mr-[auto] pt-8 sm:mt-[53px] md:mt-[68px] sm:mx-[0] mx-[auto] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
        <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%] common-column-list">
          <ul className="flex flex-col">
            <li className="w-[92%] sm:w-[100%] sm:mx-[0] sm:px-[0] flex-row flex">
              <Row className="cursor-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center">
                <Img
                  src="/images/logo.png"
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
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faEnvelope} />
              </Row>
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
                  className="cursor-pointer font-normal not-italic text-white"
                  variant="body5"
                >
                  Classroom courses
                </Text>
              </li>
              <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                <a
                  href={""}
                  className="cursor-pointer font-normal not-italic text-[16px] text-white"
                  rel="noreferrer"
                >
                  Virtual classroom courses
                </a>
              </li>
              <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                <a
                  href={""}
                  className="cursor-pointer font-normal not-italic text-[16px] text-white"
                  rel="noreferrer"
                >
                  E-learning courses
                </a>
              </li>
              <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                <a
                  href={""}
                  className="cursor-pointer font-normal not-italic text-[16px] text-white"
                  rel="noreferrer"
                >
                  Video Courses
                </a>
              </li>
              <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                <a
                  href={""}
                  className="cursor-pointer font-normal not-italic text-[16px] text-white"
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
                  className="cursor-pointer font-normal not-italic text-white"
                  variant="body5"
                >
                  Learners
                </Text>
              </li>
              <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                <a
                  href={""}
                  className="cursor-pointer font-normal not-italic text-[16px] text-white"
                  rel="noreferrer"
                >
                  Partners
                </a>
              </li>
              <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                <a
                  href={""}
                  className="cursor-pointer font-normal not-italic text-[16px] text-white"
                  rel="noreferrer"
                >
                  Developers
                </a>
              </li>
              <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                <a
                  href={""}
                  className="cursor-pointer font-normal not-italic text-[16px] text-white"
                  rel="noreferrer"
                >
                  Transactions
                </a>
              </li>
              <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                <a
                  href={""}
                  className="cursor-pointer font-normal not-italic text-[16px] text-white"
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
                  className="cursor-pointer font-normal not-italic text-white"
                  variant="body5"
                >
                  Home
                </Text>
              </li>
              <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                <a
                  href={""}
                  className="cursor-pointer font-normal not-italic text-[16px] text-white"
                  rel="noreferrer"
                >
                  Professional Education
                </a>
              </li>
              <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                <a
                  href={""}
                  className="cursor-pointer font-normal not-italic text-[16px] text-white"
                  rel="noreferrer"
                >
                  Courses
                </a>
              </li>
              <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                <a
                  href={""}
                  className="cursor-pointer font-normal not-italic text-[16px] text-white"
                  rel="noreferrer"
                >
                  Admissions
                </a>
              </li>

              <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                <a
                  href={""}
                  className="cursor-pointer font-normal not-italic text-[16px] text-white"
                  rel="noreferrer"
                >
                  Programs
                </a>
              </li>
            </ul>
          </Column>
        </Column>
      </Row>
      <div>
        <div className="mt-[-10px] bg-white h-[1px]"></div>
      </div>
      <div className="flex flex-row w-[100%] text-center justify-center sm:mt-[21px] md:mt-[27px] p-[10px]">
        <Text
          className="font-normal not-italic text-white w-[auto]"
          variant="body5"
        >
          {`Copyright © ${new Date().getFullYear().toString()} Skill-Learn.co`}
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
