import * as React from "react";
import { Grid, CardMedia, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import { SUPPORTED_LOCATIONS, restaurant } from "../utils";

export default function HotelCard({
  handleClick,
  location,
  checkedFilters,
  sort,
}) {
  let restaurantData = SUPPORTED_LOCATIONS.includes(location.toLowerCase())
    ? restaurant[location.toLowerCase()]
    : restaurant.delhi;

  if (checkedFilters.length) {
    restaurantData = restaurantData.filter((ele) => {
      let matchFound = true;
      ele.tags.forEach((tag) => {
        if (checkedFilters.includes(tag)) {
          matchFound = false;
          return matchFound;
        }
      });
      return !matchFound;
    });
  }

  const callback = (one, two, type, isReverse = false) => {
    const firstRating = Number(one[type]);
    const twoRating = Number(two[type]);

    if (firstRating > twoRating) return isReverse ? -1 : 1;
    if (firstRating < twoRating) return isReverse ? 1 : -1;
  };

  if (sort) {
    if (sort === "Rating") {
      restaurantData.sort((a, b) => callback(a, b, "ratings"));
    } else if (sort === "Price: Low to High") {
      restaurantData.sort((a, b) => callback(a, b, "price"));
    } else if (sort === "Price: High to Low") {
      restaurantData.sort((a, b) => callback(a, b, "price", true));
    }
  }

  return (
    <Grid
      style={{ cursor: "pointer" }}
      paddingTop={"2%"}
      container
      lg={12}
      rowGap={2}
      flexDirection={"row"}
    >
      {restaurantData?.map((eachRestaurant) => (
        <Grid
          item
          lg={4}
          onClick={() => {
            handleClick(eachRestaurant.id);
          }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <div style={{ position: `relative` }}>
              <CardMedia
                component="img"
                height="194"
                image={eachRestaurant.image}
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
                  {eachRestaurant.ratings}
                </Typography>
              </div>
              {/* <div
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
              </div> */}
            </div>
            <CardContent>
              <Typography textAlign={"left"} variant="h5">
                {eachRestaurant.name}
              </Typography>
              <Typography
                textAlign={"left"}
                variant="body2"
                color="text.secondary"
              >
                {eachRestaurant.location}
              </Typography>
              <Typography
                textAlign={"left"}
                variant="body2"
                color="text.secondary"
              >
                {eachRestaurant.priceDetail} | |{" "}
                {eachRestaurant?.tags?.map((e) => ` ${e}`)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
