import axios from "axios";

const baseUrlLocal = "http://localhost:4000";
const baseUrl = "https://restaurant-booking-node.onrender.com";

export const postLogin = ({ password, username }) => {
  return axios.post(baseUrlLocal + "/login", {
    password,
    username,
  });
};

export const postResgistration = ({
  email,
  password,
  username,
  phonenumber,
}) => {
  return axios.post(baseUrlLocal + "/resgistration", {
    email,
    password,
    username,
    phonenumber,
  });
};

export const createBooking = ({
  restaurantId = "",
  selectedSeat = 0,
  selectedDate = "",
  time = "",
  userId,
}) => {
  return axios.post(baseUrlLocal + "/createBooking", {
    restaurantId,
    selectedSeat,
    selectedDate,
    time,
    userId,
  });
};
