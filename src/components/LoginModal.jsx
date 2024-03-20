import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import { postLogin, postResgistration } from "../api";
import StyledButton from "./StyledButton";

export const LoginModal = ({
  open = 0,
  handleClose,
  setIsLoggedIn = () => {},
}) => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    phonenumber: "",
    confirmpassword: "",
    username: "",
  });

  const handleUserLogin = (res = {}) => {
    localStorage.setItem("login", "true");
    res.data.username &&
      localStorage.setItem("userId", res.data.username || "");
    setIsLoggedIn(true);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: async (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const email = formJson.email;
          console.log(formValue);
          handleClose();

          if (open === 1) {
            const res = await postResgistration(formValue);
            if (res.status === 200) {
              handleUserLogin(res);
            }
          } else if (open === 2) {
            const res = await postLogin(formValue);
            if (res.status === 200) {
              handleUserLogin(res);
            }
          }
        },
      }}
    >
      <DialogTitle>{open === 1 ? `Register` : `Login`}</DialogTitle>
      <DialogContent>
        {/* login fields */}
        <TextField
          onChange={(e) => {
            setFormValue({
              ...formValue,
              username: e.target.value,
            });
          }}
          autoFocus
          required
          margin="dense"
          id="username"
          name="username"
          label="Username"
          type="text"
          fullWidth
          variant="standard"
        />

        <TextField
          onChange={(e) => {
            setFormValue({
              ...formValue,
              password: e.target.value,
            });
          }}
          autoFocus
          required
          margin="dense"
          id="password"
          name="password"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
        />
        {/* resgistration fields */}
        {open === 1 && (
          <>
            <TextField
              onChange={(e) => {
                setFormValue({
                  ...formValue,
                  email: e.target.value,
                });
              }}
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              onChange={(e) => {
                setFormValue({
                  ...formValue,
                  confirmpassword: e.target.value,
                });
              }}
              autoFocus
              required
              margin="dense"
              id="confirmpassword"
              name="confirmpassword"
              label="Confirm Password"
              type="password"
              fullWidth
              variant="standard"
            />
            <TextField
              onChange={(e) => {
                setFormValue({
                  ...formValue,
                  phonenumber: e.target.value,
                });
              }}
              autoFocus
              required
              margin="dense"
              id="phonenumber"
              name="phonenumber"
              label="Phone Number"
              type="number"
              fullWidth
              variant="standard"
            />
          </>
        )}
      </DialogContent>
      <DialogActions>
        <StyledButton text={"Cancel"} onClick={handleClose}></StyledButton>
        <StyledButton
          text={open === 1 ? `Register` : `Login`}
          type="submit"
        ></StyledButton>
      </DialogActions>
    </Dialog>
  );
};
