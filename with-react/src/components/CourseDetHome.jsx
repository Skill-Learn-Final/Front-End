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
import FontAwesome from "react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const CourseDetHome = ({
  imageDir,
  courseName,
  description,
  authorId,
  price,
  rating,
  id,
}) => {
  const navigate = useNavigate();
  function handleNavigate(id) {
    navigate(`/course_detail/${id}`);
  }
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        handleNavigate(id);
      }}
    >
      <Column className="bg-white_A700  hover:flex flex hover:flex-col flex-col justify-start md:p-[10px] sm:p-[7px] rounded-radius15 hover:shadow-bs hover:w-[100%] max-w-[14rem] w-[100%] h-[40vh] overflow-hidden">
        <div className="h-[50%] overlay">
          <Img
            src={imageDir}
            className="max-w-[100%] md:mt-[10px] mt-[0] sm:mt-[7px] sm:w-[100%] md:w-[100%] w-[60rem] h-[100%]"
            alt="download"
          />
        </div>
        <div className="h-[50%] flex flex-col justify-start px-[0.5rem] py-[0.5rem] relative">
          <div className="absolute top-8">
            <p className="sm:mt-[10px] md:mt-[13px] mt-[10px] text-gray_901 font-sans text-sm font-bold w-[95%]">
              {courseName}
            </p>
          </div>
          <p className="absolute bottom-2 text-sm text-gray-600">{authorId}</p>
          <div className="flex justify-between absolute top-0 w-[90%] mt-2">
            <div className="sm:mt-[10px] md:mt-[13px]  text-gray_600 ">
              {rating} <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="sm:mt-[10px] md:mt-[13px]  text-black">
              {price}$
            </div>
          </div>
          {/* <div className="absolute top-20 font-normal  md:leading-[normal] sm:leading-[normal] mt-[20px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_700 w-[90%] ">
            {description}
          </div> */}
          {/* <Button
          className="hover:cursor-pointer font-medium md:mb-[10px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] text-[16px] text-center text-red_300 w-[80%] absolute top-48 courseCardButton"
          shape="RoundedBorder5"
          size="sm"
          variant="OutlineRed300"
          onClick={() => handleNavigate(id)}
        >
          Purchase Course
        </Button> */}
        </div>
      </Column>
    </div>
  );
};

export default CourseDetHome;
