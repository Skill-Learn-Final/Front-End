import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";

const UserDisplay = ({ profilePic, name }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={2} fullWidth>
      <Avatar alt={name} src={profilePic} />
      <Typography variant="subtitle2" noWrap>
        {name}
      </Typography>
    </Stack>
  );
};

export default UserDisplay;
