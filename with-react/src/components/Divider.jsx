import React from "react";

const Divider = ({ type = "hor", className }) => {
  if (type === "ver") {
    return <span className="h-full border-l border-gray-300"></span>;
  } else {
    return (
      <hr className={`border-t border-gray-300 my-4 mx-24 ${className}`} />
    );
  }
};

export default Divider;
