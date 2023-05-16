import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

const DropdownItem = (props) => {
  const navigate = useNavigate();

  return (
    <Link to={props.navigate}>
      <li className="dropdownItem">
        <FontAwesomeIcon icon={props.icon} className="dropdownIcon" />
        <a className="dropdownTexts"> {props.text} </a>
      </li>
    </Link>
  );
};

export default DropdownItem;
