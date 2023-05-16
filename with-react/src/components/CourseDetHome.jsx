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
    <Column className="bg-white_A700  hover:flex flex hover:flex-col flex-col justify-start md:p-[10px] sm:p-[7px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%] h-[65vh] overflow-hidden">
      <div className="h-[40%] overlay">
        <Img
          src={imageDir}
          className="max-w-[100%] md:mt-[10px] mt-[0] sm:mt-[7px] sm:w-[100%] md:w-[100%] w-[60rem] h-[100%]"
          alt="download"
        />
      </div>
      <Column className="flex flex-col justify-start p-[1.5rem]">
        <Text
          className="sm:mt-[10px] md:mt-[13px] mt-[20px] text-gray_901 w-[auto]"
          as="h5"
          variant="h5"
        >
          {courseName}
        </Text>
        <Text
          className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_700 w-[100%]"
          variant="body5"
        >
          {courseDescription}
        </Text>
        <Button
          className="hover:cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-red_300 w-[max-content] courseCardButton"
          shape="RoundedBorder5"
          size="sm"
          variant="OutlineRed300"
          onClick={handleNavigate}
        >
          Course Detail
        </Button>
      </Column>

    </Column>
  );
};

export default CourseDetHome;
