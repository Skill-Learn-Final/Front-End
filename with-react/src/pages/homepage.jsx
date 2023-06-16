import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

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
  Nav,
  NavBarP,
  PlusSigns,
  Footer,
  Subscribe,
  CourseDetHome,
  CourseDet,
} from "../components";
import { useNavigate } from "react-router-dom";

const Home1Page = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/course_detail");
  }

  function shop() {
    navigate("/shop");
  }
  const { t } = useTranslation();

  return (
    <>
      {/* <Column className="bg-light_green flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]"> */}

      <Column className="bg-light_green flex flex-col items-center justify-start sm:mt-[0px] md:mt-[0px] w-[100%]">
        <Column className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[auto] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] px-[2rem] w-[100%] justify-around landingFirstSection">
          <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
            <Column className="flex flex-col justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
              <Text
                className=" font-bold text-5xl md:leading-[normal] sm:leading-[normal] text-white w-[100%] landingText"
                as="h3"
                variant="h3"
              >
                {t(
                  "Skill_learn_is_your_gateway_to_knowledge_and_personal_growth"
                )}
              </Text>
              <Text className={"landingDescription"} as="p" variant="p">
                {t(
                  "A_diverse_selection_of_expertly_crafted_courses_designed_for_everyone"
                )}
              </Text>
              {/* <Text
                  className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] not-italic text-gray_700 w-[100%]"
                  variant="body5"
                >
                  Skill-Learn aims to provide a platform where individuals can
                  share their skills online and get fairly compensated. We
                  believe that everyone has something valuable to offer, and our
                  platform offers a supportive and collaborative environment
                  where users can connect, learn from others.
                </Text> */}

              <Column className="">
                <Button
                  className="cursor-pointer pl-10 pr-10 mt-10 font-medium min-w-[40%] text-[20px] text-center text-White w-[max-content]"
                  size="lg"
                  variant="NavyBlue"
                  onClick={shop}
                >
                  {t("Join_for_Free")}
                </Button>
              </Column>
            </Column>
          </Column>
          <Img
            src="images/Girl2.png"
            className="max-w-[22rem] sm:ml-[22px] md:ml-[28px] ml-[42px] sm:w-[100%] w-[51%] rounded-radius20"
            alt="image"
          />
        </Column>
        <Stack className=" h-[1120px] max-w-[auto] ml-[auto] mr-[auto] md:mt-[103px] mt-[0px] sm:mt-[79px] sm:pl-[15px] sm:pr-[15px] px-[5rem] py-[5rem] relative w-[100%]">
          <Stack className="absolute h-[465px] sm:w-[100%] w-[90%]">
            <Column className="absolute flex flex-col items-center justify-start left-[0] sm:mx-[0] sm:px-[0] rounded-radius10 top-[0] sm:w-[100%] w-[86%]">
              <Text
                className="font-bold font-Roboto leading-[55.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-gray_901 sm:w-[100%] w-[100%]"
                as="h2"
                variant="h2"
              >
                {t("High_quality_video_audio")}
                <br />
                {t("Live_classes")}
              </Text>
              <Text
                className="font-inter font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[10px] md:mt-[13px] mt-[20px] not-italic  text-gray_700 w-[100%]"
                variant="body5"
              >
                {t("At_SkillLearn_we_take_great_pride")}
                <br />

                {t(
                  "Join_our_platform_today_and_start_your_journey_towards_personal_and_professional_growth"
                )}
              </Text>
              {/* <Button
                className="common-pointer cursor-pointer font-inter font-medium min-w-[20%] sm:mt-[21px] md:mt-[27px] mt-[40px] text-[16px] text-white_A700 w-[max-content]"
                variant="DarkBlueBlack"
                onClick={handleNavigate1}
                size="lg"
              >
                View Courses
              </Button> */}
            </Column>

            <PlusSigns></PlusSigns>
          </Stack>
          <Column className="flex flex-col font-inter inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] mt-[15rem] sm:px-[0] sm:w-[100%] w-[57%]">
            <Column
              className="bg-cover bg-no-repeat flex flex-col items-center justify-end sm:mx-[0] sm:p-[15px] md:p-[20px] p-[30px] rounded-radius16 sm:w-[100%] w-[65%]"
              style={{ backgroundImage: "url('images/img_group7626.png')" }}
            >
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[141px] md:mt-[182px] mt-[265px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                <Img
                  src="images/img_portraitlittle.png"
                  className="max-w-[50rem] rounded-radius16 w-[70%]"
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
                  {t("Group_Classes")}
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
                  {t("Live_Sessions")}
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
                  {t("Recorded_Class")}
                </Text>
              </Row>
            </List>
          </Column>
        </Stack>
        <Column className=" flex flex-col font-inter items-center justify-start max-w-[auto] ml-[auto] mr-[auto] md:mt-[103px] mt-[0px] sm:mt-[79px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] px-[5rem] py-[5rem] w-[100%]">
          <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
            <Text
              className="font-bold font-Roboto text-gray_901 w-[auto]"
              as="h2"
              variant="h2"
            >
              {t("Popular_Courses")}
            </Text>
            <Text
              className="font-inter font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[10px] md:mt-[13px] mt-[20px] not-italic text-center text-gray_700 w-[100%]"
              variant="body5"
            >
              {t(
                "At_SkillLearn_we_offer_a_wide_range_of_courses_taught_by_experts_in_their_fields"
              )}
            </Text>
          </Column>

          <Column className="flex flex-col items-center justify-start sm:mt-[23px] md:mt-[30px] mt-[45px] w-[100%]">
            <Grid className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] w-[100%]">
              <CourseDetHome
                imageDir={require("../assets/images/stock.jpg")}
                courseName="Course Name"
                courseDescription="Standard 2 builds on the foundations of Standard 1 and includes requirements..."
              />

              <CourseDetHome
                imageDir={require("../assets/images/stock.jpg")}
                courseName="Course Name"
                courseDescription="Standard 2 builds on the foundations of Standard 1 and includes requirements..."
              />

              <CourseDetHome
                imageDir={require("../assets/images/stock.jpg")}
                courseName="Course Name"
                courseDescription="Standard 2 builds on the foundations of Standard 1 and includes requirements..."
              />
              <CourseDetHome
                imageDir={require("../assets/images/stock.jpg")}
                courseName="Course Name"
                courseDescription="Standard 2 builds on the foundations of Standard 1 and includes requirements..."
              />
              <CourseDetHome
                imageDir="images/img_image_90X75.png"
                courseName="Course Name"
                courseDescription="Standard 2 builds on the foundations of Standard 1 and includes requirements..."
              />
              <CourseDetHome
                imageDir="images/img_image_90X75.png"
                courseName="Course Name"
                courseDescription="Standard 2 builds on the foundations of Standard 1 and includes requirements..."
              />
              <CourseDetHome
                imageDir="images/img_image_90X75.png"
                courseName="Course Name"
                courseDescription="Standard 2 builds on the foundations of Standard 1 and includes requirements..."
              />
              <CourseDetHome
                imageDir="images/img_image_90X75.png"
                courseName="Course Name"
                courseDescription="Standard 2 builds on the foundations of Standard 1 and includes requirements..."
              />
            </Grid>
          </Column>
          <Button
            className="common-pointer cursor-pointer font-medium min-w-[16%] sm:mt-[31px] md:mt-[41px] mt-[60px] text-[16px] text-center text-white_A700 w-[max-content]"
            onClick={() => {
              navigate("/shop");
            }}
            size="lg"
            variant="DarkBlueBlack"
          >
            {t("Visit_More_Classes")}
          </Button>
        </Column>
        <Column className="bg-very_light_green flex flex-col font-inter items-end justify-start max-w-[1280px] max-h-[650px] ml-[auto] mr-[auto] md:mt-[103px] mt-[75px] sm:mt-[79px] sm:mx-[0] sm:pl-[15px] md:pl-[26px] pl-[38px] sm:pr-[15px] sm:py-[15px] md:py-[26px] py-[3rem] rounded-radius20 w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] rounded-radius10 sm:w-[100%] w-[42%]">
              <Button
                className="cursor-pointer font-medium min-w-[34%] text-[20px] text-center text-white_A700 w-[max-content]"
                size="sm"
                variant="FillBlack900"
              >
                {t("Beginner_friendly")}
              </Button>
              <Column className="flex flex-col justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
                <Text
                  className="font-bold font-metropolis leading-[55.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-gray_901 sm:w-[100%] w-[92%]"
                  as="h2"
                  variant="h2"
                >
                  {t("Don’t_waste_time_in")}
                  <br />
                  {t("Doing_nothing")}
                  <br />
                  {t("Develop_your_skills")}
                </Text>
                <Text
                  className="font-inter font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[10px] md:mt-[13px] mt-[20px] not-italic text-gray_700 w-[100%]"
                  variant="body5"
                >
                  {t("High_definition_video_is_video_of_higher_resolution_and")}
                  <br />
                  {t("meaning_for_high_definition_generally_any_video")}
                </Text>
              </Column>
              <Button
                className="cursor-pointer font-medium min-w-[37%] sm:mt-[21px] md:mt-[27px] mt-[40px] text-[16px] text-center text-white_A700 w-[max-content]"
                size="lg"
                variant="DarkBlueBlack"
              >
                {t("Register_Now")}
              </Button>
            </Column>
            <Img
              src="images/img_group7647.png"
              className="max-w-[100%] sm:ml-[11px] md:ml-[14px] ml-[21px] sm:w-[100%] w-[57%]"
              alt="group7647"
            />
          </Row>
        </Column>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center max-w-[auto] ml-[auto] mr-[auto] md:mt-[103px] mt-[100px] mb-[0px] sm:mt-[79px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] px-[4rem] py-[5rem] w-[100%] landingJoinAsTeacher">
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
                {t("Want_to_share_your")}
                <br />
                {t("knowledge_join_us")}
                <br />
                {t("as_educator")}
              </Text>
              <Text
                className="font-inter font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[10px] md:mt-[13px] mt-[20px] not-italic text-gray_700 w-[100%]"
                variant="body5"
              >
                {t(
                  "Highdefinition_video_is_video_of_higher_resolution_and_quality"
                )}
              </Text>
            </Column>
            <Button
              className="common-pointer cursor-pointer font-medium min-w-[41%] sm:mt-[21px] md:mt-[27px] mt-[40px] text-[16px] text-center text-white_A700 w-[max-content]"
              onClick={() => {
                navigate("/instructor");
              }}
              size="lg"
              variant="DarkBlueBlack"
            >
              {t("Career_Information")}
            </Button>
          </Column>
        </Row>

        <Footer></Footer>
      </Column>
      {/* </Column> */}
    </>
  );
};

export default Home1Page;
