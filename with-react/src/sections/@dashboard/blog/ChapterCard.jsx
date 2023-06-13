import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Iconify from "components/iconify/Iconify";
import React from "react";
import axios from "axios";
import LessonCard from "./LessonCard";

export default function ChapterCard({ chapter, courseId, canEdit }) {
  const [lessons, setLessons] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title, setTitle] = React.useState("");
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [video, setVideo] = React.useState({});
  const [thumbnail, setThumbnail] = React.useState({});

  const fetchLessons = () => {
    axios
      .get(`/courses/${courseId}/chapters/${chapter.id}/lessons/`)
      .then((res) => {
        setLessons(res.data.data);
      });
  };

  const handleFormSubmit = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("duration", hours * 60 + minutes);
    formData.append("video", video);
    formData.append("thumbnail", thumbnail);

    axios

      .post(`/courses/${courseId}/chapters/${chapter.id}/lessons/`, formData)
      .then((res) => {
        fetchLessons();
        handleClose();
      });
  };

  React.useEffect(() => {
    fetchLessons();
  }, []);

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<Iconify icon="mdi:chevron-down" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4">{chapter.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: "100%", px: 2 }}>
            <Typography textAlign="start">{chapter.description}</Typography>

            <Box sx={{ mt: 3 }}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" textAlign="start">
                  Lessons
                </Typography>
                {canEdit && (
                  <Button
                    startIcon={<Iconify icon="eva:plus-fill" />}
                    onClick={handleOpen}
                  >
                    Add Lesson
                  </Button>
                )}
              </Stack>
              <Divider sx={{ mt: 1 }} />

              {lessons.length === 0 && (
                <Typography variant="body1" marginTop={1}>
                  No lessons yet
                </Typography>
              )}

              {lessons.map((lesson) => (
                <LessonCard key={lesson.id} lesson={lesson} />
              ))}
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 1,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            New Lesson
          </Typography>
          <Box
            component="form"
            style={{
              padding: "20px",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              fullWidth
              sx={{ mb: 3 }}
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />

            <Stack direction="row" gap={2}>
              <TextField
                id="outlined-basic"
                label="Hours"
                variant="outlined"
                fullWidth
                sx={{ mb: 3 }}
                onChange={(e) => setHours(e.target.value)}
                value={hours}
              />

              <TextField
                id="outlined-basic"
                label="Minutes"
                variant="outlined"
                fullWidth
                sx={{ mb: 3 }}
                onChange={(e) => setMinutes(e.target.value)}
                value={minutes}
              />
            </Stack>

            {/* <TextField
              id="standard-textarea"
              label="Duration"
              placeholder="Type something..."
              type="number"
              variant="outlined"
              fullWidth
              onChange={(e) => setDuration(e.target.value)}
              value={duration}
              sx={{ mb: 3 }}
            /> */}

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
                Thumbnail
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  hidden
                  onChange={(e) => {
                    setThumbnail(e.target.files[0]);
                  }}
                />
              </Button>
              {thumbnail.name}
            </Box>

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
                Video
                <input
                  type="file"
                  accept="video/*"
                  hidden
                  onChange={(e) => {
                    setVideo(e.target.files[0]);
                  }}
                />
              </Button>
              {video.name}
            </Box>

            <Button
              variant="outlined"
              sx={{ mt: 3 }}
              onClick={handleFormSubmit}
            >
              Create Lesson
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
