import HeaderText from "./HeaderText";
import HotelCard from "./HotelCard";
import ConfirmBooking from "./ConfirmBooking";
import * as React from "react";

export default function HotelDetails() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <>
      <HeaderText />
      <HotelCard handleClick={handleClick} open={open} />
      <ConfirmBooking handleClick={handleClick} open={open} />
    </>
  );
}
