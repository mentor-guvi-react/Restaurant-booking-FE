import { Grid } from "@mui/material";
import { NavBar } from "../NavBar";
import styles from "./booking.module.css";
import Filter from "./Filter";
import BreadCrumbs from "./BreadCrumbs";
import HotelDetails from "./HotelDetails";
import { useNavigate } from "react-router-dom";
import StyledButton from "../StyledButton";

export const BookingLayout = () => {
  const Header = () => {
    const navigate = useNavigate();
    return (
      <Grid
        container
        justifyContent={"center"}
        className={styles.headerclass}
        columnSpacing={4}
      >
        <Grid item>
          <StyledButton
            text={"Home"}
            onClick={() => {
              navigate("/home");
            }}
            size="large"
          ></StyledButton>
        </Grid>
        <Grid item>
          <StyledButton
            size="large"
            text={"Book A table"}
            onClick={() => {
              navigate("/booking-page");
            }}
          ></StyledButton>
        </Grid>
        <Grid item>
          <StyledButton text={"Blog"} size="large"></StyledButton>
        </Grid>
      </Grid>
    );
  };

  return (
    <Grid container lg={12} width={"100%"}>
      <NavBar type={1}></NavBar>
      <Header></Header>

      <Grid container paddingTop={"2%"}>
        <Grid item paddingLeft={"3%"} lg={3}>
          <Filter />
        </Grid>

        <Grid item paddingLeft={"2%"} width={"72%"}>
          <BreadCrumbs />
          <HotelDetails />
        </Grid>
      </Grid>
    </Grid>
  );
};
