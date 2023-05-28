import { CourseDet, UserDetailInput } from "components";
import React, { useState } from "react";

import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

// ================== Move this to separate file and import because used many places ==================
const customStyles = {
  content: {
    width: "50%",
    height: "50%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    position: "relative",
    // marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
// ============================================== up to here that is =====================================

const PurchaseCourse = (courseId) => {
  const [modalState, setModalState] = useState();
  const [modalContent, setModalContent] = useState();
  const [password, setPassword] = useState();

  function closeModal() {
    setModalState(false);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function purchaseCourse() {}

  return (
    <>
      <Modal
        isOpen={modalState}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col absolute top-[20%] left-[10%]">
          <p className="text-lg w-3/4">
            You are about to purchase a course. {modalContent} will be charged
            to your virtual wallet. Confirm your choice and input your password
            below :
          </p>
          <div className="w-1/2 mt-8">
            <UserDetailInput
              id="pass-word"
              label="Password"
              type="password"
              // value={password}
              placeholder="contain numbers, letters and symbols."
              onChange={handlePasswordChange}
              autoComplete="new-password"
            />
            <button
              onClick={() => {
                purchaseCourse();
                setModalState(false);
              }}
              type="submit"
              className="bg-dark_green text-white font-bold text-lg rounded-md hover:bg-green-900/80 focus:bg-dark_green py-2 px-10 mt-8"
            >
              Purchase Course
            </button>
          </div>
        </div>
        <FontAwesomeIcon
          className="text-gray_600 cursor-pointer absolute right-5 top-5"
          size="2x"
          icon={faClose}
          onClick={closeModal}
        />
      </Modal>
      <div className="bg-light_green emptyPage">
        <div className="grid grid-cols-3 gap-4 container bg-gray_300 rounded-md w-4/5 h-3/5 p-4">
          <div className="col-span-2">
            <CourseDet
              id={1}
              imageDir={"/images/teacher.jpg"}
              courseName={
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa maiores provide"
              }
              price={20}
              rating={4.3}
              authorId={"Mr. Teacher"}
              description={"This is a course about making videos"}
            />
          </div>
          <div className="px-8 col-span-1">
            <p className="font-sans">
              You are going to purchase the following course
            </p>
            <div className="flex flex-row justify-between w-5/6 mt-8 font-bold text-lg">
              <p>Total Price</p>
              <p>$300</p>
            </div>
            <button
              className="bg-dark_green w-5/6 py-2 mt-4 font-bold text-white"
              onClick={() => {
                setModalContent(300);
                setModalState(true);
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseCourse;
