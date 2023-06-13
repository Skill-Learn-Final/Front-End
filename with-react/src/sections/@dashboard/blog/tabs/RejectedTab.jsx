import { Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import BlogPostsSearch from "../BlogPostsSearch";
import BlogPostsSort from "../BlogPostsSort";
import BlogPostCard from "../BlogPostCard";
import axios from "axios";

const SORT_OPTIONS = [
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" },
  { value: "oldest", label: "Oldest" },
];

const RejectedTab = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = () => {
    axios.get("/courses?status=rejected").then((res) => {
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
          Rejected Courses
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
          No Rejected Courses!
        </Typography>
      )}
      <Grid container spacing={3}>
        {courses.map((post, index) => (
          <BlogPostCard key={post.id} post={post} index={index} />
        ))}
      </Grid>
    </Container>
  );
};

export default RejectedTab;
