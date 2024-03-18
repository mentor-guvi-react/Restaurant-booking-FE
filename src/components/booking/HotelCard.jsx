import * as React from "react";
import { Grid, CardMedia, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";

export default function HotelCard({ handleClick }) {
  return (
    <Grid paddingTop={"2%"} container lg={12} rowGap={2} flexDirection={"row"}>
      {[1, 2, 3, 4, 5, 6].map((e) => (
        <Grid
          item
          lg={4}
          onClick={(e) => {
            handleClick();
          }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <div style={{ position: `relative` }}>
              <CardMedia
                component="img"
                height="194"
                image="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/d/m/p133271-170455034765995fcb87ba1.jpg?tr=tr:n-medium"
                alt="Paella dish"
              ></CardMedia>
              <div
                style={{
                  position: "absolute",
                  top: 5,
                  right: 5,
                  backgroundColor: "#b3ca42",
                  width: 30,
                  height: 30,
                }}
              >
                <Typography fontSize={18} color="white" variant="body2">
                  4.5
                </Typography>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 35,
                  right: 5,
                  width: 30,
                  height: 30,
                }}
              >
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </div>
            </div>
            <CardContent>
              <Typography textAlign={"left"} variant="h5">
                Delia My Bar Headquarters
              </Typography>
              <Typography
                textAlign={"left"}
                variant="body2"
                color="text.secondary"
              >
                Karol Bagh , Central Delhi
              </Typography>
              <Typography
                textAlign={"left"}
                variant="body2"
                color="text.secondary"
              >
                ₹ 1,600 for 2 approx | American, Bengali, 5 Star, Buffet,
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

const restaurant = {
  delhi: [
    {
      id: "sdkjnbfsd09234234",
      name: "Delia My Bar Headquarters",
      location: "Karol Bagh , Central Delhi",
      price: "162312",
      priceDetail: "₹ 1,600 for 2 approx",
      tags: [`American`, `Bengali`, `5 Star`, `Buffet`],
      ratings: 5.5,
      image: "",
      discount: 30,
    },
  ],
  mumbai: {},
  chennai: {},
};
