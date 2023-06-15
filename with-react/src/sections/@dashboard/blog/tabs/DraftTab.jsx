import { Helmet } from "react-helmet-async";
// @mui
import {
  Grid,
  Container,
  Stack,
  Typography,
  Button,
  Snackbar,
  Alert,
  Dialog,
} from "@mui/material";
// components
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from "../";
// mock
import React, { useEffect } from "react";
import axios from "axios";
import Iconify from "components/iconify/Iconify";
import CourseFormModal from "../CourseFormModal";
import { toast } from "react-toastify";

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

const EMPTY_COURSE = {
  title: "",
  description: "",
  price: 0,
  difficulty: "Beginner",
  poster: {},
  courseCategories: [],
  language: "English",
  estimatedCompletionTime: "0 weeks",
};

const DraftTab = () => {
  const [courses, setCourses] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const [course, setCourse] = React.useState(EMPTY_COURSE);
  const [edit, setEdit] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = (course = null) => {
    if (course !== null) {
      setCourse({
        ...course,
        poster: {},
      });
      setEdit(true);
    } else {
      setCourse(EMPTY_COURSE);
      setEdit(false);
    }

    setOpen(true);
  };

  const handleClose = (refetch = false) => {
    if (refetch) {
      fetchCourses();
    }

    setCourse(EMPTY_COURSE);
    setOpen(false);
  };

  const fetchCourses = () => {
    axios.get("/courses?status=draft").then((response) => {
      setCourses(response.data.data);
    });
  };

  const deleteCourse = (id) => {
    axios
      .delete(`/courses/${id}`)
      .then(function (response) {
        fetchCourses();
        toast.success("Course deleted successfully");
      })
      .catch(function (error) {
        toast.error(error.response.data.message);
      });
  };

  const closeErrorMessage = () => {
    setError(false);
    setErrorMessage("");
  };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   const form = new FormData();
  //   form.append("title", title);
  //   form.append("description", description);
  //   form.append("price", price);
  //   form.append("difficulty", difficulty);
  //   form.append("coursePoster", poster);
  //   form.append("courseCategories", JSON.stringify(courseCategories));
  //   form.append("language", language);
  //   form.append(
  //     "estimatedCompletionTime",
  //     estimatedCompletionTime + " " + unitOfTime
  //   );

  //   axios
  //     .post("/courses", form)
  //     .then(function (response) {
  //       fetchCourses();
  //       setOpen(false);
  //     })
  //     .catch(function (error) {
  //       setError(true);
  //       setErrorMessage(error.response.data.message);
  //     });
  // };

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
            Draft Courses
          </Typography>
          <Button
            onClick={() => handleOpen(null)}
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
          <BlogPostsSearch posts={courses} />
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack>

        {courses.length === 0 && (
          <>
            <Typography variant="h6" paragraph>
              No Draft Courses
            </Typography>

            <Typography variant="body2">Create a new course!</Typography>
            <Button
              onClick={() => handleOpen(null)}
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              New Course
            </Button>
          </>
        )}
        <Grid container spacing={3}>
          {courses.map((post, index) => (
            <BlogPostCard
              key={post.id}
              post={post}
              index={index}
              openToEdit={() => handleOpen(post)}
              deleteCourse={() => deleteCourse(post.id)}
            />
          ))}
        </Grid>
      </Container>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <CourseFormModal
          handleClose={handleClose}
          course={course}
          edit={edit}
        />
      </Dialog>

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
};

export default DraftTab;
