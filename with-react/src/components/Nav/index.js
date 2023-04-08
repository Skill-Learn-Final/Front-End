import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Row } from "components/Row";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-gray-800 w-[100%]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </div>
            <div className="md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Calendar
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Reports
                </a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button> */}
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Dashboard
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Team
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Projects
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Calendar
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Resort
              </a>
            </div>
          </div>
        )}
      </Transition>
    </header>
  );
}

// import React from "react";

// import {
//   Column,
//   Row,
//   Img,
//   Text,
//   SelectBox,
//   Button,
//   Line,
//   Stack,
//   List,
//   Grid,
//   Input,
// } from "components";
// import { useNavigate } from "react-router-dom";

// export const NavBarP = () => {
//   const navigate = useNavigate();
//   function home() {
//     navigate("/home");
//   }
//   function login() {
//     navigate("/login");
//   }
//   function signup() {
//     navigate("/register");
//   }
//   return (
//     /* <Sticky bg-white_A700 enabled={true} className="w-[100%]"> */

//     <header className=" bg-light_green rounded-radius30 w-[100%]">
//       <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1440px] ml-[auto] mr-[auto] md:p-[15px] p-[22px] sm:pl-[15px] sm:pr-[15px] sm:px-[15px] sm:py-[11px] w-[100%]">
//         <Row className="header-row w-[13%] sm:w-[100%] sm:mx-[0] sm:px-[0] flex-row flex">
//           <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center">
//             <Img
//               src="images/logo.png"
//               className="flex-shrink-0 sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[30px]"
//               alt="logo"
//             />
//             <Text
//               className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-black_900"
//               as="h5"
//               variant="h5"
//               onClick={home}
//             >
//               Skill-Learn
//             </Text>
//           </Row>
//           <div className="mobile-menu">
//             <div></div>
//           </div>
//         </Row>
//         <Row className="flex flex-row md:flex-wrap sm:flex-wrap sm:hidden md:ml-[37px] ml-[54px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%] common-row-list">
//           <Input
//             className="font-medium p-[0] text-[16px] placeholder:text-gray_700 text-gray_700 w-[90%]"
//             wrapClassName="flex p-[0] sm:mx-[0] sm:w-[100%] w-[90%]"
//             type="text"
//             name="search"
//             placeholder="Search"
//             size="smNav"
//             variant="OutlineGray300"
//           ></Input>
//           <Button
//             className="cursor-pointer font-medium min-w-[10%] text-[16px] text-center text-white_A700 "
//             shape="CustomBorderLR10"
//             size="mdNavIcn"
//             variant="DarkBlueBlack"
//           >
//             <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
//           </Button>
//         </Row>
//         <Row className="flex flex-row md:flex-wrap sm:flex-wrap sm:hidden items-end justify-center md:ml-[37px] ml-[54px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
//           <a
//             href={"javascript:"}
//             className="common-pointer cursor-pointer font-medium text-[20px] text-gray_901"
//             onClick={() => {}}
//             rel="noreferrer"
//           >
//             <FontAwesomeIcon icon={faCartShopping} />
//           </a>
//         </Row>
//         <Row className="sm:hidden md:ml-[5px] ml-[5px] sm:mx-[0] sm:px-[0] sm:w-[50%] w-[6%]">
//           <Button
//             className="cursor-pointer font-medium min-w-[20%] text-[12px] text-center w-[max-content]"
//             size="mdNavIcn"
//             variant="OutlineGray500"
//             shape="RoundedBorder1"
//             onClick={login}
//           >
//             <b>Login</b>
//           </Button>
//         </Row>
//         <Row className="sm:hidden md:ml-[2px] ml-[2px] sm:mx-[0] sm:px-[0] sm:w-[50%] w-[6%]">
//           <Button
//             className="cursor-pointer font-medium min-w-[20%] text-[12px] text-center text-white_A700 w-[max-content] "
//             size="mdNavIcn"
//             shape="RoundedBorder1"
//             variant="DarkBlueBlack"
//             onClick={signup}
//           >
//             <b>Signup</b>
//           </Button>
//         </Row>
//       </Row>
//     </header>
//     /* </Sticky> */
//   );
// };
