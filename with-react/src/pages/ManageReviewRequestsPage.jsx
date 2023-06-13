import {
  Box,
  Container,
  Stack,
  Tab,
  TableContainer,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";
import TabPanel from "sections/@dashboard/TablePanel";
import CourseReviewTab from "sections/@dashboard/admin/reviews/tabs/CourseReviewTab";
import ProfileVerificationTab from "sections/@dashboard/admin/reviews/tabs/ProfileVerificationTab";

const ManageReviewRequestsPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Course Review Requests" />
          <Tab label="Profile Verification" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CourseReviewTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProfileVerificationTab />
      </TabPanel>
    </Box>
  );
};

export default ManageReviewRequestsPage;
