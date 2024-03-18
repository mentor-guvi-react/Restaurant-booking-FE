import * as React from "react";
import { Box, Grid, Slider, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import TimePicker from "./TimePicker";
import StyledButton from "../StyledButton";

export default function ConfirmBooking({ handleClick, open }) {
  const [selectedDate, setSelectedDate] = React.useState("");

  const handleDateChange = (value) => {
    console.log(value, "value");

    const date = new Date(value).getDate();
    const year = new Date(value).getFullYear();
    const month = new Date(value).getMonth() + 1;

    const localData = `${date}-${month}-${year}`;
    setSelectedDate(localData);
  };
  return (
    <>
      <Modal
        style={{ padding: 0 }}
        open={open}
        onClose={handleClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ width: "100%", background: "black" }}>
            <Typography
              id="modal-modal-title"
              color={"white"}
              variant="h6"
              component="h2"
              textAlign={"center"}
              fontWeight={"bold"}
            >
              Select an Offer or Deal
            </Typography>
          </div>

          <Grid container justifyContent={"center"} style={{ padding: 16 }}>
            <Typography
              textAlign={"center"}
              id="modal-modal-description"
              sx={{ mt: 2 }}
            >
              Select Seats
            </Typography>
            <Box sx={{ width: 300 }}>
              <Slider
                aria-label="Temperature"
                defaultValue={0}
                valueLabelDisplay="auto"
                shiftStep={1}
                step={1}
                marks
                min={0}
                max={10}
              />
            </Box>

            <Typography
              textAlign={"center"}
              id="modal-modal-description"
              sx={{ mt: 2 }}
            >
              Select Booking Date
            </Typography>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  views={["year", "month", "day"]}
                  onChange={handleDateChange}
                  label=""
                  disablePast
                  renderInput={(params) => (
                    <TextField style={{ width: "100%" }} {...params} />
                  )}
                />
              </DemoContainer>
            </LocalizationProvider>

            <TimePicker />

            <Grid item paddingTop={"5%"}>
              <StyledButton text={"Create Booking"} />
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 0,
};
