import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import VideoPlayer from "sections/@dashboard/blog/VideoPlayer";
import TableOfContents from "sections/@dashboard/blog/TableOfContents";
import { Avatar, Divider, Stack, Typography } from "@mui/material";

const StreamContainer = styled(Grid)(({ theme }) => ({
  flexGrow: 1,
}));

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
  return (
    <>
      <StreamContainer container spacing={3}>
        <VideoPlayerContainer item xs={12} md={8}>
          <VideoPlayer src="" />
        </VideoPlayerContainer>

        <TableOfContentsContainer item xs={12} md={4}>
          <TableOfContents />
        </TableOfContentsContainer>
      </StreamContainer>
      <Grid container spacing={4} padding="24px 0">
        <Grid item container spacing={2} alignItems="center">
          <Grid item>
            <Avatar />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">Author Name</Typography>
          </Grid>
        </Grid>

        <Grid item md={8}>
          <Stack spacing={2}>
            <Typography variant="h3" textAlign="start">
              Course Title
            </Typography>
            <Typography variant="body1" textAlign="justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, sapien vel bibendum bibendum, velit sapien bibendum
              sapien, vel bibendum sapien velit vel sapien. Sed euismod, sapien
              vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum
              sapien velit vel sapien. Sed euismod, sapien vel bibendum
              bibendum, velit sapien bibendum sapien, vel bibendum sapien velit
              vel sapien. Sed euismod, sapien vel bibendum bibendum, velit
              sapien bibendum sapien, vel bibendum sapien velit vel sapien. Sed
              euismod, sapien vel bibendum bibendum, velit sapien bibendum
              sapien, vel bibendum sapien velit vel sapien. Sed euismod, sapien
              vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum
              sapien velit vel sapien. Sed euismod, sapien vel bibendum
              bibendum, velit sapien bibendum sapien, vel bibendum sapien velit
              vel sapien. Sed euismod, sapien vel bibendum bibendum, velit
              sapien bibendum sapien, vel bibendum sapien velit vel sapien.
              <br />
              <br />
              Sedeuismod, sapien vel bibendum bibendum, velit sapien bibendum
              sapien, vel bibendum sapien velit vel sapien. Sed euismod, sapien
              vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum
              sapien velit vel sapien. Sed euismod, sapien vel bibendum
              bibendum, velit sapien bibendum sapien, vel bibendum sapien velit
              vel sapien. Sed euismod, sapien vel bibendum bibendum, velit
              sapien bibendum sapien, vel bibendum sapien velit vel sapien. Sed
              euismod, sapien vel bibendum bibendum, velit sapien bibendum
              sapien, vel bibendum sapien velit vel sapien. Sed euismod, sapien
              vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum
              sapien velit vel sapien. Sed euismod, sapien vel bibendum
              bibendum, velit sapien bibendum sapien, vel bibendum sapien velit
              vel sapien. Sed euismod, sapien vel bibendum bibendum, velit
              sapien bibendum sapien, vel bibendum sapien velit vel sapien. Sed
              euismod, sapien vel bibendum bibendum, velit sapien bibendum
              sapien, vel bibendum sapien velit vel sapien. Sed euismod, sapien
              vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum
              sapien velit vel sapien. Sed euismod, sapien vel bibendum
              bibendum, velit sapien bibendum sapien, vel bibendum sapien velit
              vel sapien. Sed euismod, sapien vel bibendum bibendum, velit
              sapien bibendum sapien, vel bibendum sapien velit vel sapien. Sed
              euismod, sapien vel bibendum bibendum, velit sapien bibendum
              sapien, vel bibendum sapien velit vel sapien. Sed euismod, sapien
              vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum
              sapien velit vel sapien.
              <br />
              <br />
              Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum
              sapien, vel bibendum sapien velit vel sapien. Sed euismod, sapien
              vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum
              sapien velit vel sapien. Sed euismod, sapien vel bibendum
              bibendum, velit sapien bibendum sapien, vel bibendum sapien velit
              vel sapien. Sed euismod, sapien vel bibendum bibendum, velit
              sapien bibendum sapien, vel bibendum sapien velit vel sapien. Sed
              euismod, sapien vel bibendum bibendum, velit sapien bibendum
              sapien, vel bibendum sapien velit vel sapien. Sed euismod, sapien
              vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum
              sapien velit vel sapien. Sed euismod, sapien vel bibendum
              bibendum, velit sapien bibendum sapien, vel bibendum sapien velit
              vel sapien. Sed euismod, sapien vel bibendum bibendum, velit
              sapien bibendum sapien, vel bibendum sapien velit vel sapien.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default StreamPage;
