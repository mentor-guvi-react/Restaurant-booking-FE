import { Button, ButtonBase, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function StyledButton(props) {
  return (
    <Button
      {...props}
      type="normal"
      style={{
        backgroundColor: "#FF645A",
        color: "white",
        textTransform: "capitalize",
      }}
    >
      {props.text}
    </Button>
  );
}

export function ButtonHover(props) {
  return (
    <Grid item padding={1}>
      <ButtonHoverStyled focusRipple {...props}>
        <Typography
          padding={1}
          component="span"
          variant="subtitle1"
          color="inherit"
        >
          {props.text}
        </Typography>
      </ButtonHoverStyled>
    </Grid>
  );
}

const ButtonHoverStyled = styled(ButtonBase)(() => ({
  backgroundColor: "white",
  color: "rgb(255, 100, 90)",
  textTransform: "capitalize",
  border: "2px solid white",
  borderBottom: "2px solid rgb(255, 100, 90)",
  borderRadius: 0,

  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    border: "2px solid rgb(255, 100, 90)",
    borderRadius: 10,
  },
}));
