import axios from "axios";

const baseUrlLocal = "http://localhost:4000";
const baseUrl = "https://restaurant-booking-node.onrender.com";

const apiUrl = process.env.REACT_APP_ENV === "production" ? baseUrl : baseUrlLocal;

export const postLogin = ({ password, username }) => {
  console.log(process.env, "process.env");
  return axios.post(apiUrl + "/login", {
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
  return axios.post(apiUrl + "/resgistration", {
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
  return axios.post(apiUrl + "/createBooking", {
    restaurantId,
    selectedSeat,
    selectedDate,
    time,
    userId,
  });
};

export const fetchRestaurentSlots = ({
  restaurantId = "",
  selectedDate = "",
}) => {
  return axios.post(apiUrl + "/restaurent-slot", {
    restaurantId,
    selectedDate,
  });
};

export const getBookingsForUserId = ({ userId = "" }) => {
  return axios.get(apiUrl + "/getBookings/" + userId);
};

export const cancelBooking = (bookingId) => {
  return axios.get(apiUrl + "/cancelBooking/" + bookingId);
};
