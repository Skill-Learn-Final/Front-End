import React from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const TableOfContentsContainer = styled(Grid)(({ theme }) => ({
  flexDirection: "column",
  padding: "0 16px", // Enable vertical scrolling for the table of contents container
}));

const LessonContainer = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const LessonThumbnail = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  marginBottom: theme.spacing(1),
}));

const LessonTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
}));

const LessonDuration = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "#E8EBEE" : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const TableOfContents = () => {
  const chapters = [
    {
      chapterTitle: "Chapter 1",
      lessons: [
        {
          thumbnail: "path/to/thumbnail1.jpg",
          title: "Lesson 1",
          duration: "10:00",
        },
        {
          thumbnail: "path/to/thumbnail2.jpg",
          title: "Lesson 2",
          duration: "15:00",
        },
      ],
    },
    {
      chapterTitle: "Chapter 2",
      lessons: [
        {
          thumbnail: "path/to/thumbnail3.jpg",
          title: "Lesson 3",
          duration: "20:00",
        },
        {
          thumbnail: "path/to/thumbnail4.jpg",
          title: "Lesson 4",
          duration: "25:00",
        },
      ],
    },
  ];

  return (
    <TableOfContentsContainer container spacing={3}>
      {chapters.map((chapter, index) => (
        <Accordion key={index}>
          <AccordionSummary color="transparent">
            <Typography variant="h6">{chapter.chapterTitle}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {chapter.lessons.map((lesson, index) => (
              <LessonContainer container spacing={2} key={index}>
                <Grid item xs={4}>
                  <LessonThumbnail src={lesson.thumbnail} alt={lesson.title} />
                </Grid>
                <Grid item xs={8}>
                  <LessonTitle variant="subtitle1">{lesson.title}</LessonTitle>
                  <LessonDuration variant="body2">
                    {lesson.duration}
                  </LessonDuration>
                </Grid>
              </LessonContainer>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </TableOfContentsContainer>
  );
};

export default TableOfContents;
