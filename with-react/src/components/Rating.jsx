import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ value }) => {
  const stars = [];

  for (let i = 1; i <= value; i++) {
    const starClass = i <= value ? "star filled" : "";

    stars.push(
      <FontAwesomeIcon
        key={i}
        className={`star ${starClass}`}
        icon={faStar}
        //   onClick={() => onClick(i)}
      />
    );
  }

  return <div className="rating">{stars}</div>;
};

export default Rating;
