import Grid from "@mui/material/Grid";
import Cards from "./Cards";
import { Typography } from "@mui/material";

import axios from "axios";
import { useEffect } from "react";

export const BestOffers = () => {
  const Offers = [
    "https://im1.dineout.co.in/images/uploads/misc/2020/Nov/20/30offid.png?tr=tr:n-small",
    "https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/25offid.png?tr=tr:n-small",
    "https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/20offid.png?tr=tr:n-small",
    "https://im1.dineout.co.in/images/uploads/misc/2020/Nov/20/15offid.png?tr=tr:n-small",
  ];

  useEffect(() => {
    axios.get("http://localhost:4000/").then((res) => {
      console.log("res", res);
    });
  }, []);

  return (
    <>
      <Grid
        container
        marginTop={"5%"}
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item>
          <Typography variant="h4">Best Offers</Typography>
        </Grid>
        <Grid
          container
          flexDirection={"row"}
          justifyContent="center"
          alignItems="flex-start"
          lg={12}
          spacing={2}
          marginTop={"5%"}
        >
          {Offers.map((image) => {
            return <Cards image={image} />;
          })}
        </Grid>
      </Grid>
    </>
  );
};
