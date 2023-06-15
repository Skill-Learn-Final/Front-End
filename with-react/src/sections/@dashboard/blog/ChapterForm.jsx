import {
  Box,
  Button,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import Iconify from "components/iconify/Iconify";
import React from "react";

function ChapterForm({ chapter, courseId, handleClose, edit }) {
  const [title, setTitle] = React.useState(chapter.title);
  const [description, setDescription] = React.useState(chapter.description);
  const [resource, setResource] = React.useState(chapter.resource);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!edit) {
      axios
        .post(`/courses/${courseId}/chapters/`, {
          title,
          description,
        })
        .then((res) => {
          handleClose(true);
        });
    } else {
      axios
        .put(`/courses/${courseId}/chapters/${chapter.id}`, {
          title,
          description,
        })
        .then((res) => {
          handleClose(true);
        });
    }
  };

  return (
    <>
      <DialogTitle id="scroll-dialog-title">
        {edit ? "Edit Chapter" : "New Chapter"}
      </DialogTitle>
      <DialogContent dividers>
        <Box
          component="form"
          style={{
            padding: "20px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Course Title"
            variant="outlined"
            fullWidth
            sx={{ mb: 3 }}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />

          <TextField
            id="standard-textarea"
            label="Course Description"
            placeholder="Type something..."
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            sx={{ mb: 3 }}
          />

          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: "6px",
              mb: 3,
            }}
            fullWidth
          >
            <Button
              component="label"
              variant="text"
              startIcon={<Iconify icon="material-symbols:file-upload" />}
              sx={{ marginRight: "1rem" }}
            >
              Resource
              <input
                type="file"
                accept=".zip,.rar,.7zip"
                hidden
                onChange={(e) => {
                  setResource(e.target.files[0]);
                }}
              />
            </Button>
            {resource.name}
          </Box>

          <Button variant="outlined" sx={{ mt: 3 }} onClick={handleFormSubmit}>
            {edit ? "Edit" : "Create"}
          </Button>
        </Box>
      </DialogContent>
    </>
  );
}

export default ChapterForm;
