import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import { cancelBooking, postLogin, postResgistration } from "../api";
import { ButtonHover } from "./StyledButton";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { getBookingsForUserId } from "../api";

export const BookingModal = ({ open = 0, handleClose, setshowSnack }) => {
  const [bookingData, setBookingData] = useState([]);

  const getBookings = async (userId) => {
    const res = await getBookingsForUserId({ userId });

    if (res.data) {
      setBookingData(res.data);
    }
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      getBookings(userId);
    }
  }, []);

  const handleCancel = async (event, bookingId = "") => {
    event.preventDefault();
    console.log(bookingId, "bookingId");

    if (bookingId) {
      const res = await cancelBooking(bookingId);
      console.log(res, "res");
      if (res.data === `Cancelled Successfully`) {
        setshowSnack(true);
        handleClose();
      }
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          style: {
            maxWidth: "100%",
          },
        }}
      >
        <DialogTitle>{`My Booking`}</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Restaurant Id</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Seats</TableCell>
                  <TableCell align="right">Time</TableCell>
                  <TableCell align="right">Make Change</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookingData.map((row) => (
                  <TableRow
                    key={row.restaurantId}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.restaurantId.slice(0, 5)}
                    </TableCell>
                    <TableCell align="right">{row.selectedDate}</TableCell>
                    <TableCell align="right">{row.selectedSeat}</TableCell>
                    <TableCell align="right">{row.time}</TableCell>
                    <TableCell align="right">
                      <ButtonHover
                        onClick={(event) => handleCancel(event, row._id)}
                        text={"Cancel"}
                      ></ButtonHover>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
      </Dialog>
    </>
  );
};
