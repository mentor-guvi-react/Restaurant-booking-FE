import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { postLogin } from "../api";

export const LoginModal = ({ open = 0, handleClose }) => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    phonenumber: "",
    confirmpassword: "",
  });

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const email = formJson.email;
          console.log(formValue);
          handleClose();
          postLogin(formValue);
        },
      }}
    >
      <DialogTitle>{open === 1 ? `Register` : `Login`}</DialogTitle>
      <DialogContent>
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
        {open === 1 && (
          <>
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
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">{open === 1 ? `Register` : `Login`}</Button>
      </DialogActions>
    </Dialog>
  );
};
