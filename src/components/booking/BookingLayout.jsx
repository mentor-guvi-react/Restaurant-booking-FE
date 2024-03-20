import { Grid } from "@mui/material";
import { NavBar } from "../NavBar";
import styles from "./booking.module.css";
import Filter from "./Filter";
import BreadCrumbs from "./BreadCrumbs";
import HotelDetails from "./HotelDetails";
import { useNavigate } from "react-router-dom";
import { ButtonHover } from "../StyledButton";
import { useParams } from "react-router-dom";
import { SUPPORTED_LOCATIONS } from "../utils";
import { useState } from "react";

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
        <ButtonHover
          text={"Home"}
          onClick={() => {
            navigate("/home");
          }}
          size="large"
        ></ButtonHover>
      </Grid>
      <Grid item>
        <ButtonHover
          size="large"
          text={"Book A table"}
          onClick={() => {
            navigate("/booking-page");
          }}
        ></ButtonHover>
      </Grid>
      <Grid item>
        <ButtonHover text={"Blog"} size="large"></ButtonHover>
      </Grid>
    </Grid>
  );
};

export const BookingLayout = () => {
  const { location = "" } = useParams();

  const [checkedFilters, setCheckedFilters] = useState([]);

  const locationData = SUPPORTED_LOCATIONS.includes(location.toLowerCase())
    ? location
    : SUPPORTED_LOCATIONS[0];

  return (
    <Grid container lg={12} width={"100%"}>
      <NavBar type={1}></NavBar>
      <Header></Header>

      <Grid container paddingTop={"2%"}>
        <Grid item paddingLeft={"3%"} lg={3}>
          <Filter
            checkedFilters={checkedFilters}
            setCheckedFilters={setCheckedFilters}
          />
        </Grid>

        <Grid item paddingLeft={"2%"} width={"72%"}>
          <BreadCrumbs location={locationData} />
          <HotelDetails
            location={locationData}
            checkedFilters={checkedFilters}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
