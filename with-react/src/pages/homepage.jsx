import React from "react";

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
  NavBarP,
  PlusSigns,
  Footer,
} from "../components";
import { useNavigate } from "react-router-dom";

const Home1Page = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/eduvicourses");
  }
  function handleNavigate1() {
    navigate("/eduvicourses");
  }
  function handleNavigate2() {
    navigate("/allmentors");
  }
  function handleNavigate3() {
    navigate("/eduvicourses");
  }
  function handleNavigate4() {
    navigate("/eduvishop");
  }
  function handleNavigate5() {
    navigate("/login");
  }
  function handleNavigate11() {
    navigate("/eduvijoinasteacher");
  }

  return (
    <>
      <Column className="bg-light_green flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <NavBarP />

        <Column className="flex flex-col items-center justify-start sm:mt-[28px] md:mt-[37px] mt-[54px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1317px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
              <Button
                className="cursor-pointer font-medium min-w-[40%] text-[20px] text-center text-navy_blue w-[max-content]"
                size="sm"
                variant="FillWhiteA700"
              >
                Never Stop Learning
              </Button>
              <Column className="flex flex-col items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
                <Text
                  className="leading-[75.00px] md:leading-[normal] sm:leading-[normal] text-gray_901 w-[100%]"
                  as="h1"
                  variant="h1"
                >
                  Grow up your skills
                  <br />
                  by online courses
                  <br />
                  with Skill-Learn
                </Text>
                <Text
                  className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] not-italic text-gray_700 w-[100%]"
                  variant="body5"
                >
                  Skill-Learn aims to provide a platform where individuals can
                  share their skills online and get fairly compensated. We
                  believe that everyone has something valuable to offer, and our
                  platform offers a supportive and collaborative environment
                  where users can connect, learn from others.
                </Text>
              </Column>
            </Column>
            <Img
              src="images/img_image.png"
              className="max-w-[100%] sm:ml-[22px] md:ml-[28px] ml-[42px] sm:w-[100%] w-[51%] rounded-radius20"
              alt="image"
            />
          </Row>
          <Stack className="font-airbnbcerealapp h-[1120px] max-w-[1098px] ml-[auto] mr-[auto] md:mt-[103px] mt-[150px] sm:mt-[79px] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
            <Stack className="absolute h-[465px] right-[0] top-[0] sm:w-[100%] w-[90%]">
              <Column className="absolute flex flex-col items-center justify-start left-[0] sm:mx-[0] sm:px-[0] rounded-radius10 top-[0] sm:w-[100%] w-[86%]">
                <Text
                  className="font-bold font-metropolis leading-[55.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-center text-gray_901 sm:w-[100%] w-[67%]"
                  as="h2"
                  variant="h2"
                >
                  High quality video, audio
                  <br />& live classes
                </Text>
                <Text
                  className="font-inter font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[10px] md:mt-[13px] mt-[20px] not-italic text-center text-gray_700 w-[100%]"
                  variant="body5"
                >
                  At Skill-Learn, we take great pride in the quality and
                  relevance of the videos on our platform. Our courses are
                  created by experts in their fields and are designed to be
                  engaging, informative, and practical. Our commitment to
                  providing high-quality content ensures that you will get the
                  most out of your learning experience and be able to apply your
                  new skills to your personal or professional life.
                  <br />
                  Join our platform today and start your journey towards
                  personal and professional growth!
                </Text>
                <Button
                  className="common-pointer cursor-pointer font-inter font-medium min-w-[20%] sm:mt-[21px] md:mt-[27px] mt-[40px] text-[16px] text-center text-white_A700 w-[max-content]"
                  variant="DarkBlueBlack"
                  onClick={handleNavigate1}
                  size="lg"
                >
                  Visit Courses
                </Button>
              </Column>
              <PlusSigns></PlusSigns>
            </Stack>
            <Column className="absolute bottom-[0] flex flex-col font-inter inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[97%]">
              <Column
                className="bg-cover bg-no-repeat flex flex-col items-center justify-end sm:mx-[0] sm:p-[15px] md:p-[20px] p-[30px] rounded-radius16 sm:w-[100%] w-[95%]"
                style={{ backgroundImage: "url('images/img_group7626.png')" }}
              >
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[141px] md:mt-[182px] mt-[265px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                  <Img
                    src="images/img_portraitlittle.png"
                    className="max-w-[100%] rounded-radius16 w-[23%]"
                    alt="portraitlittle"
                  />
                </Row>
              </Column>
              <List
                className="sm:gap-[15px] md:gap-[20px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:mt-[31px] md:mt-[41px] mt-[60px] w-[100%]"
                orientation="horizontal"
              >
                <Row className="bg-gray_100 flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[10px] p-[15px] sm:p-[7px] rounded-radius10 w-[100%]">
                  <Stack className="bg-red_50 h-[70px] md:p-[13px] sm:p-[15px] p-[20px] relative rounded-radius10 sm:w-[37px] md:w-[48px] w-[70px]">
                    <Img
                      src="images/img_volume.svg"
                      className="absolute h-[30px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[15px] md:w-[20px] w-[30px]"
                      alt="volume"
                    />
                  </Stack>
                  <Text
                    className="sm:ml-[10px] md:ml-[13px] ml-[20px] text-gray_901 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Group Classes
                  </Text>
                </Row>
                <Row className="bg-gray_100 flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[10px] p-[15px] sm:p-[7px] rounded-radius10 w-[100%]">
                  <Stack className="bg-gray_50 h-[70px] md:p-[13px] sm:p-[15px] p-[20px] relative rounded-radius10 sm:w-[37px] md:w-[48px] w-[70px]">
                    <Img
                      src="images/img_user_1.svg"
                      className="absolute h-[30px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[15px] md:w-[20px] w-[30px]"
                      alt="user One"
                    />
                  </Stack>
                  <Text
                    className="sm:ml-[10px] md:ml-[13px] ml-[20px] text-gray_901 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Live Sessions
                  </Text>
                </Row>
                <Row className="bg-gray_100 flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[10px] p-[15px] sm:p-[7px] rounded-radius10 w-[100%]">
                  <Stack className="bg-cyan_50 h-[70px] md:p-[13px] sm:p-[15px] p-[20px] relative rounded-radius10 sm:w-[37px] md:w-[48px] w-[70px]">
                    <Img
                      src="images/img_vector.svg"
                      className="absolute h-[30px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[15px] md:w-[20px] w-[30px]"
                      alt="Vector"
                    />
                  </Stack>
                  <Text
                    className="sm:ml-[10px] md:ml-[13px] ml-[20px] text-gray_901 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Recorded Class
                  </Text>
                </Row>
              </List>
            </Column>
          </Stack>
          <Column className="flex flex-col font-inter items-center justify-start max-w-[1280px] ml-[auto] mr-[auto] md:mt-[103px] mt-[150px] sm:mt-[79px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
              <Text
                className="font-bold font-metropolis text-gray_901 w-[auto]"
                as="h2"
                variant="h2"
              >
                Popular Courses
              </Text>
              <Text
                className="font-inter font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[10px] md:mt-[13px] mt-[20px] not-italic text-center text-gray_700 w-[100%]"
                variant="body5"
              >
                At Skill-Learn, we offer a wide range of courses taught by
                experts in their fields. Here are some of our most popular
                courses:
              </Text>
            </Column>
            <Column className="flex flex-col items-center justify-start sm:mt-[23px] md:mt-[30px] mt-[45px] w-[100%]">
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
                    className="hover:cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
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
                    Standard 3 of the Aged Care Quality Standards applies to all
                    services delivering personal...
                  </Text>
                  <Button
                    className="cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-white_A700 w-[max-content]"
                    shape="RoundedBorder5"
                    size="sm"
                    variant="OutlineRed300"
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
                    src="images/img_volume_50X50.svg"
                    className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:w-[26px] md:w-[34px] w-[50px]"
                    alt="volume One"
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
                    Standard 7 Blood Management mandates that leaders of health
                    service organizations...
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
                    className="cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                    shape="RoundedBorder5"
                    size="sm"
                    variant="OutlineRed300"
                  >
                    Class Details
                  </Button>
                </Column>
              </Grid>
            </Column>
            <Button
              className="common-pointer cursor-pointer font-medium min-w-[16%] sm:mt-[31px] md:mt-[41px] mt-[60px] text-[16px] text-center text-white_A700 w-[max-content]"
              onClick={handleNavigate}
              size="lg"
              variant="DarkBlueBlack"
            >
              Visit More Classes
            </Button>
          </Column>
          <Column className="bg-red_51 flex flex-col font-inter items-end justify-start max-w-[1280px] ml-[auto] mr-[auto] md:mt-[103px] mt-[150px] sm:mt-[79px] sm:mx-[0] sm:pl-[15px] md:pl-[26px] pl-[38px] sm:pr-[15px] sm:py-[15px] md:py-[26px] py-[38px] rounded-radius20 w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
              <Column className="flex flex-col sm:mx-[0] sm:px-[0] rounded-radius10 sm:w-[100%] w-[42%]">
                <Button
                  className="cursor-pointer font-medium min-w-[34%] text-[20px] text-center text-white_A700 w-[max-content]"
                  size="sm"
                  variant="FillBlack900"
                >
                  College Level
                </Button>
                <Column className="flex flex-col justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
                  <Text
                    className="font-bold font-metropolis leading-[55.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-gray_901 sm:w-[100%] w-[92%]"
                    as="h2"
                    variant="h2"
                  >
                    Don’t waste time in
                    <br />
                    COVID-19 pandemic.
                    <br />
                    Develop your skills.
                  </Text>
                  <Text
                    className="font-inter font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[10px] md:mt-[13px] mt-[20px] not-italic text-gray_700 w-[100%]"
                    variant="body5"
                  >
                    High-definition video is video of higher resolution and
                    quality than standard-definition. While there is no
                    standardized
                    <br />
                    meaning for high-definition, generally any video.
                  </Text>
                </Column>
                <Button
                  className="cursor-pointer font-medium min-w-[37%] sm:mt-[21px] md:mt-[27px] mt-[40px] text-[16px] text-center text-white_A700 w-[max-content]"
                  size="lg"
                  variant="DarkBlueBlack"
                >
                  Register Now
                </Button>
              </Column>
              <Img
                src="images/img_group7647.png"
                className="max-w-[100%] sm:ml-[11px] md:ml-[14px] ml-[21px] sm:w-[100%] w-[57%]"
                alt="group7647"
              />
            </Row>
          </Column>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center max-w-[1090px] ml-[auto] mr-[auto] md:mt-[103px] mt-[150px] sm:mt-[79px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Img
              src="images/img_image_521X510.png"
              className="max-w-[100%] sm:w-[100%] w-[47%] rounded-radius20"
              shapes="RoundedBorder10"
              alt="Image Two"
            />
            <Column className="flex flex-col md:ml-[55px] ml-[80px] sm:mx-[0] sm:px-[0] rounded-radius10 sm:w-[100%] w-[46%]">
              <Column className="flex flex-col justify-start w-[100%]">
                <Text
                  className="font-bold font-metropolis leading-[55.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-gray_901 sm:w-[100%] w-[87%]"
                  as="h2"
                  variant="h2"
                >
                  Want to share your
                  <br />
                  knowledge? Join us
                  <br />
                  as Educator
                </Text>
                <Text
                  className="font-inter font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[10px] md:mt-[13px] mt-[20px] not-italic text-gray_700 w-[100%]"
                  variant="body5"
                >
                  High-definition video is video of higher resolution and
                  quality than standard-definition. While there is no
                  standardized meaning for high-definition, generally any video.
                </Text>
              </Column>
              <Button
                className="common-pointer cursor-pointer font-medium min-w-[41%] sm:mt-[21px] md:mt-[27px] mt-[40px] text-[16px] text-center text-white_A700 w-[max-content]"
                onClick={handleNavigate11}
                size="lg"
                variant="DarkBlueBlack"
              >
                Career Information
              </Button>
            </Column>
          </Row>
          <Column className="bg-black_902 flex flex-col font-metropolis items-center justify-start max-w-[1280px] ml-[auto] mr-[auto] md:mt-[103px] mt-[150px] sm:mt-[79px] sm:mx-[0] sm:p-[15px] md:p-[34px] p-[50px] sm:pl-[15px] sm:pr-[15px] rounded-radius20 w-[100%]">
            <Column className="flex flex-col items-center justify-start md:mb-[10px] mb-[15px] sm:mb-[7px] mt-[11px] sm:mt-[5px] md:mt-[7px] sm:px-[0] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                <Column className="flex flex-col items-center justify-start ml-[114px] md:ml-[78px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                  <Row className="flex flex-row items-center md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Text
                      className="flex-grow items-center font-bold leading-[55.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[10px] md:mt-[13px] mt-[19px] sm:mx-[0] text-center text-white_A700"
                      as="h2"
                      variant="h2"
                    >
                      Subscribe To Get Updates <br></br>On New Courses
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-start md:ml-[20px] ml-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                    <Text
                      className="flex-grow font-normal sm:mt-[14px] md:mt-[19px] mt-[28px] not-italic text-white_A700_b2"
                      variant="body5"
                    >
                      20k+ students daily learn with Educatsy. Subscribe for new
                      courses.
                    </Text>
                  </Row>
                </Column>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                <Input
                  className="font-medium p-[0] text-[16px] placeholder:text-white_A700 text-white_A700 w-[95%]"
                  wrapClassName="sm:mx-[0] sm:w-[100%] w-[73%]"
                  type="email"
                  name="email"
                  placeholder="enter your email"
                ></Input>
                <Button
                  className="cursor-pointer font-medium min-w-[28%] text-[16px] text-center text-white_A700 w-[max-content]"
                  shape="CustomBorderLR10"
                  size="lg"
                >
                  Subscribe
                </Button>
              </Row>
            </Column>
          </Column>

          <Footer></Footer>
        </Column>
      </Column>
    </>
  );
};

export default Home1Page;
