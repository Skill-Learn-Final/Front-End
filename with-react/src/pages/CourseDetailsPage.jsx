import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Chip,
  Container,
  Dialog,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
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
import { List } from "antd";
import { Info } from "@mui/icons-material";
import ChapterForm from "sections/@dashboard/blog/ChapterForm";

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

const EMPTY_CHAPTER = {
  title: "",
  description: "",
  resource: {},
};

export default function CourseDetailsPage() {
  const [course, setCourse] = React.useState({});
  const [chapter, setChapter] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);

  const handleOpen = (chapter = null) => {
    if (chapter) {
      setChapter({
        ...chapter,
        resource: {},
      });
      setEdit(true);
    } else {
      setChapter(EMPTY_CHAPTER);
      setEdit(false);
    }

    setOpen(true);
  };

  const { id } = useParams();

  const fetchCourse = () => {
    axios.get("/courses/" + id).then((res) => {
      setCourse(res.data.data);
    });
  };

  const handleClose = (fetch = false) => {
    if (fetch) {
      fetchCourse();
    }

    setChapter({});
    setEdit(false);
    setOpen(false);
  };

  const publishCourse = () => {
    axios.put(`/courses/${id}/publish`, {}).then(() => {
      fetchCourse();
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
        <CourseDetails course={course} />

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
                onClick={() => handleOpen(null)}
              >
                Add Chapter
              </Button>
            )}
          </Stack>

          <Box sx={{ mt: 3 }}>
            {course && course.chapters?.length === 0 && (
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
                  openToEdit={() => handleOpen(chapter)}
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

          {course.isReviewed && !course.isApproved && (
            <Accordion>
              <AccordionSummary
                expandIcon={<Iconify icon="mdi:chevron-down" />}
              >
                <Typography>
                  Your Course was rejected for the following reasons
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  {course.rejectionReasons.map((reason, i) => (
                    <ListItem key={i}>
                      <ListItemIcon>
                        <Info />
                      </ListItemIcon>
                      <ListItemText primary={reason} />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          )}
        </Box>
      </Container>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <ChapterForm
          handleClose={handleClose}
          edit={edit}
          chapter={chapter}
          courseId={course.id}
        />
      </Dialog>
    </>
  );
}

export function CourseDetails({ course }) {
  return (
    <>
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
        <Typography variant="body1" sx={{ textAlign: "justify", mt: 3, px: 2 }}>
          {course.description}
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
            <Chip key={category.id} label={category.category} sx={{ mr: 1 }} />
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
        <Stack direction="row" marginTop={2} px={2} alignItems="center">
          <Typography
            variant="subtitle1"
            sx={{ textAlign: "start" }}
            marginRight={3}
          >
            Language:
          </Typography>
          <Typography variant="subtitle1">{course.language}</Typography>
        </Stack>
        <Stack direction="row" marginTop={2} px={2} alignItems="center">
          <Typography
            variant="subtitle1"
            sx={{ textAlign: "start" }}
            marginRight={3}
          >
            Estimated Time:
          </Typography>
          <Typography variant="subtitle1">
            {course.estimatedCompletionTime}
          </Typography>
        </Stack>
      </Box>
    </>
  );
}
