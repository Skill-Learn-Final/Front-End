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
} from "components";

export const Subscribe = ()=>{
return(
    
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

)
};

