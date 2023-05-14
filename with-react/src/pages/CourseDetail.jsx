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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faChartBar,
  faChartSimple,
  faClock,
  faLanguage,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

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
          <Column className="flex flex-col items-center justify-start sm:mt-[26px] md:mt-[34px] mt-[50px] w-[100%]">
            <Row className="bg-very_light_green flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[auto] ml-[auto] mr-[auto] sm:mx-[0] sm:p-[15px] md:p-[17px] p-[25px] sm:pl-[15px] sm:pr-[15px] rounded-radius20 w-[90%]">
              <Column className="flex flex-col justify-start md:ml-[3px] ml-[5px] sm:mx-[0] my-[4px] sm:px-[0] sm:w-[100%] w-[63%]">
                <Column className="flex flex-col justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-start md:p-[135px] sm:p-[15px] p-[197px] rounded-radius20 w-[100%]"
                    style={{
                      backgroundColor: "white",
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
                  Chapters
                </Text>
                <Column
                  style={{ backgroundColor: "#3330", minHeight: "500px" }}
                  className="flex flex-col items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] p-[1rem] w-[100%]"
                >
                  <Accordion></Accordion>
                </Column>
              </Column>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[auto] ml-[auto] mr-[auto] sm:mt-[37px] md:mt-[48px] mt-[70px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] px-[5rem] py-[2rem] w-[100%]">
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                <Column className="flex flex-col justify-start w-[100%] courseDetailsDescription">
                  <Text
                    className="font-semibold text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    About the Course
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
                <Column className="flex flex-row justify-between justify-start sm:mt-[13px] md:mt-[17px] mt-[25px] w-[100%] courseDetailsCards">
                  <div className="flex flex-col text-center courseDetailsCard">
                    <FontAwesomeIcon icon={faChartSimple} size="2x" />
                    <p>All Levels</p>
                  </div>
                  <div className="flex flex-col text-center courseDetailsCard">
                    <FontAwesomeIcon icon={faCertificate} size="2x" />
                    <p> Certificate:X</p>
                  </div>
                  <div className="flex flex-col text-center courseDetailsCard">
                    <FontAwesomeIcon icon={faClock} size="2x" />
                    <p>10 Days</p>
                  </div>
                  <div className="flex flex-col text-center courseDetailsCard">
                    <FontAwesomeIcon icon={faLanguage} size="2x" />
                    <p>English</p>
                  </div>
                  <div className="flex flex-col text-center courseDetailsCard">
                    <FontAwesomeIcon icon={faStar} size="2x" />
                    <p>Avg. Rating</p>
                  </div>
                </Column>
                <Column className="flex flex-col justify-start w-[100%] courseDetailsWhatYoullLearn">
                  <Text
                    className="font-semibold text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    What You'll Learn
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
                <Column className="flex flex-col justify-start w-[100%] mt-[25px] courseDetailsWhatYoullLearn">
                  <Text
                    className="font-semibold text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Meet your Teacher
                  </Text>
                  <span className="mt-[10px]">
                    <FontAwesomeIcon
                      icon={faUser}
                      size="2x"
                      className="m-[1rem]"
                    />
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis
                      consectetur adipiscing elit.
                      <br />
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis
                      consectetur adipiscing elit.
                    </Text>
                  </span>
                </Column>
              </Column>
              {/* <Column className="flex flex-col items-center justify-start md:ml-[27px] ml-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
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
              </Column> */}
            </Row>
            {/* <Column className="flex flex-col font-metropolis justify-start max-w-[1280px] ml-[auto] mr-[auto] md:mt-[103px] mt-[150px] sm:mt-[79px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
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
            </Column> */}
            <Footer></Footer>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default CourseDetail;
