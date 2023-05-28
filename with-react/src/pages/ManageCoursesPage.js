import { Helmet } from "react-helmet-async";
// @mui
import {
  Grid,
  Container,
  Stack,
  Typography,
  Modal,
  Box,
  Button,
  TextField,
  inputClasses,
  Autocomplete,
  ToggleButtonGroup,
  ToggleButton,
  Snackbar,
  Alert,
} from "@mui/material";
// components
import Iconify from "../components/iconify";
import {
  BlogPostCard,
  BlogPostsSort,
  BlogPostsSearch,
} from "../sections/@dashboard/blog";
// mock
import POSTS from "../_mock/blog";
import { Link as RouterLink } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" },
  { value: "oldest", label: "Oldest" },
];

// ----------------------------------------------------------------------

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
};

export default function ManageCoursesPage() {
  const [courses, setCourses] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    axios.get("http://localhost:8080/categories/").then((res) => {
      setOpen(true);
      setCategories(res.data.data);
    });
  };
  const handleClose = () => setOpen(false);

  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [description, setDescription] = React.useState("");
  const [poster, setPoster] = React.useState({});
  const [courseCategories, setCourseCategories] = React.useState([]);
  const [difficulty, setDifficulty] = React.useState("Beginner");

  const fetchCourses = () => {
    axios.get("http://localhost:8080/courses").then((response) => {
      setCourses(response.data.data);
    });
  };

  const closeErrorMessage = () => {
    setError(false);
    setErrorMessage("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("title", title);
    form.append("description", description);
    form.append("price", price);
    form.append("difficulty", difficulty);
    form.append("coursePoster", poster);
    form.append("courseCategories", JSON.stringify(courseCategories));

    axios
      .post("http://localhost:8080/courses", form)
      .then(function (response) {
        fetchCourses();
        setOpen(false);
      })
      .catch(function (error) {
        setError(true);
        setErrorMessage(error.response.data.message);
      });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <Helmet>
        <title> Dashboard: Posts | Skill Learn </title>
      </Helmet>

      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            My Courses
          </Typography>
          <Button
            onClick={handleOpen}
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New Course
          </Button>
        </Stack>

        <Stack
          mb={5}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <BlogPostsSearch posts={POSTS} />
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack>

        <Grid container spacing={3}>
          {courses.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            New Course
          </Typography>
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
              id="outlined-basic"
              label="Course Slug"
              variant="outlined"
              fullWidth
              sx={{ mb: 3 }}
              value={title.toLowerCase().replace(/ /g, "-")}
              disabled
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
                Course Poster
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e) => {
                    console.log(e.target.files);
                    setPoster(e.target.files[0]);
                  }}
                />
              </Button>
              {poster.name}
            </Box>

            <TextField
              id="outlined-basic"
              label="Course Price"
              variant="outlined"
              type="number"
              fullWidth
              sx={{ mb: 3 }}
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />

            <TextField
              id="standard-textarea"
              label="Course Description"
              placeholder="Type something..."
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              sx={{ mb: 3 }}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />

            <Autocomplete
              multiple
              sx={{ mb: 3 }}
              id="tags-outlined"
              options={categories}
              getOptionLabel={(option) => option.category}
              filterSelectedOptions
              onChange={(_, value) => setCourseCategories(value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Categories"
                  placeholder="Course Categories"
                />
              )}
            />

            <Box sx={{ mb: 3 }}>
              <ToggleButtonGroup
                color="primary"
                value={difficulty}
                exclusive
                onChange={(e, value) => setDifficulty(value)}
                aria-label="Platform"
              >
                <ToggleButton value="Beginner">Beginner</ToggleButton>
                <ToggleButton value="Intermediate">Intermediate</ToggleButton>
                <ToggleButton value="Advanced">Advanced</ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Button
              variant="outlined"
              sx={{ mt: 3 }}
              onClick={handleFormSubmit}
            >
              Create Course
            </Button>
          </Box>
        </Box>
      </Modal>

      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={closeErrorMessage}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={closeErrorMessage}
          severity="error"
          sx={{ width: "100%" }}
          variant="filled"
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
