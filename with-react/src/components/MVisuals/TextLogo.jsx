import React from "react";
import { Typography } from "@mui/material";

const TextLogo = (fontSize) => {
  return (
    <Typography
      component="span"
      href="/"
      sx={{
        mr: 2,
        display: "flex",
        textDecoration: "none",
      }}
    >
      <b
        style={{
          fontFamily: "'Calibri', sans-serif",
          fontWeight: 700,
          fontSize: `${fontSize}em`,
          color: "#006017",
        }}
      >
        Skill Learn
      </b>
    </Typography>
  );
};

export default TextLogo;
