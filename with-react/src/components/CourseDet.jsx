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

const CourseDet = ({ imageDir, courseName, price, rating }) => {
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
export default CourseDet;
