import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import { LoginModal } from "./LoginModal";
export const NavBar = () => {
  const [open, setOpen] = React.useState(0);

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  useEffect(() => {
    const isLogin = localStorage.getItem("login");
    console.log(isLogin, "isLogin");
    setIsLoggedIn(isLogin === "true");
  }, []);

  const handleClickOpen = (type) => {
    setOpen(type);
  };

  const handleClose = () => {
    setOpen(0);
  };

  return (
    <>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Grid container>
            <Grid item>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={locations}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Restaurants" />
                )}
              />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item>
              <Button variant="text" color="inherit">
                Home
              </Button>
            </Grid>
            <Grid item>
              <Button variant="text" color="inherit">
                Book A table
              </Button>
            </Grid>
            <Grid item>
              <Button variant="text" color="inherit">
                Blog
              </Button>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item>
              <Button
                onClick={() => handleClickOpen(2)}
                variant="contained"
                color="inherit"
              >
                {isLoggedIn ? "Logout" : "Login"}
              </Button>
            </Grid>

            {!isLoggedIn && (
              <Grid item>
                <Button
                  onClick={() => handleClickOpen(1)}
                  variant="contained"
                  color="inherit"
                >
                  {"Register"}
                </Button>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
      <LoginModal handleClose={handleClose} open={open} />
    </>
  );
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const locations = [
  { label: "Delhi", id: 1994 },
  { label: "Chennai", year: 8923 },
  { label: "Mumbai", year: 3456 },
];
