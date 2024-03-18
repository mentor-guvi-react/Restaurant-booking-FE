import { Grid, Button } from "@mui/material";
import { NavBar } from "../NavBar";
import styles from "./booking.module.css";
import Filter from "./Filter";
export const BookingLayout = () => {
  const Header = () => {
    return (
      <Grid
        container
        justifyContent={"center"}
        className={styles.headerclass}
        columnSpacing={4}
      >
        <Grid item>
          <Button size="large">Home</Button>
        </Grid>
        <Grid item>
          <Button size="large">Book A table</Button>
        </Grid>
        <Grid item>
          <Button size="large">Blog</Button>
        </Grid>
      </Grid>
    );
  };

  return (
    <Grid container>
      <NavBar></NavBar>
      <Header></Header>
      <Grid container lg={12}>
        <Grid item lg={4}>
          <Filter />
        </Grid>

        <Grid item lg={4}>
          hotel details
        </Grid>
      </Grid>
    </Grid>
  );
};
