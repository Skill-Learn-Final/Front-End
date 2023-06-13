import React from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import LessonCard from "./LessonCard";

const TableOfContentsContainer = styled(Grid)(({ theme }) => ({
  flexDirection: "column",
  padding: "0 16px", // Enable vertical scrolling for the table of contents container
}));

const LessonContainer = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const LessonThumbnail = styled("img")(({ theme }) => ({
  width: "auto",
  height: "fit",
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

const TableOfContents = ({ chapters, playVideo }) => {
  return (
    <TableOfContentsContainer container spacing={3}>
      {chapters &&
        chapters.map((chapter, index) => (
          <Accordion key={index}>
            <AccordionSummary color="transparent">
              <Typography variant="h6">{chapter.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {chapter.lessons.map((lesson, index) => (
                <LessonCard
                  lesson={lesson}
                  key={index}
                  onClick={() => playVideo(lesson)}
                />
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
    </TableOfContentsContainer>
  );
};

export default TableOfContents;
