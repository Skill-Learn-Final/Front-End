import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  SelectBox,
  NavBarP,
  Button,
  List,
  Grid,
  Input,
  Footer,
  Rating,
} from "components";
import { useNavigate } from "react-router-dom";
import Accordion from "components/Accordion";

const CourseDetail = () => {
  const navigate = useNavigate();

  function handleNavigate6() {
    navigate("/allmentors");
  }
  function handleNavigate7() {
    navigate("/eduvicourses");
  }
  function handleNavigate8() {
    navigate("/eduvishop");
  }
  function handleNavigate9() {
    navigate("/login");
  }
  function handleNavigate10() {
    navigate("/eduvicoursespricing");
  }

  return (
    <>
      <Column className="bg-light_green flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <NavBarP></NavBarP>
          <Column className="flex flex-col items-center justify-start sm:mt-[26px] md:mt-[34px] mt-[50px] w-[100%]">
            <Row className="bg-very_light_green flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1280px] ml-[auto] mr-[auto] sm:mx-[0] sm:p-[15px] md:p-[17px] p-[25px] sm:pl-[15px] sm:pr-[15px] rounded-radius20 w-[100%]">
              <Column className="flex flex-col justify-start md:ml-[3px] ml-[5px] sm:mx-[0] my-[4px] sm:px-[0] sm:w-[100%] w-[63%]">
                <Text
                  className="font-medium text-black_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body5"
                >
                  Home | Courses | Course Details
                </Text>
                <Column className="flex flex-col justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-start md:p-[135px] sm:p-[15px] p-[197px] rounded-radius20 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group7667.png')",
                    }}
                  >
                    <Button
                      className="flex sm:h-[32px] md:h-[42px] h-[60px] items-center justify-center mb-[1px] rounded-radius50 sm:w-[31px] md:w-[41px] w-[60px]"
                      size="2xlIcn"
                      variant="icbFillRed300"
                    >
                      <Img
                        src="images/img_play.svg"
                        className="h-[16px] sm:h-[9px] md:h-[12px] flex items-center justify-center"
                        alt="play"
                      />
                    </Button>
                  </Column>
                  <Text
                    className="sm:mt-[15px] md:mt-[19px] mt-[29px] text-black_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Maths - for Standard 3 Students | Episode 2
                  </Text>
                </Column>
              </Column>
              <Column className="flex flex-col justify-start md:ml-[46px] ml-[68px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                <Text className="text-black_900 w-[auto]" as="h5" variant="h5">
                  Course Playlists
                </Text>
                <Column
                  style={{ backgroundColor: "black", minHeight: "500px" }}
                  className="flex flex-col items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]"
                >
                  <Accordion></Accordion>
                  {/* <List
                    className="md:gap-[11px] gap-[16px] sm:gap-[8px] grid min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-row flex-row md:flex-wrap sm:flex-wrap items-center hover:my-[0] my-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius10 hover:shadow-bs1 w-[100%]">
                      <Img
                        src="images/img_image_50X80.png"
                        className="max-w-[100%] rounded-radius5 w-[23%]"
                        alt="Image"
                      />
                      <Column className="flex flex-col ml-[10px] md:ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                        <Text
                          className="font-semibold text-black_900 w-[auto]"
                          variant="body4"
                        >
                          Maths - Introduction
                        </Text>
                        <Text
                          className="mt-[3px] text-deep_orange_400 w-[auto]"
                          variant="body6"
                        >
                          1:57
                        </Text>
                      </Column>
                    </Row>
                    <Row className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-row flex-row md:flex-wrap sm:flex-wrap items-center hover:my-[0] my-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius10 hover:shadow-bs1 w-[100%]">
                      <Img
                        src="images/img_image_50X80.png"
                        className="max-w-[100%] rounded-radius5 w-[23%]"
                        alt="Image One"
                      />
                      <Column className="flex flex-col ml-[10px] md:ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                        <Text
                          className="font-semibold text-black_900 w-[auto]"
                          variant="body4"
                        >
                          Maths - for Standard 3 St..
                        </Text>
                        <Text
                          className="mt-[3px] text-deep_orange_400 w-[auto]"
                          variant="body6"
                        >
                          5:43
                        </Text>
                      </Column>
                    </Row>
                    <Row className="bg-white_A700_87 hover:cursor-pointer hover:flex flex hover:flex-row flex-row md:flex-wrap sm:flex-wrap items-center hover:my-[0] my-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius10 hover:shadow-bs1 w-[100%]">
                      <Column
                        className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] md:p-[11px] sm:p-[15px] p-[16px] rounded-radius5 sm:w-[100%] w-[23%]"
                        style={{
                          backgroundImage: "url('images/img_image_50X80.png')",
                        }}
                      >
                        <Button
                          className="flex sm:h-[10px] md:h-[13px] h-[18px] items-center justify-center rounded-radius50 md:w-[12px] w-[18px] sm:w-[9px]"
                          size="smIcn"
                          variant="icbFillWhiteA700"
                        >
                          <Img
                            src="images/img_lock_18X18.svg"
                            className="h-[10px] sm:h-[6px] md:h-[7px] flex items-center justify-center"
                            alt="lock"
                          />
                        </Button>
                      </Column>
                      <Column className="flex flex-col ml-[10px] md:ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                        <Text
                          className="font-semibold text-black_900_87 w-[auto]"
                          variant="body4"
                        >
                          Maths - for Standard 3 St..
                        </Text>
                        <Text
                          className="mt-[3px] text-deep_orange_400_87 w-[auto]"
                          variant="body6"
                        >
                          8:11
                        </Text>
                      </Column>
                    </Row>
                    <Row className="bg-white_A700_87 hover:cursor-pointer hover:flex flex hover:flex-row flex-row md:flex-wrap sm:flex-wrap items-center hover:my-[0] my-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius10 hover:shadow-bs1 w-[100%]">
                      <Column
                        className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] md:p-[11px] sm:p-[15px] p-[16px] rounded-radius5 sm:w-[100%] w-[23%]"
                        style={{
                          backgroundImage: "url('images/img_image_50X80.png')",
                        }}
                      >
                        <Button
                          className="flex sm:h-[10px] md:h-[13px] h-[18px] items-center justify-center rounded-radius50 md:w-[12px] w-[18px] sm:w-[9px]"
                          size="smIcn"
                          variant="icbFillWhiteA700"
                        >
                          <Img
                            src="images/img_lock_18X18.svg"
                            className="h-[10px] sm:h-[6px] md:h-[7px] flex items-center justify-center"
                            alt="lock One"
                          />
                        </Button>
                      </Column>
                      <Column className="flex flex-col ml-[10px] md:ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                        <Text
                          className="font-semibold text-black_900_87 w-[auto]"
                          variant="body4"
                        >
                          Maths - for Standard 3 St..
                        </Text>
                        <Text
                          className="mt-[3px] text-deep_orange_400_87 w-[auto]"
                          variant="body6"
                        >
                          6:10
                        </Text>
                      </Column>
                    </Row>
                    <Row className="bg-white_A700_87 hover:cursor-pointer hover:flex flex hover:flex-row flex-row md:flex-wrap sm:flex-wrap items-center hover:my-[0] my-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius10 hover:shadow-bs1 w-[100%]">
                      <Column
                        className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] md:p-[11px] sm:p-[15px] p-[16px] rounded-radius5 sm:w-[100%] w-[23%]"
                        style={{
                          backgroundImage: "url('images/img_image_50X80.png')",
                        }}
                      >
                        <Button
                          className="flex sm:h-[10px] md:h-[13px] h-[18px] items-center justify-center rounded-radius50 md:w-[12px] w-[18px] sm:w-[9px]"
                          size="smIcn"
                          variant="icbFillWhiteA700"
                        >
                          <Img
                            src="images/img_lock_18X18.svg"
                            className="h-[10px] sm:h-[6px] md:h-[7px] flex items-center justify-center"
                            alt="lock Two"
                          />
                        </Button>
                      </Column>
                      <Column className="flex flex-col ml-[10px] md:ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                        <Text
                          className="font-semibold text-black_900_87 w-[auto]"
                          variant="body4"
                        >
                          Maths - for Standard 3 St..
                        </Text>
                        <Text
                          className="mt-[3px] text-deep_orange_400_87 w-[auto]"
                          variant="body6"
                        >
                          10:00
                        </Text>
                      </Column>
                    </Row>
                    <Row className="bg-white_A700_87 hover:cursor-pointer hover:flex flex hover:flex-row flex-row md:flex-wrap sm:flex-wrap items-center hover:my-[0] my-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius10 hover:shadow-bs1 w-[100%]">
                      <Column
                        className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] md:p-[11px] sm:p-[15px] p-[16px] rounded-radius5 sm:w-[100%] w-[23%]"
                        style={{
                          backgroundImage: "url('images/img_image_50X80.png')",
                        }}
                      >
                        <Button
                          className="flex sm:h-[10px] md:h-[13px] h-[18px] items-center justify-center rounded-radius50 md:w-[12px] w-[18px] sm:w-[9px]"
                          size="smIcn"
                          variant="icbFillWhiteA700"
                        >
                          <Img
                            src="images/img_lock_18X18.svg"
                            className="h-[10px] sm:h-[6px] md:h-[7px] flex items-center justify-center"
                            alt="lock Three"
                          />
                        </Button>
                      </Column>
                      <Column className="flex flex-col ml-[10px] md:ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                        <Text
                          className="font-semibold text-black_900_87 w-[auto]"
                          variant="body4"
                        >
                          Maths - for Standard 3 St..
                        </Text>
                        <Text
                          className="mt-[3px] text-deep_orange_400_87 w-[auto]"
                          variant="body6"
                        >
                          7:53
                        </Text>
                      </Column>
                    </Row>
                  </List> */}
                </Column>
              </Column>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1280px] ml-[auto] mr-[auto] sm:mt-[37px] md:mt-[48px] mt-[70px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="font-semibold text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Course Details
                  </Text>
                  <Text
                    className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-gray_700 w-[100%]"
                    variant="body5"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                  </Text>
                </Column>
                <Column className="flex flex-col justify-start sm:mt-[13px] md:mt-[17px] mt-[25px] w-[100%]">
                  <Text
                    className="font-semibold text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Certification
                  </Text>
                  <Text
                    className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-gray_700 w-[100%]"
                    variant="body5"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                  </Text>
                </Column>
                <Column className="flex flex-col justify-start sm:mt-[13px] md:mt-[17px] mt-[25px] w-[100%]">
                  <Text
                    className="font-semibold text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Who this course is for
                  </Text>
                  <Text
                    className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-gray_700 w-[100%]"
                    variant="body5"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                  </Text>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:pb-[2px] md:pb-[3px] pb-[5px] sm:px-[0] sm:w-[100%] w-[54%]">
                  <Text
                    className="font-semibold text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    What you'll learn in this course:
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[11px] mt-[17px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                    <div className="bg-deep_orange_400 h-[10px] sm:h-[6px] md:h-[7px] mb-[4px] mt-[1px] rounded-radius50 w-[10px] sm:w-[5px] md:w-[6px]"></div>
                    <Text
                      className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-black_900 w-[auto]"
                      variant="body5"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                    <div className="bg-deep_orange_400 h-[10px] sm:h-[6px] md:h-[7px] mb-[4px] mt-[1px] rounded-radius50 w-[10px] sm:w-[5px] md:w-[6px]"></div>
                    <Text
                      className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-black_900 w-[auto]"
                      variant="body5"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                    <div className="bg-deep_orange_400 h-[10px] sm:h-[6px] md:h-[7px] mb-[4px] mt-[1px] rounded-radius50 w-[10px] sm:w-[5px] md:w-[6px]"></div>
                    <Text
                      className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-black_900 w-[auto]"
                      variant="body5"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                    <div className="bg-deep_orange_400 h-[10px] sm:h-[6px] md:h-[7px] mb-[4px] mt-[1px] rounded-radius50 w-[10px] sm:w-[5px] md:w-[6px]"></div>
                    <Text
                      className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-black_900 w-[auto]"
                      variant="body5"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                    <div className="bg-deep_orange_400 h-[10px] sm:h-[6px] md:h-[7px] mb-[4px] mt-[1px] rounded-radius50 w-[10px] sm:w-[5px] md:w-[6px]"></div>
                    <Text
                      className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-black_900 w-[auto]"
                      variant="body5"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="flex flex-col items-center justify-start md:ml-[27px] ml-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                <Column className="bg-white_A700 flex flex-col items-center justify-center md:p-[13px] sm:p-[15px] p-[20px] rounded-radius10 w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[5px] md:mt-[6px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-semibold text-gray_700 w-[auto]"
                      variant="body3"
                    >
                      Price
                    </Text>
                    <Text
                      className="text-deep_orange_400 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $49.00
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-semibold text-gray_700 w-[auto]"
                      variant="body3"
                    >
                      Instructor
                    </Text>
                    <a
                      href={"javascript:"}
                      className="font-semibold text-[20px] text-black_900 underline w-[auto]"
                      rel="noreferrer"
                    >
                      Wade Warren
                    </a>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[11px] md:mt-[14px] mt-[21px] sm:px-[0] w-[100%]">
                    <Text
                      className="flex-grow font-semibold text-gray_700"
                      variant="body3"
                    >
                      Ratings
                    </Text>
                    <Img
                      src="images/img_mobile.svg"
                      className="flex-shrink-0 max-w-[100%] mt-[2px] w-[26%]"
                      alt="mobile"
                    />
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[14px] mt-[21px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-semibold text-gray_700 w-[auto]"
                      variant="body3"
                    >
                      Durations
                    </Text>
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body3"
                    >
                      10 Days
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[14px] mt-[21px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-semibold text-gray_700 w-[auto]"
                      variant="body3"
                    >
                      Lessons
                    </Text>
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body3"
                    >
                      30
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[14px] mt-[21px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-semibold text-gray_700 w-[auto]"
                      variant="body3"
                    >
                      Quizzes
                    </Text>
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body3"
                    >
                      5
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[14px] mt-[21px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-semibold text-gray_700 w-[auto]"
                      variant="body3"
                    >
                      Certificate
                    </Text>
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body3"
                    >
                      Yes
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[14px] mt-[21px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-semibold text-gray_700 w-[auto]"
                      variant="body3"
                    >
                      Language
                    </Text>
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body3"
                    >
                      English
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mb-[3px] md:mb-[4px] mb-[6px] sm:mt-[11px] md:mt-[14px] mt-[21px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-semibold text-gray_700 w-[auto]"
                      variant="body3"
                    >
                      Access
                    </Text>
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body3"
                    >
                      Lifetime
                    </Text>
                  </Row>
                </Column>
                <Button
                  className="common-pointer cursor-pointer font-medium sm:mt-[10px] md:mt-[13px] mt-[20px] text-[18px] text-center text-white_A700 w-[100%]"
                  onClick={handleNavigate10}
                  shape="RoundedBorder5"
                  size="lg"
                  variant="DarkBlueBlack"
                >
                  Purchase Course
                </Button>
              </Column>
            </Row>
            <Column className="flex flex-col font-metropolis justify-start max-w-[1280px] ml-[auto] mr-[auto] md:mt-[103px] mt-[150px] sm:mt-[79px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Text
                className="font-bold text-gray_901 w-[auto]"
                as="h2"
                variant="h2"
              >
                Similar Courses
              </Text>
              <Column className="flex flex-col font-inter items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                <Grid className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[100%]">
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-start md:p-[10px] p-[15px] sm:p-[7px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_image_6.png"
                        className="max-w-[100%] rounded-radius10 w-[28%]"
                        alt="Image Two"
                      />
                      <Column className="flex flex-col justify-start sm:mb-[3px] md:mb-[4px] mb-[6px] md:ml-[10px] ml-[15px] sm:mt-[4px] md:mt-[6px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                        <Text
                          className="text-gray_901 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          The Three Musketeers
                        </Text>
                        <Img
                          src="images/img_star_amber_500.svg"
                          className="max-w-[100%] mt-[10px] sm:mt-[5px] md:mt-[6px] sm:w-[100%] w-[43%]"
                          alt="star"
                        />
                        <Text
                          className="mt-[13px] sm:mt-[6px] md:mt-[8px] text-deep_orange_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          $40.00
                        </Text>
                      </Column>
                      <Button
                        className="flex sm:h-[24px] md:h-[31px] h-[44px] items-center justify-center sm:mb-[2px] md:mb-[3px] mb-[5px] ml-[104px] sm:ml-[55px] md:ml-[71px] sm:mt-[28px] md:mt-[37px] mt-[54px] sm:w-[23px] md:w-[30px] w-[44px]"
                        shape="icbRoundedBorder6"
                        size="mdIcn"
                        variant="icbFillRed300"
                      >
                        <Img
                          src="images/img_lock_44X44.svg"
                          className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                          alt="lock Four"
                        />
                      </Button>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-start md:p-[10px] p-[15px] sm:p-[7px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_image_4.png"
                        className="max-w-[100%] rounded-radius10 w-[28%]"
                        alt="Image Four"
                      />
                      <Column className="flex flex-col justify-start sm:mb-[3px] md:mb-[4px] mb-[6px] md:ml-[10px] ml-[15px] sm:mt-[4px] md:mt-[6px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                        <Text
                          className="text-gray_901 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          The Three Musketeers
                        </Text>
                        <div className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center">
                          <Rating value={3} />
                        </div>
                        <Text
                          className="mt-[13px] sm:mt-[6px] md:mt-[8px] text-deep_orange_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          $40.00
                        </Text>
                      </Column>
                      <Button
                        className="flex sm:h-[24px] md:h-[31px] h-[44px] items-center justify-center sm:mb-[2px] md:mb-[3px] mb-[5px] ml-[104px] sm:ml-[55px] md:ml-[71px] sm:mt-[28px] md:mt-[37px] mt-[54px] sm:w-[23px] md:w-[30px] w-[44px]"
                        shape="icbRoundedBorder6"
                        size="mdIcn"
                        variant="icbFillRed53"
                      >
                        <Img
                          src="images/img_bag.svg"
                          className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                          alt="bag One"
                        />
                      </Button>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-start md:p-[10px] p-[15px] sm:p-[7px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_image_5.png"
                        className="max-w-[100%] rounded-radius10 w-[28%]"
                        alt="Image Six"
                      />
                      <Column className="flex flex-col justify-start sm:mb-[3px] md:mb-[4px] mb-[6px] md:ml-[10px] ml-[15px] sm:mt-[4px] md:mt-[6px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                        <Text
                          className="text-gray_901 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          The Three Musketeers
                        </Text>
                        <div>
                          <Rating value={3} />
                        </div>
                        <Text
                          className="mt-[13px] sm:mt-[6px] md:mt-[8px] text-deep_orange_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          $40.00
                        </Text>
                      </Column>
                      <Button
                        className="flex sm:h-[24px] md:h-[31px] h-[44px] items-center justify-center sm:mb-[2px] md:mb-[3px] mb-[5px] ml-[104px] sm:ml-[55px] md:ml-[71px] sm:mt-[28px] md:mt-[37px] mt-[54px] sm:w-[23px] md:w-[30px] w-[44px]"
                        shape="icbRoundedBorder6"
                        size="mdIcn"
                        variant="icbFillRed53"
                      >
                        <Img
                          src="images/img_bag.svg"
                          className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                          alt="bag Two"
                        />
                      </Button>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-start md:p-[10px] p-[15px] sm:p-[7px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_image_7.png"
                        className="max-w-[100%] rounded-radius10 w-[28%]"
                        alt="Image Eight"
                      />
                      <Column className="flex flex-col justify-start sm:mb-[3px] md:mb-[4px] mb-[6px] md:ml-[10px] ml-[15px] sm:mt-[4px] md:mt-[6px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                        <Text
                          className="text-gray_901 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          The Three Musketeers
                        </Text>
                        <div>
                          <Rating value={3} />
                        </div>
                        <Text
                          className="mt-[13px] sm:mt-[6px] md:mt-[8px] text-deep_orange_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          $40.00
                        </Text>
                      </Column>
                      <Button
                        className="flex sm:h-[24px] md:h-[31px] h-[44px] items-center justify-center sm:mb-[2px] md:mb-[3px] mb-[5px] ml-[104px] sm:ml-[55px] md:ml-[71px] sm:mt-[28px] md:mt-[37px] mt-[54px] sm:w-[23px] md:w-[30px] w-[44px]"
                        shape="icbRoundedBorder6"
                        size="mdIcn"
                        variant="icbFillRed53"
                      >
                        <Img
                          src="images/img_bag.svg"
                          className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                          alt="bag Three"
                        />
                      </Button>
                    </Row>
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

export default CourseDetail;
