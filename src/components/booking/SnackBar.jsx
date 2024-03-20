import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function CustomizedSnackbars({ isOpen, text, type }) {
  return (
    <div>
      <Snackbar open={isOpen} autoHideDuration={6000}>
        <Alert
          //   onClose={handleClose}
          severity={type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {text}
        </Alert>
      </Snackbar>
    </div>
  );
}
