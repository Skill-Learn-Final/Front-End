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
} from "./";
import { useNavigate } from "react-router-dom";
import Sticky from "react-stickynode";

const PopularCourses = ({ imageDir, courseName, price, rating }) => {
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

export default PopularCourses;
