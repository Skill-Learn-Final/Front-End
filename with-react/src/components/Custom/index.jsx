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
  Rating,
} from "components";
import { useNavigate } from "react-router-dom";
import Sticky from "react-stickynode";

export const PopularCourses = ({ imageDir, courseName, price, rating }) => {
  return (
    <Column className="bg-white_A700 flex flex-col justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] md:p-[15px] sm:p-[15px] p-[22px] rounded-radius10 w-[100%]">
      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
        <Img
          src={imageDir}
          className="max-w-[100%] rounded-radius5 w-[24%]"
          alt="imageFourteen"
        />
        <Column className="flex flex-col items:left md:ml-[10px] ml-[15px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
          <Rating value={rating} />

          <Text
            className="font-semibold leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] text-black_900 w-[100%]"
            variant="body4"
          >
            {courseName}
          </Text>
          <Text
            className="font-semibold mt-[10px] sm:mt-[5px] md:mt-[6px] text-red_300 w-[auto]"
            variant="body4"
          >
            {price + " ETB"}
          </Text>
        </Column>
      </Row>
    </Column>
  );
};

export const CourseDet = ({ imageDir, courseName, price, rating }) => {
  return (
    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
      <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
        <Column className="flex flex-col justify-start w-[100%]">
          <Stack className="bg-white_A700 h-[280px] md:p-[13px] sm:p-[15px] p-[20px] relative rounded-radius10 w-[100%]">
            <Img
              src={imageDir}
              className="absolute h-[240px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius10 sm:w-[100%] w-[86%]"
              alt="Image Two"
            />
          </Stack>
          <Text
            className="font-semibold md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_901 w-[auto]"
            variant="body4"
          >
            {courseName}
          </Text>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
            <Text
              className="flex-grow font-semibold text-red_300"
              variant="body4"
            >
              {price + " ETB"}
            </Text>
            <div>
              <Rating value={rating} />
            </div>
          </Row>
        </Column>
      </Column>
    </Column>
  );
};

export const CourseDetHome = ({ imageDir, courseName, courseDescription }) => {
  return (
    <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-center md:p-[10px] p-[15px] sm:p-[7px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
      <Img
        src={imageDir}
        className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:w-[26px] md:w-[34px] w-[50px]"
        alt="download"
      />
      <Text
        className="sm:mt-[10px] md:mt-[13px] mt-[20px] text-gray_901 w-[auto]"
        as="h5"
        variant="h5"
      >
        {courseName}
      </Text>
      <Text
        className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-center text-gray_700 w-[100%]"
        variant="body5"
      >
        {courseDescription}
      </Text>
      <Button
        className="hover:cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
        shape="RoundedBorder5"
        size="sm"
        variant="OutlineRed300"
      >
        Course Detail
      </Button>
    </Column>
  );
};
