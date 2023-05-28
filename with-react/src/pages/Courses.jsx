import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  SelectBox,
  Stack,
  List,
  Button,
  Grid,
  Input,
  Slider,
  Footer,
  Subscribe,
  NavBarP,
} from "../components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faMagnifyingGlass,
  faArrowRight,
  faArrowLeft,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const Courses = () => {
  const navigate = useNavigate();

  function handleNavigate30() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate31() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate32() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate33() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate34() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate35() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate36() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate37() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate38() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate39() {
    navigate("/eduvishop");
  }
  function handleNavigate40() {
    navigate("/login");
  }
  function handleNavigate41() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate42() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate43() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate48() {
    navigate("/allmentors");
  }

  const [inputvalue, setInputvalue] = React.useState("");
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-light_green flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <NavBarP></NavBarP>
          <Column className="flex flex-col justify-start sm:mt-[26px] md:mt-[34px] mt-[50px] w-[100%]">
            <Column className="bg-very_light_green flex flex-col justify-end max-w-[1280px] md:ml-[55px] ml-[auto] mr-[auto] sm:mx-[0] md:p-[11px] sm:p-[15px] p-[17px] sm:pl-[15px] sm:pr-[15px] rounded-radius20 w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[13px] md:ml-[8px] mr-[auto] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                <Text
                  className="font-medium text-black_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body5"
                >
                  Home | Courses
                </Text>
                <Text
                  className="font-semibold leading-[50.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[34px] md:mt-[44px] mt-[65px] sm:mx-[0] text-gray_901 sm:w-[100%] w-[37%]"
                  as="h2"
                  variant="h2"
                >
                  Educatsy Courses
                  <br />
                  For All Standards
                </Text>
                <Stack className="font-airbnbcerealapp h-[233px] ml-[134px] sm:ml-[71px] md:ml-[92px] mt-[1px] relative sm:w-[100%] w-[40%]">
                  <Column className="absolute flex flex-col inset-y-[0] items-center justify-start w-[100%]">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Column className="flex flex-col items-center justify-start md:ml-[20px] ml-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                        <List
                          className="sm:gap-[1px] md:gap-[2px] gap-[3.15px] grid min-h-[auto] w-[100%]"
                          orientation="vertical"
                        >
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                          </Row>
                        </List>
                      </Column>
                      <div className="backdrop-opacity-[0.5] bg-black_900_cc blur-[90.00px] md:h-[12px] h-[16px] sm:h-[9px] sm:mt-[51px] md:mt-[66px] mt-[96px] rounded-radius2155 w-[100%]"></div>
                    </Column>
                  </Column>
                  <Img
                    src="images/img_image_233X416.png"
                    className="absolute h-[233px] left-[3%] max-w-[100%] right-[1%] sm:w-[100%] w-[97%]"
                    alt="Image"
                  />
                </Stack>
              </Row>
            </Column>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1280px] md:ml-[55px] ml-[auto] mr-[auto] sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] rounded-radius10 w-[100%]">
              <Button
                className="cursor-pointer font-medium min-w-[12%] text-[16px] text-center text-gray_901 w-[max-content]"
                size="lg"
                variant="FillWhiteA700"
              >
                All Courses
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[12%] sm:ml-[10px] md:ml-[13px] ml-[20px] text-[16px] text-center text-gray_901 w-[max-content]"
                size="lg"
                variant="FillWhiteA700"
              >
                category 1
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[12%] sm:ml-[10px] md:ml-[13px] ml-[20px] text-[16px] text-center text-gray_901 w-[max-content]"
                size="lg"
                variant="FillWhiteA700"
              >
                Category 2
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[10%] sm:ml-[10px] md:ml-[13px] ml-[20px] text-[16px] text-center text-gray_901 w-[max-content]"
                size="lg"
                variant="FillWhiteA700"
              >
                Category 3
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[11%] sm:ml-[10px] md:ml-[13px] ml-[20px] text-[16px] text-center text-gray_901 w-[max-content]"
                size="lg"
                variant="FillWhiteA700"
              >
                Categotry 4
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[10%] sm:ml-[10px] md:ml-[13px] ml-[20px] text-[16px] text-center text-gray_901 w-[max-content]"
                size="lg"
                variant="FillWhiteA700"
              >
                Category 5
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[12%] sm:ml-[10px] md:ml-[13px] ml-[20px] text-[16px] text-center text-gray_901 w-[max-content]"
                size="lg"
                variant="FillWhiteA700"
              >
                category 6
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[12%] sm:ml-[10px] md:ml-[13px] ml-[20px] text-[16px] text-center text-gray_901 w-[max-content]"
                size="lg"
                variant="FillWhiteA700"
              >
                category 7
              </Button>
            </Row>
            <Column
              className="common-pointer flex flex-col justify-start max-w-[1280px] md:ml-[55px] ml-[auto] mr-[auto] sm:mt-[26px] md:mt-[34px] mt-[50px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]"
              onClick={handleNavigate34}
            >
              <Text
                className="font-semibold text-gray_901 w-[auto]"
                as="h4"
                variant="h4"
              >
                Your Courses
              </Text>
              <Column className="flex flex-col items-center justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                <Grid className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] w-[100%]">
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-center md:p-[10px] p-[15px] sm:p-[7px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_download.svg"
                      className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="download"
                    />
                    <Text
                      className="sm:mt-[10px] md:mt-[13px] mt-[20px] text-gray_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard One
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 1 is a foundation Standard that reflects 7
                      important concepts...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={handleNavigate42}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-center md:p-[10px] p-[15px] sm:p-[7px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_download_50X50.svg"
                      className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="download One"
                    />
                    <Text
                      className="sm:mt-[10px] md:mt-[13px] mt-[20px] text-gray_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard Two
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 2 builds on the foundations of Standard 1 and
                      includes requirements...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={handleNavigate43}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-center md:p-[10px] p-[15px] sm:p-[7px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_whatsapp.svg"
                      className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="whatsapp"
                    />
                    <Text
                      className="sm:mt-[10px] md:mt-[13px] mt-[20px] text-gray_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard Three
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 3 of the Aged Care Quality Standards applies to
                      all services delivering personal...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-white_A700 w-[max-content]"
                      onClick={handleNavigate41}
                      shape="RoundedBorder5"
                      size="sm"
                    >
                      Class Details
                    </Button>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-center md:p-[10px] p-[15px] sm:p-[7px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_rewind.svg"
                      className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="rewind"
                    />
                    <Text
                      className="sm:mt-[10px] md:mt-[13px] mt-[20px] text-gray_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard Four
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 4 of the Aged Care Quality Standards focuses on
                      services and supports...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={handleNavigate35}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-center md:p-[10px] p-[15px] sm:p-[7px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_music.svg"
                      className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="music"
                    />
                    <Text
                      className="sm:mt-[10px] md:mt-[13px] mt-[20px] text-gray_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard Five
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 5 Learning Resources. Learning Resources ensure
                      that the school has the...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={handleNavigate31}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-center md:p-[10px] p-[15px] sm:p-[7px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_volume_50X50.svg"
                      className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="volume"
                    />
                    <Text
                      className="sm:mt-[10px] md:mt-[13px] mt-[20px] text-gray_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard Six
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 6 requires an organisation to have a system to
                      resolve complaints...
                    </Text>
                    <Button
                      className="cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-center md:p-[10px] p-[15px] sm:p-[7px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_arrowdown.svg"
                      className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="arrowdown One"
                    />
                    <Text
                      className="sm:mt-[10px] md:mt-[13px] mt-[20px] text-gray_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard Seven
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 7 Blood Management mandates that leaders of
                      health service organizations...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={handleNavigate32}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-center md:p-[10px] p-[15px] sm:p-[7px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_info.svg"
                      className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="info"
                    />
                    <Text
                      className="sm:mt-[10px] md:mt-[13px] mt-[20px] text-gray_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard Eight
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 8 Course from NCERT Solutions help students to
                      understand...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={handleNavigate33}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-center md:p-[10px] p-[15px] sm:p-[7px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_volume_1.svg"
                      className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="volume One"
                    />
                    <Text
                      className="sm:mt-[10px] md:mt-[13px] mt-[20px] text-gray_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard Nine
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 5 Learning Resources. Learning Resources ensure
                      that the school has the...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={handleNavigate36}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-center md:p-[10px] p-[15px] sm:p-[7px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_group.svg"
                      className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="Group"
                    />
                    <Text
                      className="sm:mt-[10px] md:mt-[13px] mt-[20px] text-gray_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      O- Level
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 6 requires an organisation to have a system to
                      resolve complaints...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={handleNavigate38}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-center md:p-[10px] p-[15px] sm:p-[7px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_arrowup.svg"
                      className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="arrowup"
                    />
                    <Text
                      className="sm:mt-[10px] md:mt-[13px] mt-[20px] text-gray_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      A- Level
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 6 requires an organisation to have a system to
                      resolve complaints...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={handleNavigate37}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </Column>
                </Grid>
              </Column>
            </Column>

            <Footer></Footer>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default Courses;
