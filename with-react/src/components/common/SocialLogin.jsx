import React from "react";
import GoogleLogo from "./GoogleLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const SocialLogin = (id) => {
  return (
    <div className="grid grid-rows-2 grid-cols-2 items-center pt-4 gap-2 justify-items-center">
      <button
        className="w-full sm:w-3/5 flex col-span-1 sm:col-span-2 bg-dark_green hover:bg-green-900/80 rounded-full mx-2 p-1 items-center"
        onClick={() => {}}
      >
        <GoogleLogo />

        <p className="w-7/12 text-white font-semibold">Google</p>
      </button>
      <button
        className="w-full sm:w-3/5 flex col-span-1 sm:col-span-2 bg-dark_green hover:bg-green-900/80 rounded-full mx-2 p-1 items-center"
        onClick={() => {}}
      >
        <FontAwesomeIcon
          icon={faFacebookF}
          className="h-6 w-6 p-2 text-white bg-blue-500 rounded-full mr-2"
        />
        <p className="w-7/12 text-white font-semibold">Facebook</p>
      </button>
    </div>
  );
};

export default SocialLogin;
