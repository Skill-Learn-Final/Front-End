import { styled } from "@mui/material/styles";
import { NavBarP } from "components";
import React from "react";
import { Outlet } from "react-router-dom";

// const Main = styled("div")(({ theme }) => ({
//   flexGrow: 1,
//   overflow: "auto",
//   minHeight: "100%",
//   paddingTop: APP_BAR_MOBILE + 24,
//   paddingBottom: theme.spacing(10),
//   [theme.breakpoints.up("lg")]: {
//     paddingTop: APP_BAR_DESKTOP + 24,
//     paddingLeft: theme.spacing(2),
//     paddingRight: theme.spacing(2),
//   },
// }));

const LearnerSiteLayout = () => {
  return (
    <div>
      <NavBarP />

      {/* <Main> */}
      <Outlet />
      {/* </Main> */}
    </div>
  );
};

export default LearnerSiteLayout;
