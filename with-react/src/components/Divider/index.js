import React from "react";

export const Divider = ({ type = "hor" }) => {
  if (type === "ver") {
    return <span className="h-full border-l border-gray-300"></span>;
  } else {
    return <hr className="border-t border-gray-300 my-4 mx-24" />;
  }
};
