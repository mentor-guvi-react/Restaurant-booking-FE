import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";

export default function Cards({ image }) {
  return (
    <Grid item>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <img src={image} />
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Grid>
  );
}
