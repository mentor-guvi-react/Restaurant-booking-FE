import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import styles from "./banner.module.css";
import StyledButton from "./StyledButton";

export default function SearchBox() {
  return (
    <Grid item lg={12} padding={"5%"} width={480}>
      <TextField
        style={{
          boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
        }}
        className={styles.banner_search}
        classes="textfield"
        color="primary"
        id="input-with-icon-textfield"
        fullWidth={true}
        InputProps={{
          disableUnderline: true,
          style: {
            height: 40,
          },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="start">
              <StyledButton
                text={"Search"}
                variant="contained"
                color="inherit"
              ></StyledButton>
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </Grid>
  );
}
