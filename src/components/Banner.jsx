import styles from "./banner.module.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";

import Button from "@mui/material/Button";
import SearchBox from "./SearchBox";

export const Banner = () => {
  return (
    <Grid
      container
      className={styles.banner_div}
      justifyContent="center"
      alignItems="center"
      lg={12}
    >
      <Grid item lg={4}>
        <SearchBox />
      </Grid>
    </Grid>
  );
};
