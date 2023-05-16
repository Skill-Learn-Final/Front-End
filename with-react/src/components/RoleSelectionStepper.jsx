import React, { useState } from "react";
import { Row, Img } from "./";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

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
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleRoleSelect("author")}
              className={`w-full bg-light_green col-span-1 sm:col-span-2 p-2  rounded-md  ${
                selectedRole === "author"
                  ? "  shadow-md shadow-green-300 border-2 border-green-900/40 border-medium_green text-grey-700/90"
                  : " text-dark_green shadow-md hover:border-dark_green "
              }`}
            >
              <div className="w-7/8 h-40 bg-white_A700_b2 m-4">
                <Img src="images/teaching.png" />
              </div>
              Author
            </button>
            <button
              onClick={() => handleRoleSelect("learner")}
              className={`w-full bg-light_green col-span-1 sm:col-span-2 p-2 rounded-md ${
                selectedRole === "learner"
                  ? " shadow-md shadow-green-300 border-2 border-green-900/40 border-medium_green text-grey-700/90"
                  : "text-dark_green shadow-md hover:border-dark_green "
              }`}
            >
              <div className="w-7/8 h-40 bg-white_A700_b2 m-4">
                <Img src="images/students-in-a-class.png" />
              </div>
              Learner
            </button>
          </div>
        ) : (
          form
        )}
      </Row>
    );
  };

  return (
    <div>
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
