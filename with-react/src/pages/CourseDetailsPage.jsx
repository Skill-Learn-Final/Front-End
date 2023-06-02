import {
  Accordion,
  Box,
  Button,
  Card,
  Chip,
  Container,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { alpha, styled } from "@mui/material/styles";
import SvgColor from "components/svg-color/SvgColor";
import axios from "axios";
import { useParams } from "react-router-dom";
import Iconify from "components/iconify/Iconify";
import ChapterCard from "sections/@dashboard/blog/ChapterCard";
import { difficultyColor } from "utils/cssStyles";

const StyledCardMedia = styled("div")({
  position: "relative",
  height: "400px",
  backgroundColor: "#F3F3F3",
  opacity: 0.8,
  backgroundImage:
    "adial-gradient(#d8d8d8 1.1500000000000001px, #F3F3F3 1.1500000000000001px)",
  backgroundSize: "23px 23px",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
});

const StyledCover = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  maxHeight: "400px",
  objectFit: "contain",
  position: "absolute",
});

export default function CourseDetailsPage() {
  const [course, setCourse] = React.useState({});
  const [chapters, setChapters] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [resource, setResource] = React.useState({});

  const { id } = useParams();

  const fetchCourse = () => {
    axios.get("/courses/" + id).then((res) => {
      setCourse(res.data.data);
    });
  };

  const publishCourse = () => {
    axios.put(`/courses/${id}/publish`, {}).then(() => {
      fetchCourse();
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`/courses/${course.id}/chapters/`, {
        title,
        description,
      })
      .then((res) => {
        fetchCourse();
        handleClose();
      });
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  return (
    <>
      <Helmet>
        <title> Dashboard: Courses | Skill Learn </title>
      </Helmet>

      <Container>
        <StyledCardMedia>
          <SvgColor
            color="paper"
            src="/assets/icons/shape-avatar.svg"
            sx={{
              width: 80,
              height: 36,
              zIndex: 9,
              bottom: -15,
              position: "absolute",
              color: "background.paper",
            }}
          />
          {/* <StyledAvatar
            alt={author.name}
            src={author.avatarUrl}
            sx={{
              ...((latestPostLarge || latestPost) && {
                zIndex: 9,
                top: 24,
                left: 24,
                width: 40,
                height: 40,
              }),
            }}
          /> */}

          <StyledCover alt={course.title} src={course.coursePosterLink} />
        </StyledCardMedia>
        <Box sx={{ mt: 3, px: 2 }}>
          <Typography variant="h2" sx={{ textAlign: "start" }}>
            {course.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", mt: 3, px: 2 }}
          >
            In today's data-driven world, the ability to extract insights and
            make informed decisions from vast amounts of information is a
            valuable skill. The Introduction to Data Science course offers a
            comprehensive introduction to the exciting field of data science,
            providing students with the foundational knowledge and practical
            skills necessary to tackle real-world data challenges.
            <br />
            <br /> Throughout this course, students will explore the key
            concepts and techniques used in data science, including data
            collection, data cleaning, data visualization, statistical analysis,
            and machine learning. They will gain hands-on experience with
            popular data science tools and programming languages such as Python
            and R, enabling them to manipulate and analyze data effectively. The
            course will also delve into various data science methodologies and
            frameworks, such as exploratory data analysis, predictive modeling,
            and data storytelling. Students will learn how to apply these
            methodologies to extract meaningful insights, identify patterns, and
            develop data-driven solutions to complex problems.
            <br />
            <br /> Moreover, the course will emphasize the ethical
            considerations and responsible use of data in today's society.
            Students will explore topics such as data privacy, bias, and
            fairness, equipping them with the knowledge to make ethical
            decisions when working with data. By the end of the course, students
            will have a solid understanding of the fundamental principles of
            data science and will be able to approach data-related challenges
            with confidence. Whether pursuing a career in data science or
            seeking to enhance their analytical skills, this course provides a
            strong foundation for future learning and application in the
            data-driven world.
          </Typography>

          <Stack direction="row" marginTop={5} px={2} alignItems="center">
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "start" }}
              marginRight={3}
            >
              Categories:
            </Typography>
            {course.categories?.map((category) => (
              <Chip
                key={category.id}
                label={category.category}
                sx={{ mr: 1 }}
              />
            ))}
          </Stack>
          <Stack direction="row" marginTop={2} px={2} alignItems="center">
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "start" }}
              marginRight={3}
            >
              Difficulty:
            </Typography>
            <Chip
              label={course.difficulty}
              color={difficultyColor(course.difficulty)}
              variant="outlined"
            />
          </Stack>

          <Box sx={{ mt: 5 }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h3" sx={{ textAlign: "start" }}>
                Content
              </Typography>
              {!course.isPublished && (
                <Button
                  startIcon={<Iconify icon="eva:plus-fill" />}
                  onClick={handleOpen}
                >
                  Add Chapter
                </Button>
              )}
            </Stack>

            <Box sx={{ mt: 3 }}>
              {!course.chapters && (
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  No Content
                </Typography>
              )}

              {course.chapters &&
                course.chapters.map((chapter) => (
                  <ChapterCard
                    key={chapter.id}
                    chapter={chapter}
                    courseId={course.id}
                    canEdit={!course.isPublished}
                  />
                ))}
            </Box>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
              sx={{ mt: 6 }}
            >
              {course.isPublished && !course.isReviewed && (
                <Typography
                  variant="body2"
                  color="primary"
                  border={1}
                  px={2}
                  py={1}
                  borderRadius={1}
                >
                  Your Course is Being Reviewed. Once the Review is done, your
                  course will go live. Thank You!
                </Typography>
              )}
              {!course.isPublished && (
                <Button onClick={publishCourse} variant="outlined" size="large">
                  Publish
                </Button>
              )}
            </Stack>
          </Box>
        </Box>
      </Container>

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

            <Button
              variant="outlined"
              sx={{ mt: 3 }}
              onClick={handleFormSubmit}
            >
              Create Chapter
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
