import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import {
  Autocomplete,
  Avatar,
  Box,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CourseDetails } from "pages/CourseDetailsPage";
import UserDisplay from "../user/UserDisplay";

export default function ReviewerSelect({ onSubmit, reviewers, course }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  const handleSubmit = () => {
    onSubmit(value.id);
    setValue(null);
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Assign</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        {/* <DialogTitle>Select Reviewer</DialogTitle> */}
        <DialogContent>
          <CourseDetails course={course} />
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" mb={1}>
              Select Reviewer
            </Typography>
            <Autocomplete
              options={reviewers}
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Reviewer" />
              )}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <UserDisplay
                    name={`${option.firstName} ${option.lastName}`}
                    profilePic={"https://i.pravatar.cc/300" + option.id}
                  />
                </li>
              )}
              sx={{ width: "500px" }}
              getOptionLabel={(option) =>
                `${option.firstName} ${option.lastName}`
              }
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
