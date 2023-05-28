import React from "react";
import { Box, Card, Stack, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

const StyledCover = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  maxHeight: "400px",
  objectFit: "cover",
  position: "absolute",
});

export default function LessonCard({ lesson }) {
  return (
    <Box sx={{ mt: 3 }}>
      <Card
        sx={{
          p: 2,
          borderRadius: "10px",
          backgroundColor: "#F3F3F3",
        }}
      >
        <Stack direction="row">
          <Card
            sx={{
              width: "150px",
              height: "80px",
            }}
          >
            <StyledCover alt={lesson.title} src={lesson.thumbnailLink} />
          </Card>
          <Box sx={{ ml: 3, py: 1 }}>
            <Typography variant="h6" textAlign="start">
              {lesson.title}
            </Typography>
            <Typography variant="subtitle2" textAlign="start">
              {lesson.duration} Mins
            </Typography>
          </Box>
        </Stack>
      </Card>
    </Box>
  );
}
