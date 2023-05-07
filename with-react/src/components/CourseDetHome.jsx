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

const CourseDetHome = ({ imageDir, courseName, courseDescription }) => {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/course_detail");
  }
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
        onClick={handleNavigate}
      >
        Course Detail
      </Button>
    </Column>
  );
};

export default CourseDetHome;