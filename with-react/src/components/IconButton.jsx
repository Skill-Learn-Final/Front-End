import React from "react";

const IconButton = ({ icon, label, onClick, className, ...props }) => {
  const hasLabel = label && label.trim() !== "";

  return (
    <button
      className={`flex max-w-fit px-5  items-center justify-center bg-transparent   hover:bg-gray-100 focus:outline-none ${
        hasLabel ? " rounded-md" : "w-10 h-10 rounded-full"
      } ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className={`text-gray-600 ${hasLabel ? "mr-2" : ""}`}>{icon}</span>
      {hasLabel && <span className="text-gray-800">{label}</span>}
    </button>
  );
};

export default IconButton;
