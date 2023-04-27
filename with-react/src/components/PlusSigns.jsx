import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faArrowDown,
  faArrowTurnDown,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

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
} from "./";
import { useNavigate } from "react-router-dom";
import Sticky from "react-stickynode";

const PlusSigns = () => {
  return (
    <Column className="absolute bottom-[0] flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[0] sm:w-[100%] w-[19%] ">
      <List
        className="sm:gap-[3px] md:gap-[4px] gap-[6.18px] grid min-h-[auto] w-[100%]"
        orientation="vertical"
      >
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
        </Row>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
        </Row>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
        </Row>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
        </Row>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
        </Row>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
        </Row>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
        </Row>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
        </Row>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
        </Row>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-dark_blueblack w-[auto]" variant="body6">
            +
          </Text>
          <Text className="text-navy_blue w-[auto]" variant="body6">
            +
          </Text>
        </Row>
      </List>
    </Column>
  );
};

export default PlusSigns;
