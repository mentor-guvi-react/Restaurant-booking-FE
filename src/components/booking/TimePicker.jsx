import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Grid, Box, Chip } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";

export default function TimePicker({ handleClipClick }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Morning" value="1" />
            <Tab label="Afternoon" value="2" />
            <Tab label="Dinner" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Grid
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            // flexWrap={"wrap"}
            listStyle={"none"}
            overflow={"auto"}
            spacing={4}
            container
          >
            {chipdata.morning.map((data) => {
              return (
                <Grid item>
                  <Chip
                    onClick={() => handleClipClick(data.label)}
                    clickable
                    label={data.label}
                  />
                </Grid>
              );
            })}
          </Grid>
        </TabPanel>
        <TabPanel value="2">
          <Grid
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            // flexWrap={"wrap"}
            listStyle={"none"}
            overflow={"auto"}
            spacing={4}
            container
          >
            {chipdata.afternoon.map((data) => {
              return (
                <Grid item>
                  <Chip
                    onClick={() => handleClipClick(data.label)}
                    clickable
                    label={data.label}
                  />
                </Grid>
              );
            })}
          </Grid>
        </TabPanel>
        <TabPanel value="3">
          <Grid
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            // flexWrap={"wrap"}
            listStyle={"none"}
            overflow={"auto"}
            spacing={4}
            container
          >
            {chipdata.dinner.map((data) => {
              return (
                <Grid item>
                  <Chip
                    onClick={() => handleClipClick(data.label)}
                    clickable
                    label={data.label}
                  />
                </Grid>
              );
            })}
          </Grid>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

const chipdata = {
  morning: [
    { key: 0, label: "9 AM - 10 AM" },
    { key: 1, label: "10 AM - 11 AM" },
    { key: 2, label: "11 AM - 12 AM" },
  ],
  afternoon: [
    { key: 3, label: "12 PM - 1 PM" },
    { key: 4, label: "1 PM - 2 PM" },
  ],
  dinner: [
    { key: 5, label: "6 PM - 7 PM" },
    { key: 6, label: "7 PM - 8 PM" },
    { key: 7, label: "8 PM - 9 PM" },
    { key: 8, label: "9 PM - 10 PM" },
    { key: 9, label: "10 PM - 11 PM" },
  ],
};
