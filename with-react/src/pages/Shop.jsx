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
  Footer,
  Rating,
  Subscribe,
  PopularCourses,
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

const Shop = () => {
  const navigate = useNavigate();

  function handleNavigate18() {
    navigate("/login");
  }
  function handleNavigate28() {
    navigate("/allmentors");
  }
  function handleNavigate29() {
    navigate("/eduvicourses");
  }
  function OneStar() {
    <FontAwesomeIcon icon={faStar} />;
  }

  return (
    <>
      <Column className="bg-light_green flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <NavBarP></NavBarP>
          <Column className="flex flex-col items-center justify-start sm:mt-[26px] md:mt-[34px] mt-[50px] w-[100%]">
            <Row className="bg-very_light_green flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1280px] ml-[auto] mr-[auto] sm:mx-[0] md:p-[13px] sm:p-[15px] p-[19px] sm:pl-[15px] sm:pr-[15px] rounded-radius20 w-[100%]">
              <Text
                className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-black_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body5"
              >
                Home | Shop
              </Text>
              <Text
                className="font-semibold leading-[50.00px] md:leading-[normal] sm:leading-[normal] ml-[1px] sm:mt-[34px] md:mt-[44px] mt-[65px] sm:mx-[0] text-gray_901 sm:w-[100%] w-[29%]"
                as="h2"
                variant="h2"
              >
                Skill-Learn
                <br />
                Courses
              </Text>
              <Img
                src="images/img_kisspngbookcas.png"
                className="max-w-[100%] mb-[1px] md:ml-[114px] ml-[167px] sm:ml-[88px] sm:mt-[10px] md:mt-[13px] mt-[20px] w-[31%]"
                alt="kisspngbookcas"
              />
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1280px] ml-[auto] mr-[auto] sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <List
                className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid min-h-[auto] w-[32%]"
                orientation="vertical"
              >
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="font-semibold text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Popular Courses
                  </Text>

                  <PopularCourses
                    imageDir={"images/img_image_90X75.png"}
                    name={"This is the name of the book"}
                    rating={3}
                  />

                  <Column className="bg-white_A700 flex flex-col justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] md:p-[15px] sm:p-[15px] p-[22px] rounded-radius10 w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                      <Img
                        src="images/img_image_90X75.png"
                        className="max-w-[100%] rounded-radius5 w-[24%]"
                        alt="Image"
                      />
                      <Column className="flex flex-col md:ml-[10px] ml-[15px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                        <div>
                          <Rating value={3} />
                        </div>
                        <Text
                          className="font-semibold leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] text-black_900 w-[100%]"
                          variant="body4"
                        >
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </Text>
                        <Text
                          className="font-semibold mt-[10px] sm:mt-[5px] md:mt-[6px] text-red_300 w-[auto]"
                          variant="body4"
                        >
                          $39.00
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] md:p-[15px] sm:p-[15px] p-[22px] rounded-radius10 w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                      <Img
                        src="images/img_image_1.png"
                        className="max-w-[100%] rounded-radius5 w-[24%]"
                        alt="Image One"
                      />
                      <Column className="flex flex-col md:ml-[10px] ml-[15px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                        <div>
                          <Rating value={3} />
                        </div>
                        <Text
                          className="font-semibold leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] text-black_900 w-[100%]"
                          variant="body4"
                        >
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </Text>
                        <Text
                          className="font-semibold mt-[10px] sm:mt-[5px] md:mt-[6px] text-red_300 w-[auto]"
                          variant="body4"
                        >
                          $39.00
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="font-semibold text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    New Arrivals
                  </Text>
                  <Column className="bg-white_A700 flex flex-col justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] md:p-[15px] sm:p-[15px] p-[22px] rounded-radius10 w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                      <Img
                        src="images/img_image14.png"
                        className="max-w-[100%] rounded-radius5 w-[24%]"
                        alt="imageFourteen One"
                      />
                      <Column className="flex flex-col md:ml-[10px] ml-[15px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                        <div>
                          <Rating value={3} />
                        </div>
                        <Text
                          className="font-semibold leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] text-black_900 w-[100%]"
                          variant="body4"
                        >
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </Text>
                        <Text
                          className="font-semibold mt-[10px] sm:mt-[5px] md:mt-[6px] text-red_300 w-[auto]"
                          variant="body4"
                        >
                          $39.00
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] md:p-[15px] sm:p-[15px] p-[22px] rounded-radius10 w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                      <Img
                        src="images/img_image_90X75.png"
                        className="max-w-[100%] rounded-radius5 w-[24%]"
                        alt="Image One"
                      />
                      <Column className="flex flex-col md:ml-[10px] ml-[15px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                        <div>
                          <Rating value={3} />
                        </div>
                        <Text
                          className="font-semibold leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] text-black_900 w-[100%]"
                          variant="body4"
                        >
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </Text>
                        <Text
                          className="font-semibold mt-[10px] sm:mt-[5px] md:mt-[6px] text-red_300 w-[auto]"
                          variant="body4"
                        >
                          $39.00
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] md:p-[15px] sm:p-[15px] p-[22px] rounded-radius10 w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                      <Img
                        src="images/img_image_1.png"
                        className="max-w-[100%] rounded-radius5 w-[24%]"
                        alt="Image One One"
                      />
                      <Column className="flex flex-col md:ml-[10px] ml-[15px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                        <div>
                          <Rating value={3} />
                        </div>
                        <Text
                          className="font-semibold leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] text-black_900 w-[100%]"
                          variant="body4"
                        >
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </Text>
                        <Text
                          className="font-semibold mt-[10px] sm:mt-[5px] md:mt-[6px] text-red_300 w-[auto]"
                          variant="body4"
                        >
                          $39.00
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                </Column>
              </List>
              <Column className="flex flex-col justify-start md:ml-[27px] ml-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                {/* <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius10 sm:w-[100%] w-[74%]">
                  <Button
                    className="cursor-pointer font-medium min-w-[22%] text-[16px] text-center text-gray_901 w-[max-content]"
                    size="lg"
                    variant="FillWhiteA700"
                  >
                    All Books
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[25%] sm:ml-[10px] md:ml-[13px] ml-[20px] text-[16px] text-center text-gray_901 w-[max-content]"
                    size="lg"
                    variant="FillWhiteA700"
                  >
                    Kindergarten
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[25%] sm:ml-[10px] md:ml-[13px] ml-[20px] text-[16px] text-center text-gray_901 w-[max-content]"
                    size="lg"
                    variant="FillWhiteA700"
                  >
                    High School
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[20%] sm:ml-[10px] md:ml-[13px] ml-[20px] text-[16px] text-center text-gray_901 w-[max-content]"
                    size="lg"
                    variant="FillWhiteA700"
                  >
                    College
                  </Button>
                </Row> */}
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                  <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:p-[3px] md:p-[4px] p-[7px] rounded-radius10 sm:w-[100%] w-[67%]">
                    <Text
                      className="font-medium ml-[13px] sm:ml-[6px] md:ml-[8px] text-gray_700_99 w-[auto]"
                      variant="body5"
                    >
                      Search Class, Course, Book Name
                    </Text>
                    <Button
                      className="cursor-pointer sm:h-[25px] md:h-[32px] h-[46px] text-center sm:w-[24px] md:w-[31px] w-[46px]"
                      variant="DarkBlueBlack"
                    >
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Button>
                  </Row>
                  <SelectBox
                    className="font-medium sm:mx-[0] text-[16px] text-gray_700_99 sm:w-[100%] w-[33%]"
                    placeholderClassName="text-gray_700_99"
                    name="Sortby"
                    placeholder="Sort by: Latest"
                    isSearchable={false}
                    isMulti={false}
                    indicator={<FontAwesomeIcon icon={faArrowDown} />}
                    shape="RoundedBorder10"
                    size="md"
                    variant="FillWhiteA700"
                  ></SelectBox>
                </Row>
                <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                  <Grid className="md:gap-[10px] gap-[15px] sm:gap-[7px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-[100%]">
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] md:p-[13px] sm:p-[15px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image14.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius10 sm:w-[100%] w-[86%]"
                            alt="Image Two"
                          />
                        </Stack>
                        <Text
                          className="font-semibold md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_901 w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <div>
                            <Rating value={3} />
                          </div>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] md:p-[13px] sm:p-[15px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image_90X75.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius10 sm:w-[100%] w-[86%]"
                            alt="Image Three"
                          />
                        </Stack>
                        <Text
                          className="font-semibold md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_901 w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <div>
                            <Rating value={3} />
                          </div>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] md:p-[13px] sm:p-[15px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image_240X230.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius10 sm:w-[100%] w-[86%]"
                            alt="Image Four"
                          />
                        </Stack>
                        <Text
                          className="font-semibold md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_901 w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <div>
                            <Rating value={3} />
                          </div>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] md:p-[13px] sm:p-[15px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image_2.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius10 sm:w-[100%] w-[86%]"
                            alt="Image Five"
                          />
                        </Stack>
                        <Text
                          className="font-semibold md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_901 w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <div>
                            <Rating value={5} />
                          </div>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] md:p-[13px] sm:p-[15px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image_1.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius10 sm:w-[100%] w-[86%]"
                            alt="Image Six"
                          />
                        </Stack>
                        <Text
                          className="font-semibold md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_901 w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <div>
                            <Rating value={1} />
                          </div>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] md:p-[13px] sm:p-[15px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image_3.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius10 sm:w-[100%] w-[86%]"
                            alt="Image Seven"
                          />
                        </Stack>
                        <Text
                          className="font-semibold md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_901 w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <div>
                            <Rating value={2} />
                          </div>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] md:p-[13px] sm:p-[15px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image_90X75.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius10 sm:w-[100%] w-[86%]"
                            alt="Image Eight"
                          />
                        </Stack>
                        <Text
                          className="font-semibold md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_901 w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <div>
                            <Rating value={1} />
                          </div>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] md:p-[13px] sm:p-[15px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image14.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius10 sm:w-[100%] w-[86%]"
                            alt="Image Nine"
                          />
                        </Stack>
                        <Text
                          className="font-semibold md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_901 w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <div>
                            <Rating value={5} />
                          </div>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] md:p-[13px] sm:p-[15px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image_1.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius10 sm:w-[100%] w-[86%]"
                            alt="Image Ten"
                          />
                        </Stack>
                        <Text
                          className="font-semibold md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_901 w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <div>
                            <Rating value={2} />
                          </div>
                        </Row>
                      </Column>
                    </Column>
                  </Grid>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center md:ml-[191px] ml-[278px] sm:mt-[26px] md:mt-[34px] mt-[50px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                  <Button
                    className="flex sm:h-[24px] md:h-[31px] h-[44px] items-center justify-center sm:w-[23px] md:w-[30px] w-[44px]"
                    shape="icbRoundedBorder6"
                    size="mdIcn"
                    variant="icbFillWhiteA700"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </Button>
                  <Text
                    className="font-medium sm:ml-[10px] md:ml-[13px] ml-[20px] mt-[14px] sm:mt-[7px] md:mt-[9px] text-gray_901 w-[auto]"
                    variant="body5"
                  >
                    Page
                  </Text>
                  <Button
                    className="cursor-pointer font-medium sm:h-[24px] md:h-[31px] h-[44px] md:ml-[11px] ml-[16px] sm:ml-[8px] text-[18px] text-bluegray_800 text-center sm:w-[23px] md:w-[30px] w-[44px]"
                    size="sm"
                    variant="FillWhiteA700"
                  >
                    1
                  </Button>
                  <Text
                    className="font-medium md:ml-[10px] ml-[15px] sm:ml-[7px] mt-[14px] sm:mt-[7px] md:mt-[9px] text-gray_901 w-[auto]"
                    variant="body5"
                  >
                    of 80
                  </Text>
                  <Button
                    className="flex sm:h-[24px] md:h-[31px] h-[44px] items-center justify-center sm:ml-[11px] md:ml-[14px] ml-[21px] sm:w-[23px] md:w-[30px] w-[44px]"
                    shape="icbRoundedBorder6"
                    size="mdIcn"
                    variant="FillWhiteA700"
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Button>
                </Row>
              </Column>
            </Row>
            <Footer></Footer>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default Shop;
