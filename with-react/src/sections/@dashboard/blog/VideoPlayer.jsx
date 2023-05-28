import { styled } from "@mui/system";
import React from "react";

const Video = styled("video")(({ theme }) => ({
  width: "100%",
  height: "100%",
  // Add any additional styles for the video player container
}));

const VideoPlayer = ({ src, type }) => {
  return (
    <Video controls>
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </Video>
  );
};

export default VideoPlayer;
