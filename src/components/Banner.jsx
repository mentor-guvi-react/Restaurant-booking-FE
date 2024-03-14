import styles from "./banner.module.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";

import Button from "@mui/material/Button";

export const Banner = () => {
  return (
    <Grid
      container
      className={styles.banner_div}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <TextField
          className={styles.banner_search}
          classes="textfield"
          color="primary"
          id="input-with-icon-textfield"
          //   label="TextField"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="start">
                <Button variant="contained" color="inherit">
                  Search
                </Button>
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Grid>
    </Grid>
  );
};
