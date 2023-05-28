import { NavBarP, UserDetailInput } from "components";
import React, { useContext, useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";

import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

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

const BuyCurrency = () => {
  const [currentBalance, setCurrentBalance] = useState(
    localStorage.getItem("balance")
  );

  const [modalState, setModalState] = useState(false);
  const [modalContent, setModalContent] = useState(false);

  const [password, setPassword] = useState("");

  useEffect(() => {}, [currentBalance]);

  function closeModal() {
    setModalState(false);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const buyCurrencyRequest = () => {
    const user = {
      email: "eliayele74@gmail.com",
      balance: 500,
      password: password,
    };
    axios
      .post("/local/buy_currency", user)
      .then((res) => {
        localStorage.setItem("balance", res.data.balance);
        setCurrentBalance(res.data.balance);
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        // console.log(res);
      })
      .catch((err) => {
        toast.error(err.response.data, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

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
            You are about to purchase {modalContent} virtual currency. Confirm
            your choice and input your password below :
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
                buyCurrencyRequest();
                setModalState(false);
              }}
              type="submit"
              className="bg-dark_green text-white font-bold text-lg rounded-md hover:bg-green-900/80 focus:bg-dark_green py-2 px-10 mt-8"
            >
              Purchase Currency
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
        <div className="bg-white grid grid-cols-4 shadow-md w-3/4 h-4/5">
          <div className="flex flex-col p-4 col-span-1">
            <div className="flex flex-col w-3/4 h-1/2 bg-gray_600"></div>
            <p>Current Balance: {currentBalance}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 p-8 col-span-3">
            <div className="flex flex-col font-bold justify-evenly p-4 text-lg col-span-1 text-center relative">
              <p>Purchase Virtual Currency</p>
              <input
                type="text"
                placeholder="Enter Amount"
                className="h-[3rem]"
              />
            </div>
            <div className="currencyDefualtOptions grid grid-cols-2 gap-4 relative">
              <p className="text-lg font-sans col-span-2 h-[1rem]">
                Or Select default amount from below:
              </p>
              <div
                className="cursor-pointer bg-gray_600"
                onClick={() => {
                  setModalContent("50");
                  setModalState(true);

                  // sendRequest();
                }}
              >
                50
              </div>
              <div
                className="flex align-center cursor-pointer bg-gray_600"
                onClick={() => {
                  setModalContent("100");
                  setModalState(true);

                  // sendRequest();
                }}
              >
                100
              </div>
              <div
                className="cursor-pointer bg-gray_600"
                onClick={() => {
                  setModalContent("200");
                  setModalState(true);

                  // sendRequest();
                }}
              >
                200
              </div>
              <div
                className="cursor-pointer bg-gray_600"
                onClick={() => {
                  setModalContent("300");
                  setModalState(true);

                  // sendRequest();
                }}
              >
                300
              </div>
              <div
                className="cursor-pointer bg-gray_600"
                onClick={() => {
                  setModalContent("400");
                  setModalState(true);

                  // sendRequest();
                }}
              >
                400
              </div>
              <div
                className="cursor-pointer bg-gray_600"
                onClick={() => {
                  setModalContent("500");
                  setModalState(true);

                  // sendRequest();
                }}
              >
                500
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyCurrency;
