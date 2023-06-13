import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DraftTab from "sections/@dashboard/blog/tabs/DraftTab";
import PublishedTab from "sections/@dashboard/blog/tabs/PublishedTab";
import RejectedTab from "sections/@dashboard/blog/tabs/RejectedTab";
import TabPanel from "sections/@dashboard/TablePanel";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ManageCoursesPage() {
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
          <Tab label="Draft" {...a11yProps(0)} />
          <Tab label="Published" {...a11yProps(1)} />
          <Tab label="Rejected" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DraftTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PublishedTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <RejectedTab />
      </TabPanel>
    </Box>
  );
}
