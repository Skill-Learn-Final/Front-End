import React, { useState } from "react";
import { Row, Img, Divider } from "./";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

// import teacher from "../../public/images/teacher.jpg";

const RoleSelectionStepper = ({ steps, onRoleSelect }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedRole, setSelectedRole] = useState("");

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    onRoleSelect(role);
  };

  const renderStepContent = () => {
    const { title, form } = steps[activeStep];

    return (
      <Row className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
        <div className="w-full columns-2 items-center font-light text-dark_green text-2xl">
          {steps.map((step, index) => {
            return (
              <div key={index} className="flex flex-col rows-1 items-center">
                <div
                  className={`${
                    index === activeStep
                      ? "bg-dark_green text-light_green"
                      : "bg-light_green text-dark_green border border-medium_green"
                  } w-7 h-7 text-base rounded-full  flex items-center justify-center`}
                >
                  <p>{index + 1}</p>
                </div>
                <p
                  className={` ${
                    index === activeStep
                      ? "text-medium_green"
                      : "text-gray-500/80"
                  } text-sm`}
                >
                  {step.title}
                </p>
              </div>
            );
          })}
        </div>
        {activeStep === 0 ? (
          <div className="grid grid-cols-2 gap-6">
            <button
              onClick={() => handleRoleSelect("creator")}
              className={`w-full bg-white col-span-1 sm:col-span-2 rounded-md h-[15rem] overflow-hidden roleSelect ${
                selectedRole === "creator"
                  ? "  shadow-md shadow-green-300 border-2 border-green-900/40 border-medium_green text-grey-700/90"
                  : " text-dark_green shadow-2xl hover:shadow-md "
              }`}
            >
              <div
                className="flex flex-row mb-[0.55rem] pl-[0.5rem] py-5 roleSelectHeader"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0,0,0,0)), url(images/teacher.jpg)",
                  backgroundSize: "cover",
                }}
              >
                <p className="w-1 text-xl text-white font-semibold roleSelectTitle">
                  Creator
                </p>
                {/* <div className="w-full h-full rounded-full overflow-hidden bg-white_A700_b2 roleSelectImage">
                  <Img src="images/teacher.jpg" />
                </div> */}
              </div>
              <hr />
              <div className="roleSelectDescription mt-2">
                <p className="text-sm font-semibold">
                  <FontAwesomeIcon icon={faCheck} /> &nbsp; Some Description
                </p>
                <p className="text-sm font-semibold">
                  <FontAwesomeIcon icon={faCheck} /> &nbsp; Some Description
                </p>
                <p className="text-sm font-semibold">
                  <FontAwesomeIcon icon={faCheck} /> &nbsp; Some Description
                </p>
                <p className="text-sm font-semibold">
                  <FontAwesomeIcon icon={faCheck} /> &nbsp; Some Description
                </p>
              </div>
            </button>
            <button
              onClick={() => handleRoleSelect("learner")}
              className={`w-full bg-white col-span-1 sm:col-span-2 rounded-md h-[15rem] overflow-hidden roleSelect ${
                selectedRole === "learner"
                  ? "  shadow-md shadow-green-300 border-2 border-green-900/40 border-medium_green text-grey-700/90"
                  : " text-dark_green shadow-2xl hover:shadow-md "
              }`}
            >
              <div
                className="flex flex-row mb-[0.55rem] pl-[0.5rem] py-5 roleSelectHeader"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0,0,0,0)), url(images/student.jpg)",
                  backgroundSize: "cover",
                }}
              >
                <p className="w-1 text-xl text-white font-semibold roleSelectTitle">
                  Learner
                </p>
                {/* <div className="w-full h-full rounded-full overflow-hidden bg-white_A700_b2 roleSelectImage">
                  <Img src="images/teacher.jpg" />
                </div> */}
              </div>
              <hr />
              <div className="roleSelectDescription mt-2">
                <p className="text-sm font-semibold">
                  <FontAwesomeIcon icon={faCheck} /> &nbsp; Some Description
                </p>
                <p className="text-sm font-semibold">
                  <FontAwesomeIcon icon={faCheck} /> &nbsp; Some Description
                </p>
                <p className="text-sm font-semibold">
                  <FontAwesomeIcon icon={faCheck} /> &nbsp; Some Description
                </p>
                <p className="text-sm font-semibold">
                  <FontAwesomeIcon icon={faCheck} /> &nbsp; Some Description
                </p>
              </div>
            </button>
          </div>
        ) : (
          form
        )}
      </Row>
    );
  };

  return (
    <div className="loginFormHolder">
      <div>
        {!(activeStep === 0) && (
          <a className="cursor-pointer login_Back_Btn" onClick={handleBack}>
            Back
          </a>
        )}
        {!(activeStep === steps.length - 1) && (
          <button
            className="bg-dark_green hover:bg-green-900 text-white font-bold py-2 px-12 rounded login_Next_Btn"
            onClick={handleNext}
            disabled={!selectedRole}
          >
            Next
          </button>
        )}
      </div>
      {renderStepContent()}
    </div>
  );
};

export default RoleSelectionStepper;
