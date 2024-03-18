import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Grid from "@mui/material/Grid";
import StyledButton from "./StyledButton";

export default function Cards({ image }) {
  return (
    <Grid item>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <img src={image} />
          </CardContent>
          <CardActions>
            <StyledButton size="small" text={"Learn More"}></StyledButton>
          </CardActions>
        </React.Fragment>
      </Card>
    </Grid>
  );
}
