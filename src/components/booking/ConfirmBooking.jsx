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
import { createBooking } from "../../api";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import Fade from "@mui/material/Fade";

export default function ConfirmBooking({
  handleClick,
  open,
  restaurantId = "",
}) {
  const [formValue, setFormValue] = React.useState({
    restaurantId: restaurantId,
    selectedSeat: 2,
    selectedDate: "22-3-2024",
    time: "12 PM - 1 PM",
  });

  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
    bookingId: "",
  });

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  const handleDateChange = (value) => {
    const date = new Date(value).getDate();
    const year = new Date(value).getFullYear();
    const month = new Date(value).getMonth() + 1;

    const localData = `${date}-${month}-${year}`;

    setFormValue({
      ...formValue,
      selectedDate: localData,
    });
  };

  const handleSubmit = async () => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      const res = await createBooking({ ...formValue, restaurantId, userId });
      console.log(res);

      if (res?.data?._id) {
        setState({
          ...state,
          open: true,
          bookingId: res?.data?._id,
        });
      }
    }
  };

  const handleSliderChange = (event) => {
    setFormValue({
      ...formValue,
      selectedSeat: event.target.value,
    });
  };

  const handleClipClick = (time) => {
    setFormValue({
      ...formValue,
      time,
    });
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
              variant="h6"
              fontWeight={900}
            >
              {formValue.selectedSeat
                ? `${formValue.selectedSeat} Seats Selected`
                : `Select Seats`}
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
                onChange={handleSliderChange}
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

            <TimePicker
              selectedTime={formValue.time}
              handleClipClick={handleClipClick}
            />

            <Grid item paddingTop={"5%"}>
              <StyledButton onClick={handleSubmit} text={"Create Booking"} />
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <>
        <Snackbar
          open={state.open}
          onClose={handleClose}
          TransitionComponent={state.Transition}
          key={state.Transition.name}
          autoHideDuration={1200}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Booking Created Success with id {state.bookingId}
          </Alert>
        </Snackbar>
      </>
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
