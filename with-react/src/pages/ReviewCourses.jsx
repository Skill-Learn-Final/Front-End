import { Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import {
  BlogPostCard,
  BlogPostsSearch,
  BlogPostsSort,
} from "sections/@dashboard/blog";

const SORT_OPTIONS = [
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" },
  { value: "oldest", label: "Oldest" },
];

const ReviewCourses = () => {
  const [courses, setCourses] = useState([]);

  const { t } = useTranslation();

  const fetchCourses = () => {
    axios.get("/courses/byReviewer").then((res) => {
      setCourses(res.data.data);
    });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4" gutterBottom>
          {t("Courses_To_Review")}
        </Typography>
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
        <Typography variant="h6" marginTop={1}>
          {t("No_Courses_to_Review_Yet")}
        </Typography>
      )}
      <Grid container spacing={3}>
        {courses.map((post, index) => (
          <BlogPostCard
            key={post.id}
            post={post}
            index={index}
            link={"/dashboard/review-courses/" + post.id}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default ReviewCourses;
