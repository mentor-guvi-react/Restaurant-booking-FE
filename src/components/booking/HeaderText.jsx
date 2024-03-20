import { Grid, Typography, MenuItem, Select, FormControl } from "@mui/material";

import { sortFilter } from "../utils";

export default function HeaderText({ sort, location, setSort }) {
  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item>
        <Typography
          style={{ fontWeight: "bold", textWrap: "nowrap" }}
          variant="h5"
          component="h3"
        >
          Best Restaurants Near Me in {location}
        </Typography>
      </Grid>

      <Grid item width={"30%"}>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"row"}
        >
          <Typography
            style={{ fontWeight: "bold", textWrap: "nowrap" }}
            variant="h6"
            component="h6"
          >
            Sort by
          </Typography>
          <FormControl style={{ width: "50%" }}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sort}
              onChange={handleChange}
            >
              {sortFilter.map((ele) => (
                <MenuItem value={ele}>{ele}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
}
