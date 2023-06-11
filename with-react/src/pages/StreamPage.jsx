import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import VideoPlayer from "sections/@dashboard/blog/VideoPlayer";
import TableOfContents from "sections/@dashboard/blog/TableOfContents";
import {
  Avatar,
  Box,
  Button,
  Chip,
  CircularProgress,
  Divider,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { difficultyColor } from "utils/cssStyles";
import RejectionReasonsSelect from "sections/@dashboard/admin/reviews/LabelSelect";
import { toast } from "react-toastify";

const StreamContainer = styled(Grid)(({ theme }) => ({
  flexGrow: 1,
}));

const StyledCover = styled("img")({
  width: "100%",
  objectFit: "contain",
});

const VideoPlayerContainer = styled(Grid)(({ theme }) => ({
  flex: 1,
  padding: "0 16px",
  height: "500px", // Set the height of the video player container to 500px
  overflow: "hidden", // Hide any overflow content
}));

const TableOfContentsContainer = styled(Grid)(({ theme }) => ({
  flex: 1,
  height: "500px", // Set the height of the table of contents container to 500px
  overflowY: "scroll",
  marginTop: "10px", // Add padding to the table of contents container
  borderLeft: "1px dashed #ccc",
}));

const StreamPage = () => {
  const [course, setCourse] = React.useState(null);
  const [video, setVideo] = React.useState("");
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [rejectionReasons, setRejectionReasons] = React.useState([]);

  const { id } = useParams();

  const fetchCourse = () => {
    axios
      .get("/courses/" + id)
      .then((res) => {
        setCourse(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const approveCourse = () => {
    axios
      .put("/courses/" + id + "/approve")
      .then((res) => {
        toast.success(
          "Course Approved Successfully! Redirecting you back to review list.",
          {
            position: "top-center",
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
        navigate(-1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const rejectCourse = () => {
    axios
      .put("/courses/" + id + "/reject", {
        rejectionReasons,
      })
      .then((res) => {
        toast.success(
          "Course Rejected Successfully!  Redirecting you back to review list.",
          {
            position: "top-center",
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
        navigate(-1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const playVideo = (lesson) => {
    console.log(lesson.videoLink);
    setVideo("http://localhost:8080/api/courses/stream/" + lesson.id);
  };

  React.useEffect(() => {
    fetchCourse();
  }, []);

  if (!course)
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );

  return (
    <>
      <StreamContainer container spacing={3}>
        <VideoPlayerContainer item xs={12} md={8}>
          {video && (
            <ReactPlayer
              width="100%"
              controls={true}
              url={video}
              autoPlay
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload",
                  },
                },
              }}
              light={course.posterLink}
            />
          )}

          {!video && (
            <StyledCover alt={course.title} src={course.coursePosterLink} />
          )}
        </VideoPlayerContainer>

        <TableOfContentsContainer item xs={12} md={4}>
          <TableOfContents chapters={course.chapters} playVideo={playVideo} />
        </TableOfContentsContainer>
      </StreamContainer>
      <Grid container spacing={4} padding="24px 0">
        <Grid item container spacing={2} alignItems="center">
          <Grid item>
            <Avatar
              alt={course.creator.firstName}
              src={"https://i.pravatar.cc/300" + course.creator.id}
            />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">
              {course.creator.firstName} {course.creator.lastName}
            </Typography>
          </Grid>
        </Grid>

        <Grid item md={8}>
          <Stack spacing={2}>
            <Typography variant="h3" textAlign="start">
              {course.title}
            </Typography>
            <Typography variant="body1" textAlign="justify">
              {course.description}
            </Typography>
          </Stack>

          <Stack direction="row" marginTop={3} alignItems="center">
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
          <Stack direction="row" marginTop={2} alignItems="center">
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

          <Divider sx={{ mt: 6 }} />

          <Stack
            direction="row"
            marginTop={3}
            px={4}
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              color="success"
              variant="outlined"
              size="large"
              onClick={approveCourse}
            >
              Approve
            </Button>
            <Button
              color="error"
              variant="outlined"
              size="large"
              onClick={handleOpen}
            >
              Reject
            </Button>
          </Stack>
        </Grid>
      </Grid>

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
            height: "fit-content",
          }}
        >
          <RejectionReasonsSelect onChange={setRejectionReasons} />
          <Stack direction="row" sx={{ mt: 4 }} justifyContent="space-between">
            <Button variant="outlined" color="error" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="outlined" onClick={rejectCourse}>
              Submit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default StreamPage;
