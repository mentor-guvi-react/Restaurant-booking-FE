import axios from "axios";

const baseUrlLocal = "http://localhost:4000";

export const postLogin = ({ email, password }) => {
  return axios.post(baseUrlLocal + "/login", {
    email,
    password,
  });
};
