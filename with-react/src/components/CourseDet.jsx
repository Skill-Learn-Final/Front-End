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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const CourseDet = ({ imageDir, courseName, price, rating }) => {
  return (
    <div className="bg-white h-[8rem] grid grid-cols-3 gap-8 sm:px-[0] w-[100%]">
      <div className="col-span-1">
        <img src="/images/teacher.jpg" />
      </div>
      <div className="col-span-2">
        <div className="relative">
          <p className="sm:mt-[10px] md:mt-[13px] mt-[10px] text-gray_901 font-sans text-sm font-bold w-full">
            {courseName}
          </p>
          <p className="text-sm font-sans text-gray-500 mt-2">John Doe</p>
          <p className="text-sm text-gray-600 mt-2">
            4.7 <FontAwesomeIcon icon={faStar} />{" "}
          </p>
          <p className="text-sm font-sans text-gray-500 mt-2">
            4 Chapters | 67 Hours Content | All Levels{" "}
          </p>
          <p className="sm:mt-[10px] md:mt-[13px] mt-[10px] text-gray_901 font-sans text-sm font-bold absolute bottom-0 right-5">
            $300
          </p>
        </div>
      </div>
    </div>
  );
};
export default CourseDet;
