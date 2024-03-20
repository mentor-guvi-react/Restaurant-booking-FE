import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import StyledButton from "./StyledButton";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import { LoginModal } from "./LoginModal";
import { BookingModal } from "./BookingModal";
import SearchBox from "./SearchBox";
import { useNavigate } from "react-router-dom";
import { locations } from "./utils";
import CustomizedSnackbars from "./booking/SnackBar";

export const NavBar = ({ type = 0 }) => {
  const [open, setOpen] = React.useState(0);
  const [showSnack, setshowSnack] = React.useState(false);

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = localStorage.getItem("login");
    console.log(isLogin, "isLogin");
    setIsLoggedIn(isLogin === "true");
  }, []);

  const handleClickOpen = (type) => {
    if (isLoggedIn && type === 2) {
      localStorage.setItem("login", "");
      setIsLoggedIn(false);
      window.location.reload();
      return;
    }
    setOpen(type);
  };

  const handleClose = () => {
    setOpen(0);
  };

  return (
    <>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Grid
            container
            spacing={8}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item>
              <img src="https://www.guvi.in/web-build/images/guvi-logo.8eeef9e2027d374479531095b012a87e.svg" />
            </Grid>

            <Grid item>
              <Grid container>
                <Grid item>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={locations}
                    sx={{ width: 300 }}
                    onChange={(e) => {
                      const searchedLocation = e.target.innerText;
                      // setSearchedLocation(searchedLocation);
                      searchedLocation?.length &&
                        navigate("/booking-page/" + searchedLocation);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Restaurants" />
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              {type == 0 ? (
                <Grid container>
                  <Grid item>
                    <StyledButton
                      text={"Home"}
                      onClick={() => navigate("/home")}
                      variant="text"
                      color="inherit"
                    ></StyledButton>
                  </Grid>
                  <Grid item>
                    {/* <Link to="/booking-page"> */}
                    <StyledButton
                      text={" Book A table"}
                      variant="text"
                      color="inherit"
                      onClick={() => navigate("/booking-page")}
                    ></StyledButton>
                    {/* </Link> */}
                  </Grid>
                  <Grid item>
                    <StyledButton
                      text={"Blog"}
                      variant="text"
                      color="inherit"
                    ></StyledButton>
                  </Grid>
                </Grid>
              ) : (
                <Grid container>
                  <SearchBox type={type} />
                </Grid>
              )}
            </Grid>

            {isLoggedIn && (
              <Grid item>
                <Grid justifySelf={"flex-end"} container spacing={2}>
                  <Grid item>
                    <StyledButton
                      onClick={() => handleClickOpen(3)}
                      variant="contained"
                      color="inherit"
                      text={"Booked History"}
                    ></StyledButton>
                  </Grid>
                </Grid>
              </Grid>
            )}

            <Grid item>
              <Grid justifySelf={"flex-end"} container spacing={2}>
                <Grid item>
                  <StyledButton
                    onClick={() => handleClickOpen(2)}
                    variant="contained"
                    color="inherit"
                    text={isLoggedIn ? "Logout" : "Login"}
                  ></StyledButton>
                </Grid>
                <Grid item>
                  {!isLoggedIn && (
                    <Grid item>
                      <StyledButton
                        onClick={() => handleClickOpen(1)}
                        variant="contained"
                        color="inherit"
                        text={"Register"}
                      ></StyledButton>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {open === 3 ? (
        <BookingModal
          setshowSnack={setshowSnack}
          handleClose={handleClose}
          open={open}
        />
      ) : (
        <LoginModal
          setIsLoggedIn={setIsLoggedIn}
          handleClose={handleClose}
          open={open}
        />
      )}

      {showSnack && (
        <>
          <CustomizedSnackbars
            isOpen={showSnack}
            text={`Booking is cancelled`}
            type={"error"}
          />
        </>
      )}
    </>
  );
};
