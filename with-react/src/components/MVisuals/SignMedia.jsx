// import { CardMedia } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import React from "react";
// // media components for Log in and Register

// const SignMedia = styled(CardMedia)(({ theme }) => ({
//   maxWidth: "0",
//   [theme.breakpoints.up("sm")]: {
//     maxWidth: "100%",
//   },
//   display: "none",
//   [theme.breakpoints.up("sm")]: {
//     display: "block",
//   },
//   height: "25px",
//   [theme.breakpoints.up("sm")]: {
//     height: "100%",
//   },
// }));

// export default SignMedia;

import { CardMedia } from "@mui/material";
import React from "react";
// media components for Log in and Register
const SignMedia = ({ imageUrl, alt, ...props }) => {
  return (
    <CardMedia
      sx={{
        maxWidth: { xs: 0, sm: "100%" },
        height: { xs: "25px", sm: "100%" },
      }}
      component="img"
      image={imageUrl}
      alt={alt}
      {...props}
    />
  );
};

export default SignMedia;
