import HeaderText from "./HeaderText";
import HotelCard from "./HotelCard";
import ConfirmBooking from "./ConfirmBooking";
import * as React from "react";

export default function HotelDetails({ location }) {
  const [open, setOpen] = React.useState(false);
  const [restaurantId, setRestaurantId] = React.useState("");

  const handleClick = (resId) => {
    setRestaurantId(resId);
    setOpen(!open);
  };

  return (
    <>
      <HeaderText location={location} />
      <HotelCard location={location} handleClick={handleClick} open={open} />
      <ConfirmBooking
        restaurantId={restaurantId}
        handleClick={handleClick}
        open={open}
      />
    </>
  );
}
