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
